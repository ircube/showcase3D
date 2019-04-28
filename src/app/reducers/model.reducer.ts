import Model3D from '../interfaces/model.model';

// import { Model } from '../models/model.model';


// import * as PostActions from '../actions/post.actions';
// import { Post } from '../models/post.model'
// export type Action = PostActions.All;

/// Default app state
const defaultState: Model3D = {
    name: '',
    likes: 0
};

/// Helper function to create new state objcet
const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};

/// Reducer function
export function modelReducer() {
    // console.log(action.type, state)
    // switch (action.type) {
    //     case PostActions.EDIT_TEXT:
    //         return newState(state, { text: action.payload });
    //     default:
    //         return state;
}
