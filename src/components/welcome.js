import React from 'react';
import './welcome.css';
import {Link, Redirect} from 'react-router-dom'
import {getAuth} from '../actions'
import { connect } from 'react-redux'


class Welcome extends React.Component {
    constructor(props){
        super(props)

        this.state={}

        this.demoLogin = this.demoLogin.bind(this)
    }

    demoLogin(){
        console.log('clicked')
        console.log(this)
        const values={
            username: 'demologin',
            password: 'demopassword'
        }
        this.props.dispatch(getAuth(values))
        
    }


    render() {
        if(this.props.user){
            localStorage.username=this.props.user.username
            return (
                <Redirect to="/home" />
            )
        }
        return (
            <div>
                <div className="welcome-screen">
                    <div className="intro">
                        <p>Share songs that sound similar and get stuck in your head
                     </p>
                        <p>To see the newest EarBugs</p>
                        <Link className="button" to="/home">
                            Click Here
                        </Link>
                    </div>


                </div>
                <div className="links">
                    <div className="signup">
                        <p>To start making EarBugs</p>
                        <Link className="button" to="/signup">Click Here</Link>

                    </div>
                    <div className="account">
                        <p>Already have an account? </p>
                            <Link className="button" to="/signin">Log In</Link> 
                    </div>
                    <div className="demo">
                        <button onClick={this.demoLogin}>Demo Here</button>
                        
                    </div>
                </div>
                <div className="builtWith">
                    <p>This app was build using React, Redux, YouTube React, Mongo,
                         Mongoose, Express, Mocha, Chai, Jest
                </p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>( {
    user: state.videoReducer.user
})


export default connect(mapStateToProps)(Welcome)