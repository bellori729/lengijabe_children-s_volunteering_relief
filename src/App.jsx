import "./App.css";
import Router from "./router/Router";
import { useScrollToTop } from "./shared/hooks/useScrollToTop";

const App = () => {
  useScrollToTop();

  return <Router />;
};

export default App;
