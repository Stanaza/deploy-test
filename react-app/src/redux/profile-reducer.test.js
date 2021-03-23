import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: 'Hello, how are you?', likes: 1},
        {id: 2, message: 'GOGGOGGOGOGOG', likes: 10},
        {id: 3, message: 'Something', likes: 130},
        {id: 4, message: 'FUuuuuuuu', likes: 120},
    ]
};
it('length of posts should be incremented', () => {
    //1.test data
    let action = addPostActionCreator("it-kamasutra.com")


    // 2. action

    let newState = profileReducer(state, action)

    // 3. expectation
   expect(newState.posts.length).toBe(5);
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});


it('after deleting legth of messages should be decrement', () => {
    let action = deletePost (1);

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})
