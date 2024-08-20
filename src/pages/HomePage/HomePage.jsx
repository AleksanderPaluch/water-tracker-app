import { AdvantagesSection } from "../../components/AdvantagesSection/AdvantagesSection";
import Page from "../../components/Page/Page";
import { WelcomeSection } from "../../components/WelcomeSection/WelcomeSection";

const HomePage = () => {
  return (
    <Page>
      <WelcomeSection />
      <AdvantagesSection />
    </Page>
  );
};

export default HomePage;
