import {rerenderEntireTree} from "../render";

const state = {
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Name1"},
            {id: 2, name: "Name2"},
            {id: 3, name: "Name3"},
        ],
        messagesData: [
            {message: "Hello"},
            {message: "Hi"},
            {message: "How are you?"},
        ],
    },
    profilePage: {
        postsData: [
            {id: 1, message: "Hello, how are you?", likes: 10},
            {id: 2, message: "It's my second post", likes: 20},
        ],
    },
    nav: {
        friendsData: [
            {avatarColor: "red", name: "Name1"},
            {avatarColor: "yellow", name: "Name2"},
            {avatarColor: "green", name: "Name3"},
        ]
    }
}

export const functionality = {
    addPost: (postMessage) => {
        const newPost = {
            id: 3,
            message: postMessage,
            likes: 0,
        };
        state.profilePage.postsData.push(newPost);
        rerenderEntireTree(state);
    },

    addMessage: (message) => {
        const newMessage = {
            message: message,
        }
        state.dialogsPage.messagesData.push(newMessage);
        rerenderEntireTree(state);
    },
}

export default state;
