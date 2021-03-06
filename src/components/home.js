import React from 'react'
import './home.css'
import {getHome} from '../actions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'



export class Home extends React.Component {

componentDidMount(){
    console.log(this.props)
    this.props.dispatch(getHome(null))}

    
    render(){
        console.log(this.props.videoList)
        const videos = this.props.videoList.map(video =>
            <li key={video.id} className="folder-menu-list-item">
                <Link className="title" to={`/view/${video.id}`}>
                    {video.title}
                </Link>
                <br/>
                <span className="createdBy">Created By: {video.user.username}</span>
                <br/>               
                <span className="createdOn">{new Date(video.created).toLocaleDateString()}</span>
            </li>
        )
        return(
            <div className="Home">
                <h2>Home</h2>
                <ul id="homeList">
                    {videos}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    videoList: state.videoReducer.videoList
})

export default connect(mapStateToProps)(Home)