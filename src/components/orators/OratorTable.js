import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { addOratorWithId } from '../../store/actions/oratorActions'

import { Redirect } from 'react-router-dom'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

// import * as ROUTES from '../../constants/routes'

import manualOratorData from '../../scripts/orators'


const OratorTable = (props) => {
    const { orators } = props

    const [gridProps, setGridProps] = useState({
        columnDefs: [
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
    })
    
    const [gridApi, setGridApi] = useState(null)
    const [gridColumnApi, setGridColumnApi] = useState(null)
    const onGridReady = useCallback((params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        params.api.sizeColumnsToFit();
    }, [setGridApi, setGridColumnApi])
    const [selectedOratorId, setSelectedOratorId] = useState(null);
    const [selectedOrator, setSelectedOrator] = useState(null);
    
    const rowData = orators

    const onRowClicked = (data) => {
        setSelectedOratorId(data.data.id)
        setSelectedOrator(rowData[data.rowIndex])
    }

    const onRowDoubleClicked = () => {
        return (
            <Redirect to={`/orator/${selectedOratorId}`} />
        )
        
    }

    const onClick = () => {   
        manualOratorData.map(orator => {
            return props.addOratorWithId(orator)
        })
        
    }
    console.log('SelectedOratorId: '+selectedOratorId)
    console.log('SelectedOrator:',selectedOrator)

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
                    rowData={rowData}
                    resizeable={true}
                    rowSelection={'single'}
                    onGridReady={onGridReady}
                    columnDefs={gridProps.columnDefs}
                    onRowClicked={onRowClicked}
                    onRowDoubleClicked={onRowDoubleClicked}
                    >
                    
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

