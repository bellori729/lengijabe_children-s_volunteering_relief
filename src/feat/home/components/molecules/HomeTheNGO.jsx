import { mediumTextRegular } from "../../../../shared/constants/fontStyle";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeTheNGO = () => {
  return (
    <HomeContentsContainer className={"bg-[#DCEAF2]"}>
      <HomeContentsTitle>
        THE NGO- LENGIJABE CHILDREN'S VOLUNTEERING RELIEF'S ROLE AS A
        MULTILINKAGES ENTITY
      </HomeContentsTitle>
      <section className={"flex flex-col gap-[20px]"}>
        <p>
          The NGO has extended functional roles to create advantages and tourist
          values and girdle the Tanzania society towards material progress: A
          Mosaic of linkages can be viewed as follows:-
        </p>
        <div>
          <p>The NGO’S deep hospitality allows it to welcome:-</p>
          <ul
            className={classNameMerge(["list-disc list-outside", "pl-[15px]"])}
          >
            <li>Individual volunteers</li>
            <li>Volunteer groups</li>
            <li>Students</li>
            <li>Religious groups</li>
            <li>Academicians</li>
          </ul>
        </div>
        <p>
          Where the NGO arranges brief stay in Home stay – Lodges or Hotels and
          prepares exciting and enchanting visits to Tourist paradise such as
          Katavi, Mkomazi National Parks where the visitor will be thrilled to
          his bones, in the sight of magnificent landscapes flooded with amazing
          herds of buffaloes, elephants, vast lion prides, hippos, rhino,
          pangolin and crocodiles mingle in their natural habitats, to create
          for the visitor an enchanting wonder world.
        </p>
      </section>

      <section className={"my-[20px]"}>
        <ul
          className={classNameMerge([
            "flex flex-col gap-[30px]",
            "overflow-x-auto",
          ])}
        >
          <li>
            <figure className="flex flex-col items-center">
              <img
                className="w-[95%]"
                src="/assets/images/a_white_giraffe_from_katavi_national_park.png"
                alt="Giraffe bending to drink at a muddy waterhole in Katavi National Park."
                loading="lazy"
              />
              <figcaption
                className={classNameMerge([
                  mediumTextRegular,
                  "italic mt-[5px]",
                ])}
              >
                A white giraffe from Katavi National Park
              </figcaption>
            </figure>
          </li>

          <li>
            <figure className="flex flex-col items-center">
              <img
                className="w-[95%]"
                src="/assets/images/some_of_the_400_species_of_birds_at_katavi_national_park.png"
                alt="Four large wading birds flying in formation over Katavi National Park."
                loading="lazy"
              />
              <figcaption
                className={classNameMerge([
                  mediumTextRegular,
                  "italic mt-[5px]",
                ])}
              >
                Some of the 400 species of birds at Katavi National Park
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>

      <section className={"flex flex-col mb-[10px]"}>
        <p>
          The responsibility to find Home stay accommodation and meals at
          minimum costs, rests upon the NGO- Lengijabe Children’s Volunteering
          Relief to enable visitors scoop maximum leisure in the
          wonder-tourist-destinations of Tanzania, such as those provided by
          Katavi – where the visitor will plunge into endless excitement and joy
          at the sight of:-
        </p>
        <ul className={classNameMerge(["list-disc list-outside", "pl-[15px]"])}>
          <li>White giraffes prancing with pride.</li>
          <li>Chanting swarms of birds – 400 species</li>
          <li>Elegant zebras</li>
          <li>Water bucks</li>
          <li>
            Spotted hyenas and leopards infusing in the visitor’s mind
            unforgettable memories of Tanzania’s tourist culture of hospitality
            and fraternization.
          </li>
        </ul>
      </section>
    </HomeContentsContainer>
  );
};

export default HomeTheNGO;
