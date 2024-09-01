import { toast } from "react-hot-toast";
import css from "./CustomToast.module.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";

const CustomToast = (success = true, text) => {
  toast.custom(
    () => (
      <div className={css.toastBox}>
        <p className={css.text}>{text}</p>

        {success ? (
          <BsCheckCircleFill className={css.icon} />
        ) : (
          <BsFillXCircleFill className={css.iconX} />
        )}
      </div>
    ),
    {
      duration: 4000,
    }
  );
};

export default CustomToast;
