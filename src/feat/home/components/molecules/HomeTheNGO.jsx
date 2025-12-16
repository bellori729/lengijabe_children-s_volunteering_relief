import { useTranslation } from "react-i18next";
import { mediumTextRegular } from "../../../../shared/constants/fontStyle";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeTheNGO = () => {
  const { t } = useTranslation("theNGO");

  return (
    <HomeContentsContainer className={"bg-[#DCEAF2]"}>
      <HomeContentsTitle>{t("title")}</HomeContentsTitle>
      <section className={"flex flex-col gap-[20px] mb-[10px]"}>
        <p>{t("topPTxt1")}</p>
        <div>
          <p>{t("topPTxt2")}</p>
          <ul
            className={classNameMerge(["list-disc list-outside", "pl-[15px]"])}
          >
            <li>{t("topLiTxt1")}</li>
            <li>{t("topLiTxt2")}</li>
            <li>{t("topLiTxt3")}</li>
            <li>{t("topLiTxt4")}</li>
            <li>{t("topLiTxt5")}</li>
          </ul>
        </div>
        <p>{t("topPTxt3")}</p>

        <ul
          className={classNameMerge([
            "flex flex-col gap-[30px]",
            "overflow-x-auto",
          ])}
        >
          <li>
            <figure className="flex flex-col items-center">
              <img
                className="w-[95%]"
                src="/assets/images/a_white_giraffe_from_katavi_national_park.png"
                alt={t("altTxt1")}
                loading="lazy"
              />
              <figcaption
                className={classNameMerge([
                  mediumTextRegular,
                  "italic mt-[5px]",
                ])}
              >
                {t("captionTxt1")}
              </figcaption>
            </figure>
          </li>

          <li>
            <figure className="flex flex-col items-center">
              <img
                className="w-[95%]"
                src="/assets/images/some_of_the_400_species_of_birds_at_katavi_national_park.png"
                alt={t("altTxt2")}
                loading="lazy"
              />
              <figcaption
                className={classNameMerge([
                  mediumTextRegular,
                  "italic mt-[5px]",
                ])}
              >
                {t("captionTxt2")}
              </figcaption>
            </figure>
          </li>
        </ul>

        <p>{t("bottomPTxt1")}</p>
        <ul className={classNameMerge(["list-disc list-outside", "pl-[15px]"])}>
          <li>{t("bottomLiTxt1")}</li>
          <li>{t("bottomLiTxt2")}</li>
          <li>{t("bottomLiTxt3")}</li>
          <li>{t("bottomLiTxt4")}</li>
          <li>{t("bottomLiTxt5")}</li>
        </ul>
      </section>
    </HomeContentsContainer>
  );
};

export default HomeTheNGO;
