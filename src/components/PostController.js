import React from 'react';
class PostController extends React.Component {
    render() {
        return (
            <div>
                <h3> Blog Posts</h3>
                <div> {this.props.blogs} </div>

            </div>
        );
    };

};

export default PostController;

