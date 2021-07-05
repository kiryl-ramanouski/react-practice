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
            {message: "Hello, how are you?", likes: 10},
            {message: "It's my second post", likes: 20},
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

export default state;
