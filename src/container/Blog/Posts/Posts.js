import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classes from './Posts.module.css';
import Post from '../../../components/Post/Post';

class Posts extends React.Component {

    state = {
        posts: []
    }

    componentDidMount () {
        axios.get('/posts')
            .then(response => {
                //console.log(response);
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Karthik',

                    }
                })
                this.setState({posts: updatedPosts})
            })
            .catch(err=> {
                console.log(err);
                
            })
    }

    postSelectedHandler = (id) => {
        // console.log(id);
         
         this.setState({selectedPostId: id})
     }
 
    render() {
        const posts = this.state.posts.map(post => {
            return( <Link to ={`posts/${post.id}`} key={post.id}> 
                        <Post  
                        title={post.title} 
                        author={post.author} 
                        clicked={ () => this.postSelectedHandler(post.id) } /> 
                    </Link>);
        })
        return (
            <section className={classes.Posts}>
                {posts}
            </section>
            
        )
    }
}
export default Posts