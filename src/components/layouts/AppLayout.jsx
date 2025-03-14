import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppLayout = () => {
  if (navigation.state === "loading") return <Loading />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
