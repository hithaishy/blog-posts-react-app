import React from 'react';
import { Link } from 'react-router-dom';
const Main = ({ blogs }) => {

    console.log(blog)
    return (

        <div>
            { blogs && (
                <Route 
                    path="/:id"
                    render = {({ match }) => (
                        <DisplayBlogs 
                            blog = { blogs.find( u => u.id === match.params.id)}
                        />
                    )}
                />
            )}
        </div>
    );

};

export default Main;