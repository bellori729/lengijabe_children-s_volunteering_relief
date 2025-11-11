import { mediumTextBold } from "../../../../shared/constants/fontStyle";
import classNameMerge from "../../../../utils/classNameMerge";

const HomeContentsTitle = ({ className, children }) => {
  return (
    <h3
      className={classNameMerge([
        mediumTextBold,
        "mt-[20px] -mb-[5px]",
        className,
      ])}
    >
      {children}
    </h3>
  );
};

export default HomeContentsTitle;
