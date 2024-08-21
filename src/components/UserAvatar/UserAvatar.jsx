import Icon from "../Icon/Icon";
import { useDispatch } from "react-redux";
import css from "./UserAvatar.module.css";
import { apiUploadPhoto } from "../../redux/user/operations";

const UserAvatar = ({user}) => {

  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        dispatch(apiUploadPhoto(file)); // Замінити на свою дію
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className={css.avatarBox}>
      <img className={css.userImg} src={user.avatarURL} alt="user-avatar" />
      <label className={css.uploadBtn}>
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="image/*"
        />
        <Icon width="18" height="18" iconName="upload" styles={css.icon} />
        <p className={css.text}>Upload a photo</p>
      </label>
    </div>
  );
};

export default UserAvatar;
