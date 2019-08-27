import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

import chapters from '../../_ref/chapters'



class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        chapter_id: '',
        chapter: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    handleChapterChange = (e) => {
        const userChapter = e.target.value && chapters.find(x => x.id === e.target.value)
                                ? chapters.find(x => x.id === e.target.value)
                                : {chapter_id:'',chapter:''};
        
            this.setState({
                chapter_id: userChapter.id ,
                chapter: userChapter.value
            })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
       this.props.signUp(this.state)
    }

    render() {
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <p className="blue lighten-5" style={{padding: 10}}>Please enter the Chapter code you were provided below:</p>
                    <div className="input-field">
                        <label htmlFor="chapter_id">Chapter Code</label>
                        <input type="text" id="chapter_id" onChange={this.handleChapterChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn deep-purple lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p>: null}
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);