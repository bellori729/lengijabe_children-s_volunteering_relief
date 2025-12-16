import { useTranslation } from "react-i18next";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeMissionStatement = () => {
  const { t } = useTranslation("missionStatement");

  return (
    <HomeContentsContainer>
      <HomeContentsTitle>{t("title")}</HomeContentsTitle>
      <p>{t("pTxt")}</p>
    </HomeContentsContainer>
  );
};

export default HomeMissionStatement;
