import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

class SignIn extends Component {
    state = {
        email: '',
        password:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const { authError} = this.props
        return (
            
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn deep-purple lighten-1 z-depth-0">Login</button>
                        <Link to={ROUTES.SIGN_UP} className="btn grey z-depth-0" style={{marginLeft:10}}>Sign Up</Link>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p>:null}
                        </div>
                        <div style={{paddingBottom: 10}}><Link to={ROUTES.PASSWORD_FORGET}>Forgot your password?</Link></div>
                        <div ><Link className="grey-text" to={ROUTES.COACH_SIGNUP}>Coach Sign Up</Link></div>
                    </div>
                </form>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => {
            dispatch(signIn(creds))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn) ;