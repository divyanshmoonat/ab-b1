import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      {/* Dynamic content part */}
      <Outlet />
      {/* 
        / => <Home />
        /contact-us => <ContactUs />
        /about-us => <AboutUs />

        if(url === "/") {
        <Home />
        } else if (url === "/contact-us") {
         <ContactUs />
         }
      */}
      <Footer />
    </>
  );
};

export default Layout;
