import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeWhyDoChildrenLiveOnTheStreets = () => {
  return (
    <HomeContentsContainer>
      <HomeContentsTitle>
        Why do Children live on the streets?
      </HomeContentsTitle>
      <p>
        Poverty is the main factor that drives children to the streets in reach
        of a better life.
      </p>
      <ul className={classNameMerge(["list-disc list-outside pl-[15px]"])}>
        <li>80% of street children come from low income families</li>
        <li>The parents cannot afford to feed them and clothe them</li>
        <li>
          They even fail to pay for their medical treatment and school fees.
          Disrupted marriages on account of excessive alcoholism and the
          HIV/AIDS pandemic also result in parental neglect or physical and
          psychological abuse which force children to leave their homes.
        </li>
      </ul>
    </HomeContentsContainer>
  );
};

export default HomeWhyDoChildrenLiveOnTheStreets;
