import { toast } from "react-hot-toast";
import css from "./SignUpToast.module.css";

// Окрема функція для показу сповіщення
const SignUpToast = () => {
  toast.custom(() => (
    <div className={css.toastBox}>
      <div>
        <p className={css.title}>Your account has been created!</p>
        <p className={css.text}>
          Please check your email and confirm your address to complete the
          registration process.
        </p>
      </div>

      <div>
        <button className={css.btn} onClick={() => toast.dismiss()}>
          Close
        </button>
      </div>
    </div>
  ), {
    duration: Infinity,  // Тост не зникатиме самостійно
  });
};

export default SignUpToast;
