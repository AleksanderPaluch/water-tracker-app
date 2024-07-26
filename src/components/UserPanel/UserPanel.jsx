import css from "./UserPanel.module.css";
import user3 from "../../../assets/img/user3.png";
import { IoChevronDown } from "react-icons/io5";

import { useState } from "react";
import UserPopover from "../UserPopover/UserPopover";

const UserPanel = () => {
  const user = "Nadia";

  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div  className={css.userPanelBox}>
      <div className={css.welcomeBox}>
      <p className={css.welcomeText}>
        Hello <span className={css.welcomeName}>, {user}!</span>
      </p>

      </div>
    
      <div className={css.userPopoverContainer}>
        <button
          onClick={togglePopover}
          type="button"
          className={`${css.userPanelBtn}  ${isOpen ? css.isActive : ""}` }
        ><p className={css.userName}>{user} </p>
          {" "}
          <img className={css.userImg} src={user3} alt="user3" />
         <IoChevronDown className={css.icon} />
    
        </button>

        {isOpen && <UserPopover />}
      
      </div>
    </div>
  );
};

export default UserPanel;
