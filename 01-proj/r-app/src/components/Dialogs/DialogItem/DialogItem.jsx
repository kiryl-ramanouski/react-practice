import css from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;

    return (
        <div className={css.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
