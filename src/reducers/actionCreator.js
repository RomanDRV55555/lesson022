
const addPost = (newpost = {}) => (
    {
        type: 'ADD_POST',
        post: newpost
    }
);

export default addPost