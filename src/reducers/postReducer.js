import mockPostsList from '../components/mock-PostsList';
import { ADD_POST } from '../components/constants';

export function postReducer(state = mockPostsList, action) {
    switch (action.type) {
        case ADD_POST:{
            const newPost = action.payload;
            return [...state, newPost];
        }
        default:
            return state;
    }
}