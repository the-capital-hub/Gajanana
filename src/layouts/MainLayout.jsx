
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AIFloatingButton from "../components/AIFloatingButton/AIFloatingButton";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AIFloatingButton/>
      <WhatsAppButton/>
    </>
  );
}

export default MainLayout;
