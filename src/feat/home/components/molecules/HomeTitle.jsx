import classNameMerge from "../../../../utils/classNameMerge";
import IMG_SRC_MAPPING from "../../../../shared/constants/imgSrcMapping";
import { largeTextBold } from "../../../../shared/constants/fontStyle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";
import { useTranslation } from "react-i18next";

const HomeTitle = () => {
  const { t } = useTranslation("title");

  const items = [t("title1"), t("title2"), t("title3")];

  return (
    <HomeContentsContainer className={"mb-[10px], items-center"}>
      <img
        className={classNameMerge(["w-[35%] h-[35%]", "mt-[15px]"])}
        src={IMG_SRC_MAPPING.logo_vector}
        alt="Logo"
      />
      <h1 className={classNameMerge([largeTextBold, "text-center"])}>
        {items.map((item, idx) => {
          if (idx === items.length - 1) {
            return <span key={idx}>{item}</span>;
          } else {
            return (
              <span key={idx}>
                {item}
                <br />
              </span>
            );
          }
        })}
      </h1>
    </HomeContentsContainer>
  );
};

export default HomeTitle;
