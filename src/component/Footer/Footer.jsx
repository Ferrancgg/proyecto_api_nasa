import "./Footer.css";

const Footer = () => {
  return (
    <footer>
  
      <div className="fg-link-container">
        <a href="https://github.com/Ferrancgg">
          <div className="fg-enlaces">
            <img
              src="https://res.cloudinary.com/di49fnkc8/image/upload/v1690091312/github-2_zrkost.png"
              alt="logo github"
            />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ferrangomezgalan/">
          <div className="fg-enlaces">
            <img
              src="https://res.cloudinary.com/di49fnkc8/image/upload/v1690091087/linkedin-2_z3foqr.png"
              alt="logo github"
            />
          </div>
        </a>
        <a href="https://www.instagram.com">
          <div className="fg-enlaces">
            <img
              src="https://res.cloudinary.com/di49fnkc8/image/upload/v1690091108/instagram-2_ax4dfw.png"
              alt="logo github"
            />
          </div>
        </a>
      </div>
      <p>made with love </p>
      <p>Ferran Gómez Galán 2023</p>
    </footer>
  );
};

export default Footer;
