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
    theNGO: {
      title:
        "THE NGO- LENGIJABE CHILDREN'S VOLUNTEERING RELIEF'S ROLE AS A MULTILINKAGES ENTITY",
      topPTxt1:
        "The NGO has extended functional roles to create advantages and tourist values and girdle the Tanzania society towards material progress: A Mosaic of linkages can be viewed as follows:-",
      topPTxt2: "The NGO’S deep hospitality allows it to welcome:-",
      topLiTxt1: "Individual volunteers",
      topLiTxt2: "Volunteer groups",
      topLiTxt3: "Students",
      topLiTxt4: "Religious groups",
      topLiTxt5: "Academicians",
      topPTxt3:
        "Where the NGO arranges brief stay in Home stay – Lodges or Hotels and prepares exciting and enchanting visits to Tourist paradise such as Katavi, Mkomazi National Parks where the visitor will be thrilled to his bones, in the sight of magnificent landscapes flooded with amazing herds of buffaloes, elephants, vast lion prides, hippos, rhino, pangolin and crocodiles mingle in their natural habitats, to create for the visitor an enchanting wonder world.",
      altTxt1:
        "Giraffe bending to drink at a muddy waterhole in Katavi National Park.",
      captionTxt1: "A white giraffe from Katavi National Park",
      altTxt2:
        "Four large wading birds flying in formation over Katavi National Park.",
      captionTxt2: "Some of the 400 species of birds at Katavi National Park",
      bottomPTxt1:
        "The responsibility to find Home stay accommodation and meals at minimum costs, rests upon the NGO- Lengijabe Children’s Volunteering Relief to enable visitors scoop maximum leisure in the wonder-tourist-destinations of Tanzania, such as those provided by Katavi – where the visitor will plunge into endless excitement and joy at the sight of:-",
      bottomLiTxt1: "White giraffes prancing with pride.",
      bottomLiTxt2: "Chanting swarms of birds – 400 species",
      bottomLiTxt3: "Elegant zebras",
      bottomLiTxt4: "Water bucks",
      bottomLiTxt5:
        "Spotted hyenas and leopards infusing in the visitor’s mind unforgettable memories of Tanzania’s tourist culture of hospitality and fraternization.",
    },
    theNGOWhite: {
      pTxt1:
        "The NGO - Lengijabe Children’s Volunteering Relief acts as a LINK through which:-",
      liTxt1: "Government",
      liTxt2: "Religious groups",
      liTxt3: "Donor agencies",
      liTxt4: "Financial institutions",
      liTxt5: "Cooperative Unions",
      liTxt6: "NGO’S",
      pTxt2:
        "May need to channel financial and material assistance to the voiceless, needy, poor people who will exploit chances to change and transform their material life and welfare index.",
      pTxt3:
        "The NGO whole heartedly will offer service to cooperate with the above stakeholders to leverage the life conditions of disadvantaged poverty stricken sections of society.",
      pTxt4:
        "The NGO Lengijabe Children’s Volunteering Relief has frankly speaking a broad platform for serving as a link in a range of social economic functions, Cooperation bid is extended to:-",
      liTxt7: "Individuals",
      liTxt8: "Schools",
      liTxt9: "Institutions",
      liTxt10: "Colleges",
      liTxt11: "Universities, local and otherwise",
      pTxt5:
        "Employed or volunteer groups and people to engage in the following:-",
      liTxt12: "Technical skills exchange/workshops",
      liTxt13:
        "To support capacity-building among members of the community in the battle against ubiquitous poverty;",
      liTxt14:
        "Poverty alleviation – among the under privileged, voiceless members of society including vulnerable children.",
      pTxt6:
        "The NGO – is poised to link with the Government to develop and facilitate implantation of National strategy for mobilizing and utilization of Resources to fight HIV/AIDS. This include research initiatives on HIV/AIDS and to foster linkages with other research institutions.",
      pTxt7:
        "THE NGO – has vast room for linkage with all stakeholders, in the promotion and exchange of ideas, experiences and knowledge in:-",
      liTxt15: "Cultural Heritage",
      liTxt16:
        "Global cultural tourism to streamline the processes for developing cultural Heritage and Global Cultural Tourism.",
      pTxt8:
        "These processes could advance traditional and cultural products – such as drawings, paintings, embroidery ornaments, engravings, modeling and other life aspects. A set of tools such as seminars, discussions, symposia and workshops can be employed.",
      pTxt9:
        " The principle focus of the NGO, on children’s health, education, environment, character molding and poverty eradication; are not the boundaries of limit in organization addresses several socio-economic concerns to synchronize efforts and resources for evolving a modern Tanzania and other vices",
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
    theNGO: {
      title:
        "RÔLE DE L’ONG — LENGIJABE CHILDREN’S VOLUNTEERING RELIEF — EN TANT QU’ENTITÉ À INTERCONNEXIONS MULTIPLES",
      topPTxt1:
        "L’ONG a élargi ses fonctions afin de créer des atouts et des valeurs touristiques et d’accompagner la société tanzanienne vers le progrès matériel ; une mosaïque de liaisons peut être présentée comme suit :",
      topPTxt2: "La profonde hospitalité de l’ONG lui permet d’accueillir :",
      topLiTxt1: "Des bénévoles individuels",
      topLiTxt2: "Des groupes de bénévoles",
      topLiTxt3: "Des étudiants",
      topLiTxt4: "Des groupes religieux",
      topLiTxt5: "Des universitaires",
      topPTxt3:
        "L’ONG organise des séjours de courte durée en hébergement chez l’habitant, en lodges ou en hôtels, et prépare des visites captivantes dans des paradis touristiques tels que les parcs nationaux de Katavi et de Mkomazi, où le visiteur sera émerveillé par des paysages grandioses peuplés d’impressionnants troupeaux de buffles et d’éléphants, de grands groupes de lions, d’hippopotames, de rhinocéros, de pangolins et de crocodiles évoluant dans leurs habitats naturels — un véritable monde de merveilles.",
      altTxt1:
        "Une girafe se penchant pour boire dans un point d’eau boueux au parc national de Katavi.",
      captionTxt1: "Une girafe blanche du parc national de Katavi",
      altTxt2:
        "Quatre grands échassiers volant en formation au-dessus du parc national de Katavi.",
      captionTxt2:
        "Quelques-unes des 400 espèces d’oiseaux du parc national de Katavi",
      bottomPTxt1:
        "Il incombe à l’ONG Lengijabe Children’s Volunteering Relief de trouver des hébergements chez l’habitant et des repas à coût minimal, afin de permettre aux visiteurs de profiter au maximum des destinations touristiques merveilleuses de Tanzanie, telles que Katavi — où ils se plongeront dans une joie et une excitation sans fin à la vue de :",
      bottomLiTxt1: "Des girafes blanches caracolant fièrement.",
      bottomLiTxt2: "Des nuées d’oiseaux chantants — 400 espèces.",
      bottomLiTxt3: "Des zèbres élégants.",
      bottomLiTxt4: "Des cobs des roseaux.",
      bottomLiTxt5:
        "Des hyènes tachetées et des léopards gravant dans l’esprit du visiteur des souvenirs inoubliables de la culture touristique tanzanienne d’hospitalité et de fraternité.",
    },
    theNGOWhite: {
      pTxt1:
        "L’ONG — Lengijabe Children’s Volunteering Relief — agit comme un LIEN par lequel :",
      liTxt1: "Le gouvernement",
      liTxt2: "Groupes religieux",
      liTxt3: "Agences donatrices",
      liTxt4: "Institutions financières",
      liTxt5: "Unions coopératives",
      liTxt6: "ONG",
      pTxt2:
        "Peuvent être amenés à acheminer une aide financière et matérielle vers les personnes sans voix et démunies, qui saisiront ces opportunités pour améliorer et transformer leur condition et leur niveau de bien-être.",
      pTxt3:
        "L’ONG se tient prête, de tout cœur, à coopérer avec les parties prenantes susmentionnées afin d’améliorer les conditions de vie des franges défavorisées de la société frappées par la pauvreté.",
      pTxt4:
        "L’ONG Lengijabe Children’s Volunteering Relief dispose, à vrai dire, d’une large plateforme pour servir de relais dans un éventail de fonctions socio-économiques ; l’offre de coopération s’adresse à :",
      liTxt7: "Particuliers",
      liTxt8: "Écoles",
      liTxt9: "Institutions",
      liTxt10: "Collèges",
      liTxt11: "Universités, locales ou autres",
      pTxt5:
        "Les salariés et les groupes de bénévoles sont invités à s’engager dans les actions suivantes :",
      liTxt12: "Échanges de compétences techniques / ateliers",
      liTxt13:
        "Soutenir le renforcement des capacités au sein des communautés dans la lutte contre la pauvreté omniprésente ;",
      liTxt14:
        "Réduction de la pauvreté — auprès des membres défavorisés et sans voix de la société, y compris les enfants vulnérables.",
      pTxt6:
        "L’ONG est prête à collaborer avec le gouvernement pour élaborer et faciliter la mise en œuvre de la stratégie nationale de mobilisation et d’utilisation des ressources pour lutter contre le VIH/sida. Cela inclut des initiatives de recherche sur le VIH/sida et le renforcement des liens avec d’autres institutions de recherche.",
      pTxt7:
        "L’ONG dispose d’un large espace de collaboration avec toutes les parties prenantes pour promouvoir et échanger des idées, des expériences et des connaissances dans les domaines suivants :",
      liTxt15: "Patrimoine culturel",
      liTxt16:
        "Tourisme culturel mondial, afin de rationaliser les processus de développement du patrimoine culturel et du tourisme culturel à l’échelle mondiale.",
      pTxt8:
        "Ces processus peuvent valoriser des produits traditionnels et culturels — tels que dessins, peintures, ornements brodés, gravures, modelage et autres formes d’expression. On pourra recourir à des outils tels que des séminaires, des discussions, des colloques et des ateliers.",
      pTxt9:
        "L’axe principal de l’ONG — la santé et l’éducation des enfants, l’environnement, la formation du caractère et l’éradication de la pauvreté — ne constitue pas une limite : l’organisation traite également plusieurs enjeux socio-économiques afin de synchroniser les efforts et les ressources en vue de l’émergence d’une Tanzanie moderne et de la lutte contre d’autres fléaux.",
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
