import React, { Fragment } from 'react';
import OratorSummary from './OratorSummary'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const OratorList = ({ orators }) => {
    
    return (
        <div className="orator-list section">
            {orators ? orators.map(orator => {
                return (
                    <Fragment key={orator.id}>
                        <Link className="orator-item" to={ROUTES.ORATOR+'/'+orator.id} key={orator.id} >
                        <OratorSummary orator={orator} key={orator.id}/>
                        </Link>
                    </Fragment>
                )

            }): null}

        </div>
    );
};

export default OratorList;