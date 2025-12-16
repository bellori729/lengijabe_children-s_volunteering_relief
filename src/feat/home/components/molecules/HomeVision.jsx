import { useTranslation } from "react-i18next";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeVision = () => {
  const { t } = useTranslation("vision");

  return (
    <HomeContentsContainer>
      <HomeContentsTitle>{t("title")}</HomeContentsTitle>
      <p>{t("pTxt")}</p>
    </HomeContentsContainer>
  );
};

export default HomeVision;
