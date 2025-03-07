import { Outlet } from "react-router-dom";
import { About } from "../../pages/About";
import { Contact } from "../../pages/Contact";
import { Home } from "../../pages/Home";
import { Movie } from "../../pages/Movie";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
