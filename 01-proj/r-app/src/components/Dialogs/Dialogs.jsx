import css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogsData.map((dialog) => {
        return (<DialogItem id={dialog.id} name={dialog.name}/>);
    });
    const messagesElements = props.state.messagesData.map((message) => {
        return (<Message message={message.message}/>);
    });
    const newMessageElement = React.createRef();
    const sendMessage = () => {
        const text = newMessageElement.current.value;
        alert(text);
    };

    return (
        <div className={css.dialogsBlock}>
            <div className={css.dialogsItems}>
                <h3>My dialogs</h3>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
                <div className={css.newMessageBlock}>
                    <textarea ref={newMessageElement} cols="30" rows="5"></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
