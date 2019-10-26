import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import * as ROUTES from '../../constants/routes'

const OratorTable = (props) => {
    console.log(props)
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

    return (
        <div className="orator-list section">
            <div
                className="ag-theme-material"
                style={{
                    // height: '400px',
                    width: '100%'
                }}
            >
                <h6>{orators && orators.length ? orators.length : 0} Total Records</h6>
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
export default compose(

    connect(mapStateToProps),
    firestoreConnect((props) => {
        console.log(props)
        return [
            {
                collection: 'orators',
                where: [
                    ['chapter_id', '==', props.chapter_id]
                    // ['chapter_id', '==', props.match.params.chapter_id]
                ]
            }
        ]
    })
)(OratorTable);

