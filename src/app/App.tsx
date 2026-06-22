import { useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { DesignPage } from "../pages/DesignPage";
import { DevPage } from "../pages/DevPage";
import { MetercubeCaseStudyPage } from "../pages/MetercubeCaseStudyPage.jsx";
import { IGappCaseStudyPage } from "../pages/IGappCaseStudyPage.jsx";
import { PhotoPage } from "../pages/PhotoPage";
import { ResumePage } from "../pages/ResumePage";

const getRoute = () => {
  const pathname = window.location.pathname;
  if (pathname === "/dev") return "dev";
  if (pathname === "/metercube") return "metercube";
  if (pathname === "/igapp") return "igapp";
  if (pathname === "/photo") return "photo";
  if (pathname === "/resume") return "resume";
  return "design";
};

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    const targetPath = path === "design" ? "/" : `/${path}`;
    if (targetPath !== window.location.pathname) {
      window.history.pushState(null, "", targetPath);
      setRoute(getRoute());
    }
  };

  return (
    <Layout currentRoute={route} onNavigate={navigate}>
      {route === "dev" ? (
        <DevPage />
      ) : route === "metercube" ? (
        <MetercubeCaseStudyPage />
      ) : route === "igapp" ? (
        <IGappCaseStudyPage />
      ) : route === "photo" ? (
        <PhotoPage />
      ) : route === "resume" ? (
        <ResumePage />
      ) : (
        <DesignPage onNavigate={navigate} />
      )}
    </Layout>
  );
}