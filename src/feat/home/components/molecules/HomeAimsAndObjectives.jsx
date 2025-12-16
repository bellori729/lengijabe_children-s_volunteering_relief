import { useTranslation } from "react-i18next";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeAimsAndObjectives = () => {
  const { t } = useTranslation("aimsAndObjectives");

  return (
    <HomeContentsContainer>
      <HomeContentsTitle>{t("title")}</HomeContentsTitle>
      <p>{t("pTxt")}</p>
      <ul
        className={classNameMerge([
          "list-disc list-outside",
          "pl-[15px] mt-[10px]",
        ])}
      >
        <li>{t("liTxt1")}</li>
        <li>{t("liTxt2")}</li>
        <li>{t("liTxt3")}</li>
        <li>{t("liTxt4")}</li>
      </ul>
    </HomeContentsContainer>
  );
};

export default HomeAimsAndObjectives;
