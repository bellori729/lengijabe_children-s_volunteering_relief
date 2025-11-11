import classNameMerge from "../../../utils/classNameMerge";

const BasicTemplate = ({ className, style, children }) => {
  return (
    <div
      className={classNameMerge([
        "w-full min-h-screen",
        "flex flex-col items-center relative",
        className,
      ])}
      style={{
        ...style,
      }}
    >
      <div
        aria-hidden
        className={classNameMerge([
          "absolute",
          "top-[10px] right-[10px] bottom-[10px] left-[10px]",
          "border-2 border-black",
          "pointer-events-none",
        ])}
      />
      <div
        aria-hidden
        className={classNameMerge([
          "absolute",
          "top-[13px] right-[13px] bottom-[13px] left-[13px]",
          "border-2 border-[#02ffff]",
          "pointer-events-none",
        ])}
      />
      <div
        aria-hidden
        className={classNameMerge([
          "absolute",
          "top-[16px] right-[16px] bottom-[16px] left-[16px]",
          "border-2 border-black",
          "pointer-events-none",
        ])}
      />
      {children}
    </div>
  );
};

export default BasicTemplate;
