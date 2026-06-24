import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  currentRoute: string;
  onNavigate: (path: string) => void;
}

export function Layout({ children, currentRoute, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar currentRoute={currentRoute} onNavigate={onNavigate} />
      {children}
      <Footer />
    </div>
  );
}
