import { mediumTextBold } from "../../../../shared/constants/fontStyle";
import classNameMerge from "../../../../utils/classNameMerge";

const HomeForeword = () => {
  return (
    <div
      className={classNameMerge([
        "w-full px-[30px]",
        "flex flex-col gap-[10px]",
      ])}
    >
      <h2 className={classNameMerge([mediumTextBold, "text-center"])}>
        FOREWORD
      </h2>
      <p>
        <span className={classNameMerge(["font-bold"])}>
          Lengijabe Children's Volunteering Relief
        </span>
        – Is an NGO– NON-Governmental Organization founded on 25th May, 2019.
        <br />
        The four Founders of this social entity adhere to a strict humanitarian
        philosophy in which profit making, Religious biases, suffocating
        poverty, rampant diseases, ethnicity galloping squalor among children
        and people are irreversibly repugnant. The entity views child- abuses,
        hunger, dehumanization, illiteracy, vulnerability, ignorance and
        environment deterioration, underdevelopment as arch-enemies that must
        incessantly be challenged and vanquished.
      </p>
      <p>
        The Organization seeks to get both internal and external opportunities,
        vindictive resources, promoters and mobilize them to facilitate upright
        growth and education of the children. A well linked process of growing
        the children to open their eyes and minds towards their unfolding roles
        in society.
        <br />
        To enable them appreciate the values of good moral behavior, discipline,
        hard work, and abstinence from HIV/AIDS, immoral habits, indolence,
        banditry and all trashes that destroy character building.
      </p>
      <p>
        The Lengijabe Children’s Volunteering Relief aims at addressing the
        urgent needs of all children who have fallen victim and acquired the
        pathetic status of orphans, street children, impairment, underprivileged
        and other vulnerabilities.
      </p>
    </div>
  );
};

export default HomeForeword;
