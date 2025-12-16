import { useTranslation } from "react-i18next";
import { mediumTextBold } from "../../../../shared/constants/fontStyle";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeIntro = () => {
  const { t } = useTranslation("intro");

  const title = t("title");
  const liItems = [t("liTxt1"), t("liTxt2"), t("liTxt3")];

  return (
    <HomeContentsContainer>
      <h3 className={classNameMerge([mediumTextBold, "mt-[20px]"])}>{title}</h3>
      <ul className={classNameMerge(["list-disc list-outside pl-[15px]"])}>
        {liItems.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </HomeContentsContainer>
  );
};

export default HomeIntro;
