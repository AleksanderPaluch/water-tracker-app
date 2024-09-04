import Page from "../../components/Page/Page";
import SignInForm from "../../components/SignInForm/SignInForm";
import css from "./SignInPage.module.css"
import { AdvantagesSection } from "../../components/AdvantagesSection/AdvantagesSection";




const SignInPage =  () => {




  return (
    <Page>
      <SignInForm />
      
      <div className={css.disabledBox}>
      <AdvantagesSection />
      </div>
    </Page>
  );
};

export default SignInPage;
