
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return  {
                ...state,
                newMessageText: action.newText
            }
        }
        case ADD_MESSAGE: {
            let newMessage = {
                id: 7,
                message: state.newMessageText
            };
            return  {
                ...state,
                newMessageText: '',
                messages: [... state.messages, newMessage],
            }
        };
        default:
            return  state;
    }
}
export const addMessageCreator = () => ({type:ADD_MESSAGE});
export const updateNewMessageCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT, newText: text});

export  default  dialogsReducer;