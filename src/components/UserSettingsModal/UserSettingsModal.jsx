import Icon from "../Icon/Icon"
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm"
import css from "./UserSettingsModal.module.css"

const UserSettingsModal = ({closeModal}) => {
  return (
    <div className={css.settingsBox}>
        <p className={css.title}>Settings</p>
        <button type="button" onClick={closeModal} className={css.iconExitBtn}>
        {" "}
        <Icon width="24" height="24" iconName="x" className={css.iconExit} />
      </button>

    <UserSettingsForm closeModal={closeModal} />
    </div>
  )
}

export default UserSettingsModal
