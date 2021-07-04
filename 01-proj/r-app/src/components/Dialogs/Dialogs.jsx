import css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={css.dialogsBlock}>
            <div className={css.dialogsItems}>
                <h3>My dialogs</h3>
                <DialogItem id="1" name="Name1"/>
                <DialogItem id="2" name="Name2"/>
                <DialogItem id="3" name="Name3"/>
                <DialogItem id="4" name="Name4"/>
                <DialogItem id="5" name="Name5"/>
                <DialogItem id="6" name="Name6"/>
            </div>
            <div className={css.messages}>
                <Message message="Hello"/>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="I'm fine, thank you!"/>
            </div>
        </div>
    );
}

export default Dialogs;
