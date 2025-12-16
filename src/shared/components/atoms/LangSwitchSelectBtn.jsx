import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import classNameMerge from "../../../utils/classNameMerge";

const LangSwitchSelectBtn = ({ lng }) => {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || "en").slice(0, 2);

  const [isActive, setIsActive] = useState(current === lng);

  useEffect(() => {
    setIsActive(current === lng);
  }, [current, lng]);

  return (
    <button
      className={classNameMerge([
        isActive
          ? "bg-gray-300 text-white"
          : "hover:bg-gray-300 hover:text-white duration-150",
        "p-[5px] rounded-md",
      ])}
      onClick={() => {
        i18n.changeLanguage(lng);
      }}
      aria-pressed={isActive}
      title={lng === "en" ? "Switch to English" : "Passer en français"}
    >
      {lng.toUpperCase()}
    </button>
  );
};

export default LangSwitchSelectBtn;
