import { useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { DesignPage } from "../pages/DesignPage";
import { DevPage } from "../pages/DevPage";
import { MetercubeCaseStudyPage } from "../pages/MetercubeCaseStudyPage";

const getRoute = () => {
  const pathname = window.location.pathname;
  if (pathname === "/dev") return "dev";
  if (pathname === "/metercube") return "metercube";
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
      ) : (
        <DesignPage onNavigate={navigate} />
      )}
    </Layout>
  );
}