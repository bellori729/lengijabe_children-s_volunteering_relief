import { useTranslation } from "react-i18next";
import { mediumTextBold } from "../../../../shared/constants/fontStyle";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeForeword = () => {
  const { t } = useTranslation("foreword");

  return (
    <HomeContentsContainer className={"gap-[10px]"}>
      <h2 className={classNameMerge([mediumTextBold, "mt-[10px] text-center"])}>
        {t("title")}
      </h2>
      <p>
        <span className={classNameMerge(["font-bold"])}>{t("boldText")}</span>
        {t("paragraph1")}
      </p>
      <p>{t("paragraph2")}</p>
      <p>{t("paragraph3")}</p>
    </HomeContentsContainer>
  );
};

export default HomeForeword;
