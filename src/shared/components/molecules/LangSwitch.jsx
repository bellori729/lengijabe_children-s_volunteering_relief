import { FaGlobe } from "react-icons/fa";
import classNameMerge from "../../../utils/classNameMerge";
import { useState } from "react";
import LangSwitchSelectBtn from "../atoms/LangSwitchSelectBtn";

const LangSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNameMerge([
        "w-full",
        "fixed top-[30px] right-[30px]",
        "flex justify-end",
      ])}
    >
      <button
        className={classNameMerge([
          "bg-white rounded-[999px]",
          "w-[30px] h-[30px]",
          "sm:w-[40px] sm:h-[40px]",
          "xl:w-[50px] xl:h-[50px]",
        ])}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FaGlobe className="w-full h-full" color="black" />
      </button>

      {isOpen && (
        <ul
          className={classNameMerge([
            "absolute top-[50px] right-0",
            "bg-white border border-black",
            "p-[10px] rounded-md shadow-md",
            "flex flex-col gap-[5px]",
          ])}
        >
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <LangSwitchSelectBtn lng="en" />
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <LangSwitchSelectBtn lng="fr" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default LangSwitch;
