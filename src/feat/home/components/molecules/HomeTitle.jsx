import classNameMerge from "../../../../utils/classNameMerge";
import IMG_SRC_MAPPING from "../../../../shared/constants/imgSrcMapping";
import { largeTextBold } from "../../../../shared/constants/fontStyle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeTitle = () => {
  return (
    <HomeContentsContainer className={"mb-[10px], items-center"}>
      <img
        className={classNameMerge(["w-[35%] h-[35%]", "mt-[15px]"])}
        src={IMG_SRC_MAPPING.logo_vector}
        alt="Logo"
      />
      <h1 className={classNameMerge([largeTextBold, "text-center"])}>
        LENGIJABE CHILDREN'S
        <br />
        VOLUNTEERING RELIEF
        <br />
        (LECHIVORE)
      </h1>
    </HomeContentsContainer>
  );
};

export default HomeTitle;
