import React, { Component } from 'react';
import classes from './FullPost.module.css';
import axios from 'axios';

class FullPost extends Component {

    state = {
        loadedPost: null
    }
    componentDidMount() {
        //console.log(this.props.match.params.id)
        if(this.props.match.params.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                axios.get(`/posts/${this.props.match.params.id}`)
                .then(response => {
                    //console.log(response.data);
                    this.setState({loadedPost: response.data})
                })
                .catch(err=> {
                    console.log(err);
                    
                })
            }
           
        }
    }

    deletePosthandler = () => {
        //console.log('clicked');
        
        axios.delete(`/posts/${this.props.id}`)
            .then(response => {
                //console.log(response);
                
            })
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;
         
        if(this.props.id) {
             post = <p style={{textAlign: "center"}}>Loading...!!!</p>;
        }
        
        if (this.state.loadedPost){
            
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete} onClick={this.deletePosthandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;