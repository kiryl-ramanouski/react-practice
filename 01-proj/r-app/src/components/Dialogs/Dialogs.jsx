import css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: "Name1"},
        {id: 2, name: "Name2"},
        {id: 3, name: "Name3"},
    ];
    const messagesData = [
        {message: "Hello"},
        {message: "Hi"},
        {message: "How are you?"},
    ];

    const dialogsElements = dialogsData.map((dialog) => {
        return (<DialogItem id={dialog.id} name={dialog.name}/>);
    });
    const messagesElements = messagesData.map((message) => {
        return (<Message message={message.message}/>);
    });

    return (
        <div className={css.dialogsBlock}>
            <div className={css.dialogsItems}>
                <h3>My dialogs</h3>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
