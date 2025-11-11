import BasicTemplate from "../../../../shared/components/templates/BasicTemplate";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeForeword from "../molecules/HomeForeword";
import HomeIntro from "../molecules/HomeIntro";
import HomeTitle from "../molecules/HomeTitle";
import HomeWhyDoChildrenLiveOnTheStreets from "../molecules/HomeWhyDoChildrenLiveOnTheStreets";

const HomeLayout = () => {
  return (
    <BasicTemplate className={classNameMerge(["pb-[50px]"])}>
      <HomeTitle />
      <HomeIntro />
      <HomeForeword />
      <HomeWhyDoChildrenLiveOnTheStreets />
    </BasicTemplate>
  );
};

export default HomeLayout;
