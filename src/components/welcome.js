import React from 'react';
import './welcome.css';
import {Link} from 'react-router-dom'


class Welcome extends React.Component {

    render() {
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

export default Welcome