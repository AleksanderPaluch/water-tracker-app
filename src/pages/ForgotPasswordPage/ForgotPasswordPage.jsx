import { AdvantagesSection } from "../../components/AdvantagesSection/AdvantagesSection";
import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm";
import Page from "../../components/Page/Page";
import css from "./ForgotPasswordPage.module.css"

const ForgotPasswordPage = () => {
  return (
    <Page>
         <ForgotPasswordForm/>
      <div className={css.disabledBox}> 
     
        <AdvantagesSection />
      </div>
    </Page>
  );
};

export default ForgotPasswordPage;
