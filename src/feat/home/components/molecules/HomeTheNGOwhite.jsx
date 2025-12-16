import { useTranslation } from "react-i18next";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeTheNGOwhite = () => {
  const { t } = useTranslation("theNGOWhite");

  return (
    <HomeContentsContainer>
      <section className="flex flex-col gap-[20px] mt-[10px]">
        <div>
          <p>{t("pTxt1")}</p>
          <ul
            className={classNameMerge(["list-disc list-outside", "pl-[15px]"])}
          >
            <li>{t("liTxt1")}</li>
            <li>{t("liTxt2")}</li>
            <li>{t("liTxt3")}</li>
            <li>{t("liTxt4")}</li>
            <li>{t("liTxt5")}</li>
          </ul>
        </div>

        <p>{t("pTxt2")}</p>

        <p>{t("pTxt3")}</p>

        <div>
          <p>{t("pTxt4")}</p>
          <ul
            className={classNameMerge(["list-disc list-outside", "pl-[15px]"])}
          >
            <li>{t("liTxt6")}</li>
            <li>{t("liTxt7")}</li>
            <li>{t("liTxt8")}</li>
            <li>{t("liTxt9")}</li>
            <li>{t("liTxt10")}</li>
          </ul>
        </div>

        <div>
          <p>{t("pTxt5")}</p>
          <ul
            className={classNameMerge(["list-disc list-outside", "pl-[15px]"])}
          >
            <li>{t("liTxt11")}</li>
            <li>{t("liTxt12")}</li>
            <li>{t("liTxt13")}</li>
          </ul>
        </div>

        <p>{t("pTxt6")}</p>

        <div>
          <p>{t("pTxt7")}</p>
          <ul
            className={classNameMerge(["list-disc list-outside", "pl-[15px]"])}
          >
            <li>{t("liTxt14")}</li>
            <li>{t("liTxt15")}</li>
          </ul>
        </div>

        <p>{t("pTxt8")}</p>

        <p>{t("pTxt9")}</p>
      </section>
    </HomeContentsContainer>
  );
};

export default HomeTheNGOwhite;
