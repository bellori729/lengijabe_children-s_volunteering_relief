import BasicTemplate from "../../../../shared/components/templates/BasicTemplate";
import IMG_SRC_MAPPING from "../../../../shared/constants/imgSrcMapping";
import classNameMerge from "../../../../utils/classNameMerge";

const HomeLayout = ({ className, style }) => {
  return (
    <BasicTemplate className={className} style={style}>
      <img
        className={classNameMerge(["w-[35%] h-[35%]"])}
        src={IMG_SRC_MAPPING.logo_vector}
        alt="Logo"
      />
    </BasicTemplate>
  );
};

export default HomeLayout;
