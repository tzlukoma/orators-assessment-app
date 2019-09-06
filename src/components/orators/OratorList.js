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
                        <Link className="orator-item" style={{textDecoration: 'none'}} to={ROUTES.ORATOR+'/'+orator.id}  >
                        <OratorSummary orator={orator} />
                        </Link>
                    </Fragment>
                )

            }): null}

        </div>
    );
};

export default OratorList;