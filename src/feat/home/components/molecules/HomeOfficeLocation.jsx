import { useTranslation } from "react-i18next";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeOfficeLocation = () => {
  const { t } = useTranslation("officeLocation");

  return (
    <HomeContentsContainer>
      <section className={"flex flex-col gap-[20px] my-[20px]"}>
        <HomeContentsTitle className={classNameMerge(["font-bold"])}>
          {t("title1")}
          <br />
          {t("title2")}
        </HomeContentsTitle>

        <div className="flex flex-col items-center">
          <img
            className="w-[95%]"
            src="/assets/images/office_location.png"
            alt={t("altTxt")}
            loading="lazy"
          />
        </div>
      </section>
    </HomeContentsContainer>
  );
};

export default HomeOfficeLocation;
