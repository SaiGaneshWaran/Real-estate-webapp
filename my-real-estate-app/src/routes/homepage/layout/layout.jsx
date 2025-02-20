
import PropTypes from "prop-types"; // Import PropTypes
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import ScrollButton from "../../../components/scrollbutton/ScrollButton";
import { Outlet } from "react-router-dom";
import "./layout.scss";

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        {children || <Outlet />}
      </div>
      <Footer />
      <ScrollButton />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node, // Validate that children is a React node
};

export default Layout;

