import React from 'react';

const PostItem = (props) => {
    console.log('PostItem', props)
    return (
        <div>
            {props.match.params.id}
        </div>
    )
};

export default PostItem; 