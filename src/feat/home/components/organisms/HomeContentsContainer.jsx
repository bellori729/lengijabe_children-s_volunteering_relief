import classNameMerge from "../../../../utils/classNameMerge";

const HomeContentsContainer = ({ className, children }) => {
  return (
    <div
      className={classNameMerge([
        "w-full px-[30px]",
        "flex flex-col",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default HomeContentsContainer;
