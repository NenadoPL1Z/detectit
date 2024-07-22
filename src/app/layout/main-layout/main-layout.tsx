import { MainLayoutProps } from "./types";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
