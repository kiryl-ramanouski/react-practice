import css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogsData.map((dialog) => {
        return (<DialogItem id={dialog.id} name={dialog.name}/>);
    });
    const messagesElements = props.state.messagesData.map((message) => {
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
