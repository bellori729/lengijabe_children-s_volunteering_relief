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
        <li>
          Socializing street children and youths to make them fit in society as
          responsible citizens.
        </li>
        <li>
          Promote community awareness and carrying out advocacy on matters
          related to street children including children rights
        </li>
        <li>
          Networking with other organizations and institutions for sharing
          information and experience, as well as collaborating on interventions
          that are geared to improve performance.
        </li>
        <li>
          Enhancing the institutional capacity of the organization for effective
          and efficient advancement of its mission.
        </li>
        <li>
          Apart from basic needs, children and youth are given access to
          opportunities for learning life-skills; engage in sports, gardening,
          art work, craft and religion- they are provided on individualized
          holistic basis.
        </li>
        <li>
          The disadvantaged children are sensitized to stay away from HIV/AIDS
          pandemic, while orphans access accommodation, street children enjoy
          opportunities to education and training.
        </li>
      </ul>
    </HomeContentsContainer>
  );
};

export default HomeTheOrganizationsMainGoals;
