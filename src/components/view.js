import React from 'react'
import './view.css'
import YouTubeComponent from './youtube.js'
import { connect } from 'react-redux'
import {getFile} from '../actions'

export class View extends React.Component{

    componentDidMount(){

        const videoId = this.props.match.params.videoId;
        this.props.dispatch(getFile(videoId));

    }



    render() {
        return(
            <div className="view-box" >
                <h2>{this.props.title}</h2>
                <div className="view1">
                    <YouTubeComponent video={this.props.video1} start={this.props.start1} end={this.props.end1} />
                </div>
                <div className="view2">
                    <YouTubeComponent  video={this.props.video2} start={this.props.start2} end={this.props.end2}/>
                </div>
                <h1>{this.props.title}</h1>
                <h3>Shared by {this.props.username}</h3>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    video1: state.videoReducer.video1,
    video2: state.videoReducer.video2,
    start1: state.videoReducer.start1,
    start2: state.videoReducer.start2,
    end1: state.videoReducer.end1,
    end2: state.videoReducer.end2,
    title: state.videoReducer.title,
    username: state.videoReducer.user ? state.videoReducer.user.username : ''
 
  });

export default connect(mapStateToProps)(View)