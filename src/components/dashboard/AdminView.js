import React, { useState } from 'react';
import Select from 'react-select'

import OratorTable from '../orators/OratorTable'

import chapters from '../../_ref/chapters'

const options = chapters

const AdminView = (props) => {

    const [chapter, setChapter] = useState({ id: null })


    return (
        <div className="row">
            <div className="col s12 m8 l8">
                <h4>Select Chapter</h4>
                <div style={{ padding: 10 }}>
                    <Select
                        defaultValue={'Select an option'}
                        value={chapter}
                        options={options} //replace with mapStateToProps pulling chapters from database
                        onChange={chapter => setChapter(chapter)}
                        hideSelectedOptions={false}
                    />
                </div>

            </div>
            <div className="col s12 m12 l12">
                <h4>{chapter.value ? `Orators in ${chapter.value}` : `No chapter selected`}</h4>
                <div>
                    {!chapter.value ? `Search for a chapter to see list of orators` : null}
                </div>
                <div>
                <OratorTable chapter_id={chapter.id} value={chapter.value} />
                </div>
            </div>
        </div>
    );
}


export default (AdminView)
