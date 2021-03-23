import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const  DELETE_POST = 'DELETE_POST';


let initialState = {
    posts: [
        {id: 1, message: 'Hello, how are you?', likes: 1},
        {id: 2, message: 'GOGGOGGOGOGOG', likes: 10},
        {id: 3, message: 'Something', likes: 130},
        {id: 4, message: 'FUuuuuuuu', likes: 120},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText
            };
        };
        case SET_USER_PROFILE: {
            return  {
                ...state,
                profile: action.profile
            };
        }

        case DELETE_POST: {
            return  {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        }
        case SET_STATUS: {
            return  {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const updateNewTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export  const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export  const setStatus = (status) => ({type: SET_STATUS, status});
export  const deletePost = (postId) => ({type: DELETE_POST, postId});

//thunk

export const  getStatus = (userId) => async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }


export const  updateStatus = (status) =>  async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}

export const  getUserId = (userId) => async (dispatch) => {
     let response = await   usersAPI.getUserId(userId)
                dispatch(setUserProfile(response.data));
}
export  default  profileReducer;