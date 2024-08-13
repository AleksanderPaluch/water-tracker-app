import { AdvantagesSection } from "../../components/AdvantagesSection/AdvantagesSection";

import Page from "../../components/Page/Page";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import css from "./ResetPasswordPage.module.css"

const ResetPasswordPage = () => {
  return (
    <Page>
         <ResetPasswordForm/>
      <div className={css.disabledBox}> 
     
        <AdvantagesSection />
      </div>
    </Page>
  );
};

export default ResetPasswordPage;