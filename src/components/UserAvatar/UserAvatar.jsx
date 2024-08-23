import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import css from "./UserAvatar.module.css";
import { apiGetCurrentUser, apiUploadPhoto } from "../../redux/user/operations";
import { selectIsLoading } from "../../redux/user/selectors";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const UserAvatar = ({ user }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        await dispatch(apiUploadPhoto(file)).unwrap();
        await dispatch(apiGetCurrentUser()).unwrap();
        toast.success("Avatar updated successfully!", {
          duration: 4000,
        });
      } catch (error) {
        console.log(error);
        toast.error("Unable to reach the server, please try again later", {
          duration: 4000,
        });
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

UserAvatar.propTypes = {
  user: PropTypes.object,
};

export default UserAvatar;
