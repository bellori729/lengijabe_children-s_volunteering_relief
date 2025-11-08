import BasicTemplate from "../../../../shared/components/templates/BasicTemplate";

const HomeLayout = ({ className, style, children }) => {
  return (
    <BasicTemplate className={className} style={style}>
      {children}
    </BasicTemplate>
  );
};

export default HomeLayout;
