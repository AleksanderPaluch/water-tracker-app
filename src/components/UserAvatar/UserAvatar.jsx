import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import css from "./UserAvatar.module.css";
import { apiGetCurrentUser, apiUploadPhoto } from "../../redux/user/operations";
import { selectIsLoading } from "../../redux/user/selectors";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";

const UserAvatar = ({ user }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        await dispatch(apiUploadPhoto(file)).unwrap(); // Замінити на свою дію
        await dispatch(apiGetCurrentUser()).unwrap();
      } catch (error) {
        console.error(error);
      }
    }
  };

  //     if (file) {
  //       try {
  //         console.log(file);
  //         dispatch(apiUploadPhoto(file).unwrap()); // Замінити на свою дію
  //         toast.success("Avatar updated successfully!", {
  //           duration: 4000,
  //         });
  //       } catch (error) {
  //         if (error.message) {
  //           // Network error or server is down
  //           toast.error("Unable to reach the server, please try again later", {
  //             duration: 4000,
  //           });
  //         } else {
  //           // Handle other types of errors (e.g., wrong credentials)
  //           toast.error(error || "Failed update photo", {
  //             duration: 4000,
  //           });
  //         }
  //       }
  //     }
  //   };

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

export default UserAvatar;
