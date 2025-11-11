import { mediumTextBold } from "../../../../shared/constants/fontStyle";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeTheOrganizationsMainGoals = () => {
  return (
    <HomeContentsContainer>
      <HomeContentsTitle>THE ORGANIZATION'S MAIN GOALS</HomeContentsTitle>
      <ul className={classNameMerge(["list-disc list-outside", "pl-[15px]"])}>
        <li>
          Provision of basic needs in the form of food, clothing, shelter,
          medical services and accommodation to orphans and street children and
          youths.
        </li>
        <li>
          Provision of formal and informal education, as well as vocational
          training to children and youths.
        </li>
      </ul>
    </HomeContentsContainer>
  );
};

export default HomeTheOrganizationsMainGoals;
