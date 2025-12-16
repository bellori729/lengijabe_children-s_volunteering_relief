import { useTranslation } from "react-i18next";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeContact = () => {
  const { t } = useTranslation("contact");

  return (
    <HomeContentsContainer>
      <section className={"flex flex-col gap-[20px] mb-[20px]"}>
        <HomeContentsTitle
          className={classNameMerge(["font-bold text-center"])}
        >
          {t("title1")}
          <br />
          {t("title2")}
        </HomeContentsTitle>
        <div className={classNameMerge(["flex flex-col items-center"])}>
          <ul>
            <li>P.O. Box 11893 ARUSHA TANZANIA</li>
            <li>
              Email:{" "}
              <a href="mailto:lengijabechildvolunteerrelief@gmail.com">
                lengijabechildvolunteerrelief@gmail.com
              </a>
            </li>
            <li className="flex">
              <div>{t("cellPhone")}</div>
              <div className="px-[10px] flex flex-col items-center gap-[10px]">
                <a href="tel:+255755186387">+255 755 186 387</a>
                <a href="tel:+255684186387">+255 684 186 387</a>
                <a href="tel:+255655793268">+255 655 793 268</a>
                <a href="tel:+255687737560">+255 687 737 560</a>
                <a href="tel:+255738704097">+255 738 704 097</a>
              </div>
              <div className="flex flex-col gap-[10px]">
                <span>- WhatsApp</span>
                <span> BONIFACE MASALU</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </HomeContentsContainer>
  );
};

export default HomeContact;
