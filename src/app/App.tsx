import { useEffect, useState } from "react";
import { Cursor } from "../components/Cursor";
import { Layout } from "../components/layout/Layout";
import { DesignPage } from "../pages/DesignPage";
import MetercubeCaseStudyPage from "../pages/MetercubeCaseStudyPage.jsx";
import IGappCaseStudyPage from "../pages/IGappCaseStudyPage/index.jsx";
import { PhotoPage } from "../pages/PhotoPage";
import { ResumePage } from "../pages/ResumePage";
import { ComingSoonPage } from "../pages/ComingSoonPage";

const getRoute = () => {
  const pathname = window.location.pathname;
  if (pathname === "/metercube") return "metercube";
  if (pathname === "/igapp") return "igapp";
  if (pathname === "/photo") return "photo";
  if (pathname === "/resume") return "resume";
  if (pathname === "/archives") return "archives";
  if (pathname === "/comingsoon") return "comingsoon";
  return "design";
};

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const navigate = (path: string) => {
    const targetPath = path === "design" ? "/" : `/${path}`;
    if (targetPath !== window.location.pathname) {
      window.history.pushState(null, "", targetPath);
      setRoute(getRoute());
    }
  };

  return (
    <>
      <Cursor />
      <Layout currentRoute={route} onNavigate={navigate}>
        {route === "metercube" ? (
          <MetercubeCaseStudyPage />
        ) : route === "igapp" ? (
          <IGappCaseStudyPage />
        ) : route === "comingsoon" ? (
          <ComingSoonPage title="Stay Tuned!" description="This page is coming soon. Check back for updates." />
        ) : route === "photo" ? (
          <PhotoPage />
        ) : route === "resume" ? (
          <ResumePage />
        ) : route === "archives" ? (
          <ComingSoonPage title="Archives" description="This Archives page is coming soon. Check back for updates." />
        ) : (
          <DesignPage onNavigate={navigate} />
        )}
      </Layout>
    </>
  );
}