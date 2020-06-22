import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import classes from  './Blog.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render () {  
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to ='/' 
                            exact
                            activeClassName={classes.active}>POSTS</NavLink></li>
                            <li><NavLink activeClassName={classes.active} to = {{
                                pathname:"/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>NEW POST</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" component={Posts} exact />
                    <Route path='/new-post' component={NewPost} exact />
                    <Route path='/posts/:id' component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;