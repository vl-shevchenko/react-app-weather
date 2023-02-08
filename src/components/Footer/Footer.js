import Logo from '../Logo/Logo';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper-section">
          <div className="footer__section">
            <Logo />
          </div>
        </div>
        <div className="footer__wrapper-section">
          <div className="footer__section">
            <p className="footer__text">© Reactweather.com 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
