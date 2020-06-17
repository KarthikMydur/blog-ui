import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from  './Blog.module.css';


class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
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


    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked={ () => this.postSelectedHandler(post.id) } />
        })
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;