import { AdvantagesSection } from "../../components/AdvantagesSection/AdvantagesSection";
import Page from "../../components/Page/Page";
import SignUpForm from "../../components/SignUpForm/SignUpForm"


import css from "./SignUpPage.module.css";

const SignUpPage = () => {
  return (
    <Page>
      <SignUpForm />
      <div className={css.disabledBox}>
        <AdvantagesSection />
      </div>
    </Page>
  );
};

export default SignUpPage;
