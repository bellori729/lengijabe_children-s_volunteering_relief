import { mediumTextBold } from "../../../../shared/constants/fontStyle";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeIntro = () => {
  return (
    <HomeContentsContainer>
      <h3 className={classNameMerge([mediumTextBold])}>
        Lengijabe Children's Volunteering Relief
      </h3>
      <ul className={classNameMerge(["list-disc list-inside"])}>
        <li>Targeting: The orphans, underprivileged, street children</li>
        <li>
          To provide care, education, parenting, grooming positive character,
          vision, habits, orientation, inspiration and appropriate moral -
          values, culture, and progressive norms in modern life in society.
        </li>
        <li>Vindicating multi-value efforts to coax material welfare.</li>
      </ul>
    </HomeContentsContainer>
  );
};

export default HomeIntro;
