import css from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="master.jpeg" alt="master" />
            </div>
            <div className={css.descriptionBlock}>
                Avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;
