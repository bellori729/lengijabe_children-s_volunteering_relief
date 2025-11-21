import { mediumTextRegular } from "../../../../shared/constants/fontStyle";
import classNameMerge from "../../../../utils/classNameMerge";
import HomeContentsTitle from "../atoms/HomeContentsTitle";
import HomeContentsContainer from "../organisms/HomeContentsContainer";

const HomeTheOrganizationsMainGoals = () => {
  return (
    <HomeContentsContainer>
      <HomeContentsTitle>THE ORGANIZATION'S MAIN GOALS</HomeContentsTitle>
      <ul className={classNameMerge(["list-disc list-outside", "pl-[15px]"])}>
        <li>
          Provision of basic needs in the form of food, clothing, shelter,
          medical services and accommodation to orphans and street children and
          youths.
        </li>
        <li>
          Provision of formal and informal education, as well as vocational
          training to children and youths.
        </li>
        <li>
          Socializing street children and youths to make them fit in society as
          responsible citizens.
        </li>
        <li>
          Promote community awareness and carrying out advocacy on matters
          related to street children including children rights
        </li>
        <li>
          Networking with other organizations and institutions for sharing
          information and experience, as well as collaborating on interventions
          that are geared to improve performance.
        </li>
        <li>
          Enhancing the institutional capacity of the organization for effective
          and efficient advancement of its mission.
        </li>
        <li>
          Apart from basic needs, children and youth are given access to
          opportunities for learning life-skills; engage in sports, gardening,
          art work, craft and religion- they are provided on individualized
          holistic basis.
        </li>
        <li>
          The disadvantaged children are sensitized to stay away from HIV/AIDS
          pandemic, while orphans access accommodation, street children enjoy
          opportunities to education and training.
        </li>
      </ul>

      <section className="mt-[20px]">
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
                src="/assets/images/children_of_lengijabe_organisation.png"
                alt="Children from the Lengijabe organisation smiling in front of a classroom."
                loading="lazy"
              />
              <figcaption
                className={classNameMerge([
                  mediumTextRegular,
                  "italic mt-[5px]",
                ])}
              >
                Children of Lengijabe Organisation
              </figcaption>
            </figure>
          </li>

          <li>
            <figure className="flex flex-col items-center">
              <img
                className="w-[95%]"
                src="/assets/images/a_group_of_volunteers_from_netherland.png"
                alt="A group of volunteers from the Netherlands posing on the steps."
                loading="lazy"
              />
              <figcaption
                className={classNameMerge([
                  mediumTextRegular,
                  "italic mt-[5px]",
                ])}
              >
                A group of volunteers from the Netherlands
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </HomeContentsContainer>
  );
};

export default HomeTheOrganizationsMainGoals;
