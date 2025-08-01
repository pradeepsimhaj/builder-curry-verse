import { ReactNode } from "react";

interface PortfolioLayoutProps {
  children: ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}
