import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { addOratorWithId } from '../../store/actions/oratorActions'

import { Link } from 'react-router-dom'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import * as ROUTES from '../../constants/routes'

import manualOratorData from '../../scripts/orators'


const OratorTable = (props) => {
    const { orators } = props

    const columnDefs = [
        {
            headerName: "First Name",
            field: "firstName",
            filter: "agTextColumnFilter",
            width: 150,
            sortable: true
        },
        {
            headerName: "Last Name",
            field: "lastName",
            filter: "agTextColumnFilter",
            width: 150,
            sortable: true
        }, {
            headerName: "Age",
            field: "age",
            filter: "agNumberColumnFilter",
            width: 120,
            sortable: true
        }, {
            headerName: "Parent Name",
            field: "parentName",
            filter: "agTextColumnFilter",
            width: 250,
            sortable: true,
        }, {
            headerName: "Parent Email",
            field: "parentEmail",
            filter: "agTextColumnFilter",
            width: 250, sortable: true
        }
    ]

    const rowData = orators

    const onClick = () => {   
        manualOratorData.map(orator => {
            return props.addOratorWithId(orator)
        })
        
    }

    return (
        <div className="orator-list section">
            <div
                className="ag-theme-material"
                style={{
                    // height: '400px',
                    width: '100%'
                }}
            >
                <div className="row">
                    <div className="col s12 m6 l6">
                        <h6>{orators && orators.length ? orators.length : 0} Total Records</h6>
                    </div>
                    <div className="col s12 m2 l2"></div>
                    <div className="col s12 m4 l4">
                        <button onClick={onClick} className="btn deep-purple lighten-1 z-depth-0 hide-on-small-only right">Load Orators from File</button>
                    </div>
                </div>
                <br></br>
                <AgGridReact
                    domLayout={'autoHeight'}
                    columnDefs={columnDefs}
                    rowData={rowData}
                    resizeable={true}>

                </AgGridReact>
            </div>
        </div>
    );
};




const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        orators: state.firestore.ordered.orators,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOratorWithId: (orator) => {
            dispatch(addOratorWithId(orator))
        }
    }
}

export default compose(

    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => {
        return [
            {
                collection: 'orators',
                where: [
                    ['chapter_id', '==', props.chapter_id]
                ]
            }
        ]
    })
)(OratorTable);

