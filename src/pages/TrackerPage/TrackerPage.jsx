import Page from "../../components/Page/Page";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";

const TrackerPage = () => {
  return (
    <Page>
  
   <WaterMainInfo />
   <WaterDetailedInfo />
    </Page>
  );
};

export default TrackerPage;
