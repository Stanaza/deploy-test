import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, how are you?', likes: 1},
                {id: 2, message: 'GOGGOGGOGOGOG', likes: 10},
                {id: 3, message: 'Something', likes: 130},
                {id: 4, message: 'FUuuuuuuu', likes: 120},
            ],
            newPostText: 'it-ReactJS'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra'},
                {id: 3, message: 'You'},
                {id: 4, message: 'HAHA'},
                {id: 5, message: 'HOHOH'},
                {id: 6, message: 'ZZzzz'}
            ],
            dialogs: [
                {id: 1, name: 'Dymich'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Gosha'},
                {id: 4, name: 'Donia'},
                {id: 5, name: 'Sveta'},
                {id: 6, name: 'Dasha'}
            ],
            newMessageText: ''
        },
        sideBar: {
            friendsNames: ['Andrew', 'Sasha', 'Sveta', 'Gosha', 'Corin']
        }
    },

    _callSubscriber () {
        console.log('State changed');
    },

    getState () {
        return this._state;
    },

    subscribe (observer){
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}

export  default store;
window.store = store;

