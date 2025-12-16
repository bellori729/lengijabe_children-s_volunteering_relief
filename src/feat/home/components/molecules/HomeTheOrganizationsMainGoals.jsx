import { useTranslation } from "react-i18next";
import { mediumTextRegular } from "../../../../shared/constants/fontStyle";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeTheOrganizationsMainGoals = () => {
  const { t } = useTranslation("theOrganizationsMainGoals");

  return (
    <HomeContentsContainer>
      <HomeContentsTitle>{t("title")}</HomeContentsTitle>
      <ul className={classNameMerge(["list-disc list-outside", "pl-[15px]"])}>
        <li>{t("liTxt1")}</li>
        <li>{t("liTxt2")}</li>
        <li>{t("liTxt3")}</li>
        <li>{t("liTxt4")}</li>
        <li>{t("liTxt5")}</li>
        <li>{t("liTxt6")}</li>
        <li>{t("liTxt7")}</li>
        <li>{t("liTxt8")}</li>
      </ul>

      <section className="my-[20px]">
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
                src="/assets/images/children_of_lengijabe_organisation.png"
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
                src="/assets/images/a_group_of_volunteers_from_netherland.png"
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
      </section>
    </HomeContentsContainer>
  );
};

export default HomeTheOrganizationsMainGoals;
