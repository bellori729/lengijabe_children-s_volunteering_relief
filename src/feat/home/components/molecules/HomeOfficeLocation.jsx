import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeOfficeLocation = () => {
  return (
    <HomeContentsContainer>
      <section className={"flex flex-col gap-[20px] my-[20px]"}>
        <p className={classNameMerge(["font-bold"])}>
          Office - location: Kisongo - Waya,
          <br />
          Arusha - Dodoma road, 22 kms from Arusha City
        </p>

        <div className="flex flex-col items-center">
          <img
            className="w-[95%]"
            src="/assets/images/office_location.png"
            alt="Map showing the office location of Lengijabe Children's Volunteering Relief in Kisongo-Waya, Arusha-Dodoma road, 22 kms from Arusha City."
            loading="lazy"
          />
        </div>
      </section>
    </HomeContentsContainer>
  );
};

export default HomeOfficeLocation;
