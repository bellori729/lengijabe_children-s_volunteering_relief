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
    </BasicTemplate>
  );
};

export default HomeLayout;
