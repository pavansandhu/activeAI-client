import "../Footer/Footer.scss";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <section
        className={`footer__section ${isHome ? "footer__section--home" : ""} `}
      >
        <p className="footer__text">Powered by Gemini AI</p>
      </section>
    </>
  );
}

export default Footer;
