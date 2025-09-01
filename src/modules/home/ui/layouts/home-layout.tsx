import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { HomeNavbar } from "../components/home-navbar";

interface HomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div>{children}</div>
      </div>
    </SidebarProvider>
  );
};
