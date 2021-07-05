import css from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={css.friend}>
            <div className={css.avatar}>avatar</div>
            <p>{props.name}</p>
        </div>
    );
}

export default Friend;
