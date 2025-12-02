import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    common: {},
  },
  ko: {
    common: {},
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
    ns: ["common"], // 사용할 네임스페이스
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
