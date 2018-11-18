import React from 'react';
import './welcome.css';


class Welcome extends React.Component {

    render() {
        return (
            <div className="welcome-screen">
                <div className="intro">
                    <h2>Welcome!!!</h2>
                    <p>View and post songs that sound similar and get stuck in your head
            </p>
                </div>

                <div className="links">
                    <p>To view some of our content click <a href="/home">Here</a></p>
                    <p>To sign up and create some of your own click <a href="/signup">Here</a></p>
                    <p>Already have an account? <a href="/signin">Log In</a> </p>
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