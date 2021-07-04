import css from "./Message.module.css"

const Message = (props) => {
    return (
        <div>
            <p className={css.message}>{props.message}</p>
        </div>
    );
}

export default Message;
