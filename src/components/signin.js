import React from 'react'
import './signin.css'
import {getAuth, logout} from '../actions'
import {reduxForm, Field} from 'redux-form';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'

export class SignIn extends React.Component {
    onSubmit(values) {
        console.log(values);
        
     
        this.props.dispatch(getAuth(values))
        
             
        
        
    }
 

    componentDidMount(){
        this.props.dispatch(logout(null))

    }

    render() {
        console.log(this.props.user)
        if(this.props.user){
            localStorage.username=this.props.user.username
            return (
                <Redirect to="/home" />
            )
        }

        return (
            <form id="signInForm" onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
            )}>
                <label htmlFor="username">Username</label>
                <Field name="username" id="username" type="text" component="input" placeholder="Choose Your Name" />
                <label hmtlFor="password">Password</label>
                <Field name="password" id="password" type="password" component="input" />
                <button type="submit">Sign In</button>
                <br/>
                <Link className="createAcct" to="/signup">Create Account</Link>
                

            </form>

        )
    }
}
const mapStateToProps = state =>( {
    user: state.videoReducer.user
})
const SignInConnected = connect(mapStateToProps)(SignIn)

export default reduxForm({
    form: 'create'
})(SignInConnected);


