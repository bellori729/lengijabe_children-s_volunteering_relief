import BasicTemplate from "../../../../shared/components/templates/BasicTemplate";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeForeword from "../molecules/HomeForeword";
import HomeIntro from "../molecules/HomeIntro";
import HomeTitle from "../molecules/HomeTitle";
import HomeWhyDoChildrenLiveOnTheStreets from "../molecules/HomeWhyDoChildrenLiveOnTheStreets";
import HomeStreetLife from "../molecules/HomeStreetLife";
import HomeVision from "../molecules/HomeVision";
import HomeMissionStatement from "../molecules/HomeMissionStatement";
import HomeAimsAndObjectives from "../molecules/HomeAimsAndObjectives";
import HomeTheOrganizationsMainGoals from "../molecules/HomeTheOrganizationsMainGoals";
import HomeTheNGO from "../molecules/HomeTheNGO";
import HomeTheNGOwhite from "../molecules/HomeTheNGOwhite";
import HomeOfficeLocation from "../molecules/HomeOfficeLocation";
import HomeContact from "../molecules/HomeContact";

const HomeLayout = () => {
  return (
    <BasicTemplate className={classNameMerge(["pb-[50px]"])}>
      <HomeTitle />
      <HomeIntro />
      <HomeForeword />
      <HomeWhyDoChildrenLiveOnTheStreets />
      <HomeStreetLife />
      <HomeVision />
      <HomeMissionStatement />
      <HomeAimsAndObjectives />
      <HomeTheOrganizationsMainGoals />
      <HomeTheNGO />
      <HomeTheNGOwhite />
      <HomeOfficeLocation />
      <HomeContact />
    </BasicTemplate>
  );
};

export default HomeLayout;
