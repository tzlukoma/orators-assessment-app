import React, { Component } from 'react';
import moment from 'moment'


class OratorSummary extends Component {
    render() {
        const { firstName, lastName, dateOfBirth, parentName } = this.props.orator

        return (
            <div>
                <ul className="collection card z-depth-1" style={{ color: 'black' }}>
                    <li className="collection-item avatar">
                        <img src={`https://robohash.org/${firstName}${lastName}.png`} alt="" className="circle"></img>
                        <span style={{ color: 'black' }} className="title card-title">{firstName} {lastName} </span>
                        <p className="grey-text">      {moment().diff(dateOfBirth, 'years', false)} years old<br></br>
                            {parentName}'s Family
                    </p>
                    </li>
                </ul>
            </div>

        );
    }
}




export default (OratorSummary)