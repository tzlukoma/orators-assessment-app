import React from 'react';
import OratorSummary from './OratorSummary'
import { Link } from 'react-router-dom'

const OratorList = ({ orators }) => {
    return (
        <div className="assessment-list section">
            {orators && orators.map(orator => {
                return (
                    <Link to={'orator/'+orator.id} key={orator.id} >
                        <OratorSummary orator={orator} key={orator.id} />
                    </Link>
                )

            })}

        </div>
    );
};

export default OratorList;