import React from 'react';
import {reduxForm, Field, focus, SubmissionError } from 'redux-form';
import {newUser} from '../actions'
import './signup.css'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



export class SignUp extends React.Component {
    constructor(props){
        super(props)

        this.state={}
                }

    onSubmit(values) {
        console.log(values);
        if(values.password !== values.confirmpass){
            alert('Passwords do not match')
            return
        } else{

            
            
        
           
        return this.props.dispatch(newUser(values))
            .catch(err=>{
                this.setState({
                    error: err
                })
            })
    

        
        }
    }
 



    render() {
        let errorPassword;
        let errorUsername;
    if (this.state.error && this.state.error.errors.password) {
        
        errorPassword = (
            <div className="message message-error">{this.state.error.errors.password}</div>
        );
    }
    if (this.state.error && this.state.error.errors.username) {
        
        errorUsername = (
            <div className="message message-error">{this.state.error.errors.username}</div>
        );
    }

        console.log(this.props.user)
        if(this.props.user){
            return(
                <Redirect to="/home" />
            )
        }
        return (
            <form id="signUpForm" onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
            )}>
               <h2>Sign Up Now</h2> 
                <label htmlFor="username">Username</label>
                {errorUsername}
                <Field name="username" id="username" type="text" component="input" placeholder="Choose Your Name" />
                <label hmtlFor="password">Password</label>
                <Field name="password" id="password" type="password" component="input" placeholder="Min 10 Characters" />
                <label hmtlFor="confirmpass">Confirm Password</label>
                {errorPassword}
                <Field name="confirmpass" id="confirmpass" type="password" component="input" />

                <button type="submit">Create</button>
            </form>
        )
    }
}

const mapStateToProps = state =>( {
    user: state.videoReducer.user
})
const SignUpConnected = connect(mapStateToProps)(SignUp)

export default reduxForm({
    form: 'create',
    // onSubmitFail: (errors, dispatch) =>
    // dispatch(focus('contact', Object.keys(errors)[0]))
})(SignUpConnected);
