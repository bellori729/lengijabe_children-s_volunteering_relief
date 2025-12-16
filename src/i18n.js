import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  // 영어 번역 리소스
  en: {
    common: {},
    title: {
      title1: "LENGIJABE CHILDREN'S",
      title2: "VOLUNTEERING RELIEF",
      title3: "(LECHIVORE)",
    },
    intro: {
      title: "Lengijabe Children's Volunteering Relief",
      liTxt1: "Targeting: The orphans, underprivileged, street children",
      liTxt2:
        "To provide care, education, parenting, grooming positive character, vision, habits, orientation, inspiration and appropriate moral - values, culture, and progressive norms in modern life in society.",
      liTxt3: "Vindicating multi-value efforts to coax material welfare.",
    },
    foreword: {
      title: "FOREWORD",
      boldText: "Lengijabe Children's Volunteering Relief",
      paragraph1:
        "– Is a NON-Governmental Organization (NGO) founded on 25th May, 2019. The four Founders of this social entity adhere to a strict humanitarian philosophy in which profit making, Religious biases, suffocating poverty, rampant diseases, ethnicity galloping squalor among children and people are irreversibly repugnant. The entity views child- abuses, hunger, dehumanization, illiteracy, vulnerability, ignorance and environment deterioration, underdevelopment as arch-enemies that must incessantly be challenged and vanquished.",
      paragraph2:
        "The Organization seeks to get both internal and external opportunities, vindictive resources, promoters and mobilize them to facilitate upright growth and education of the children. A well linked process of growing the children to open their eyes and minds towards their unfolding roles in society. To enable them appreciate the values of good moral behavior, discipline, hard work, and abstinence from HIV/AIDS, immoral habits, indolence, banditry and all trashes that destroy character building.",
      paragraph3:
        "The Lengijabe Children’s Volunteering Relief aims at addressing the urgent needs of all children who have fallen victim and acquired the pathetic status of orphans, street children, impairment, underprivileged and other vulnerabilities.",
    },
    whyDoChildrenLiveOnTheStreets: {
      title: "Why do Children live on the streets?",
      pTxt: "Poverty is the main factor that drives children to the streets in reach of a better life.",
      liTxt1: "80% of street children come from low income families",
      liTxt2: "The parents cannot afford to feed them and clothe them",
      liTxt3:
        "They even fail to pay for their medical treatment and school fees. Disrupted marriages on account of excessive alcoholism and the HIV/AIDS pandemic also result in parental neglect or physical and psychological abuse which force children to leave their homes.",
    },
    streetLife: {
      title: "Street Life",
      pTxt: "Once living in the streets, children face harsh life, struggling to feed and clothe themselves, suffering harassment and sexual abuse. They are forced to beg and commit petty crimes, as well as drug abuse.",
    },
    vision: {
      title: "Vision",
      pTxt: "A world of equal opportunities, where vulnerable children and youth are holistically empowered.",
    },
    missionStatement: {
      title: "Mission statement",
      pTxt: "Lengijabe Children’s Volunteering Relief is committed to protecting and empowering orphans and street children and youth through the provision of basic needs, education, services and training. To impart community awareness, to engage in advocacy, networking, research and capacity building.",
    },
    aimsAndObjectives: {
      title: "AIMS AND OBJECTIVES",
      pTxt: "The Organization tries to find for the children a lasting alternative to street life by undertaking the following:-",
      liTxt1:
        "Providing for the children’s basic needs, shelter, food, clothing, Medicare and counseling, while preparing each one of them to join his or her family or guardians.",
      liTxt2:
        "Enabling children to gain access to education, training and skills to make them self-reliant.",
      liTxt3:
        "Carrying out family reunification of children where and when it is necessary.",
      liTxt4:
        "Preparing the children for reintegration into the mainstream society by providing them with the ability to start small income generation projects.",
    },
    theOrganizationsMainGoals: {
      title: "THE ORGANIZATION'S MAIN GOALS",
      liTxt1:
        "Provision of basic needs in the form of food, clothing, shelter, medical services and accommodation to orphans and street children and youths.",
      liTxt2:
        "Provision of formal and informal education, as well as vocational training to children and youths.",
      liTxt3:
        "Socializing street children and youths to make them fit in society as responsible citizens.",
      liTxt4:
        "Promote community awareness and carrying out advocacy on matters related to street children including children rights",
      liTxt5:
        "Networking with other organizations and institutions for sharing information and experience, as well as collaborating on interventions that are geared to improve performance.",
      liTxt6:
        "Enhancing the institutional capacity of the organization for effective and efficient advancement of its mission.",
      liTxt7:
        "Apart from basic needs, children and youth are given access to opportunities for learning life-skills; engage in sports, gardening, art work, craft and religion- they are provided on individualized holistic basis.",
      liTxt8:
        "The disadvantaged children are sensitized to stay away from HIV/AIDS pandemic, while orphans access accommodation, street children enjoy opportunities to education and training.",
      altTxt1:
        "Children from the Lengijabe organisation smiling in front of a classroom.",
      captionTxt1: "Children of Lengijabe Organisation",
      altTxt2:
        "A group of volunteers from the Netherlands posing on the steps.",
      captionTxt2: "A group of volunteers from the Netherlands",
    },
  },
  // 프랑스어 번역 리소스
  fr: {
    common: {},
    // title: {
    //   title1: "LENGIJABE ENFANTS",
    //   title2: "BÉNÉVOLE SECOURS",
    //   title3: "(LECHIVORE)",
    // },
    title: {
      title1: "LENGIJABE CHILDREN'S",
      title2: "VOLUNTEERING RELIEF",
      title3: "(LECHIVORE)",
    },
    intro: {
      title: "Lengijabe Children’s Volunteering Relief",
      liTxt1: "Les orphelins défavorisés, les enfants de la rue.",
      liTxt2:
        "Pour fournir des soins, de l'éducation, de la parentalité, du toilettage un caractère positif, une vision habitudes, orientation, inspiration et valeurs morales appropriées, culture et normes progressistes de la vie moderne en société.",
      liTxt3:
        "Justifier les efforts multi-valeurs pour amadouer le bien-être matériel.",
    },
    foreword: {
      title: "PRÉFACE",
      boldText: "Lengijabe Children’s Volunteering Relief",
      paragraph1:
        "– Organisation non gouvernementale (ONG) fondée le 25 mai 2019. Les quatre fondateurs de cette entité sociale adhèrent à une stricte philosophie humanitaire pour laquelle la recherche du profit, les préjugés religieux, la pauvreté étouffante, les maladies endémiques, les clivages ethniques et la misère galopante chez les enfants et les populations sont fermement réprouvés. L’entité considère les abus envers les enfants, la faim, la déshumanisation, l’analphabétisme, la vulnérabilité, l’ignorance, la dégradation de l’environnement et le sous-développement comme des ennemis jurés qu’il faut combattre et vaincre sans relâche.",
      paragraph2:
        "L’Organisation cherche à obtenir des opportunités internes et externes, des ressources adéquates et des soutiens, puis à les mobiliser pour favoriser le développement éthique et l’éducation des enfants. Elle met en place un processus cohérent et structuré visant à aider les enfants à ouvrir les yeux et l’esprit sur leurs rôles à venir dans la société, afin qu’ils apprécient les valeurs d’une bonne conduite morale, de la discipline et du travail, ainsi que l’adoption de comportements de prévention du VIH/sida, l’abandon des habitudes immorales, de l’oisiveté, de la délinquance et de tout ce qui nuit au développement du caractère.",
      paragraph3:
        "Lengijabe Children’s Volunteering Relief vise à répondre aux besoins urgents de tous les enfants victimes qui sont orphelins, enfants des rues, en situation de handicap, défavorisés ou confrontés à d’autres formes de vulnérabilité.",
    },
    whyDoChildrenLiveOnTheStreets: {
      title: "Pourquoi des enfants vivent-ils dans la rue?",
      pTxt: "La pauvreté est le principal facteur qui pousse les enfants vers la rue, à la recherche d’une vie meilleure.",
      liTxt1: "80% des enfants des rues viennent de familles à faible revenu.",
      liTxt2:
        "Leurs parents n’ont pas les moyens de les nourrir ni de les vêtir.",
      liTxt3:
        "Ils ne parviennent même pas à payer leurs soins médicaux et leurs frais de scolarité. Les mariages brisés dus à l’alcoolisme excessif et à la pandémie de VIH/sida entraînent également la négligence parentale ou des maltraitances physiques et psychologiques, ce qui pousse les enfants à quitter leur foyer.",
    },
    streetLife: {
      title: "La vie dans la rue",
      pTxt: "Une fois livrés à la rue, les enfants affrontent une vie rude : ils peinent à se nourrir et à se vêtir et subissent le harcèlement ainsi que des violences sexuelles. Ils sont contraints de mendier, de commettre de petits délits et de consommer des drogues.",
    },
    vision: {
      title: "Vision",
      pTxt: "Un monde d’égalité des chances, où les enfants et les jeunes vulnérables sont pleinement autonomisés sur tous les plans.",
    },
    missionStatement: {
      title: "Énoncé de mission",
      pTxt: "Lengijabe Children’s Volunteering Relief s’engage à protéger et à autonomiser les orphelins ainsi que les enfants et les jeunes en situation de rue, en leur fournissant les besoins essentiels, l’éducation, des services et des formations. L’organisation œuvre également à sensibiliser les communautés, à mener des actions de plaidoyer, à développer des réseaux, à conduire des recherches et à renforcer les capacités.",
    },
    aimsAndObjectives: {
      title: "BUTS ET OBJECTIFS",
      pTxt: "L’Organisation s’efforce d’offrir aux enfants une alternative durable à la vie dans la rue en mettant en œuvre les actions suivantes :",
      liTxt1:
        "Assurer les besoins essentiels des enfants — hébergement, nourriture, vêtements, soins de santé et accompagnement — tout en préparant chacun d’eux à rejoindre sa famille ou ses tuteurs.",
      liTxt2:
        "Permettre aux enfants d’accéder à l’éducation, à des formations et à des compétences les rendant autonomes.",
      liTxt3:
        "Procéder, lorsque nécessaire, à la réunification familiale des enfants.",
      liTxt4:
        "Préparer les enfants à leur réintégration dans la société en leur donnant la capacité de lancer de petits projets générateurs de revenus.",
    },
    theOrganizationsMainGoals: {
      title: "OBJECTIFS PRINCIPAUX DE L’ORGANISATION",
      liTxt1:
        "Fournir les besoins essentiels — nourriture, vêtements, abri, services médicaux et hébergement — aux orphelins ainsi qu’aux enfants et aux jeunes en situation de rue.",
      liTxt2:
        "Assurer une éducation formelle et non formelle, ainsi que des formations professionnelles, aux enfants et aux jeunes.",
      liTxt3:
        "Favoriser la socialisation des enfants et des jeunes des rues afin de les intégrer dans la société en tant que citoyens responsables.",
      liTxt4:
        "Promouvoir la sensibilisation des communautés et mener des actions de plaidoyer sur les questions liées aux enfants des rues, notamment les droits de l’enfant.",
      liTxt5:
        "Créer des réseaux avec d’autres organisations et institutions pour partager informations et expériences, ainsi que collaborer à des interventions visant à améliorer l’impact.",
      liTxt6:
        "Renforcer les capacités institutionnelles de l’organisation pour faire progresser sa mission de manière efficace et efficiente.",
      liTxt7:
        "Au-delà des besoins essentiels, offrir aux enfants et aux jeunes des opportunités d’acquérir des compétences de vie et de s’engager dans le sport, le jardinage, les arts, l’artisanat et la vie religieuse — dans une approche individualisée et holistique.",
      liTxt8:
        "Sensibiliser les enfants défavorisés à la prévention du VIH/sida ; offrir un hébergement aux orphelins ; permettre aux enfants des rues de bénéficier d’opportunités d’éducation et de formation.",
      altTxt1:
        "Des enfants de l’organisation Lengijabe souriant devant une salle de classe.",
      captionTxt1: "Enfants de l’organisation Lengijabe",
      altTxt2: "Un groupe de bénévoles des Pays-Bas posant sur des marches.",
      captionTxt2: "Un groupe de bénévoles des Pays-Bas",
    },
  },
};

const detection = {
  order: [
    "querystring",
    "localStorage",
    "cookie",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],
  // 다음 방문을 위한 캐시 저장 위치
  caches: ["localStorage", "cookie"],
  lookupQuerystring: "lng",
  lookupLocalStorage: "i18nextLng",
  lookupCookie: "i18next",
  // <html lang="">에서 읽을 때 참조할 엘리먼트(브라우저 환경 가드 포함)
  htmlTag:
    typeof document !== "undefined" ? document.documentElement : undefined,
};

// 언어 변경 시 <html lang> 동기화
if (typeof document !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    const html = document.documentElement;
    if (html) html.setAttribute("lang", lng);
  });
}

// i18next 초기화
void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // 감지 실패/미지원 언어일 때
    supportedLngs: ["en", "fr"],
    resources,
    ns: ["common", "intro"], // 사용할 네임스페이스
    defaultNS: "common", // 기본 네임스페이스

    // 언어 코드 정리
    // 예: en-US 같은 지역 코드를 en로 매핑
    //     ko-KR 같은 지역 코드를 ko로 매핑
    load: "languageOnly",

    // 코드 정리(대소문자/구분자 등 표준화)
    cleanCode: true,

    debug: false,

    detection,

    interpolation: {
      escapeValue: false, // React는 XSS 대비가 되어 있어 escape 불필요
    },

    react: {
      useSuspense: true, // Lazy 로딩 시 Suspense 사용
    },

    returnNull: false, // 누락 키일 때 null 대신 키를 그대로 반환하도록
  });

export default i18n;
