import css from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    const friendsElements = props.friendsData.map((friend) => {
        return (<Friend name={friend.name}/>);
    });

    return (
        <div className={css.friends}>
            <h3>My friends</h3>
            {friendsElements}
        </div>
    );
}

export default Friends;
