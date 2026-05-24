import { useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { DesignPage } from "../pages/DesignPage";
import { DevPage } from "../pages/DevPage";

const getRoute = () => {
  const pathname = window.location.pathname;
  return pathname === "/dev" ? "/dev" : "/";
};

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== window.location.pathname) {
      window.history.pushState(null, "", path);
      setRoute(getRoute());
    }
  };

  return (
    <Layout currentRoute={route} onNavigate={navigate}>
      {route === "/" ? <DesignPage /> : <DevPage />}
    </Layout>
  );
}