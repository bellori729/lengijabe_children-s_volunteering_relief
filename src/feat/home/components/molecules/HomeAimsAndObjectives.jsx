import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeAimsAndObjectives = () => {
  return (
    <HomeContentsContainer>
      <HomeContentsTitle>AIMS AND OBJECTIVES</HomeContentsTitle>
      <p>
        The Organization tries to find for the children a lasting alternative to
        street life by undertaking the following:-
      </p>
      <ul
        className={classNameMerge([
          "list-disc list-outside",
          "pl-[15px] mt-[10px]",
        ])}
      >
        <li>
          Providing for the children’s basic needs, shelter, food, clothing,
          Medicare and counseling, while preparing each one of them to join his
          or her family or guardians.
        </li>
        <li>
          Enabling children to gain access to education, training and skills to
          make them self-reliant.
        </li>
        <li>
          Carrying out family reunification of children where and when it is
          necessary.
        </li>
        <li>
          Preparing the children for reintegration into the mainstream society
          by providing them with the ability to start small income generation
          projects.
        </li>
      </ul>
    </HomeContentsContainer>
  );
};

export default HomeAimsAndObjectives;
