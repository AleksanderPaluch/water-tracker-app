
import { useState } from "react";
import Page from "../../components/Page/Page";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";
import { getDateObject } from "../../helpers/getDate";

const TrackerPage = () => {
  const [date, setDate] = useState(getDateObject());
  return (
    <Page>
      <WaterMainInfo />
      <WaterDetailedInfo date={date} setDate={setDate}  />
    </Page>
  );
};

export default TrackerPage;
