import classNameMerge from "../../../utils/classNameMerge";

const BasicTemplate = ({ className, style, children }) => {
  return (
    <div
      className={classNameMerge([
        "w-full min-h-screen mt-2.5",
        "flex flex-col items-center relative",
        className,
      ])}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default BasicTemplate;
