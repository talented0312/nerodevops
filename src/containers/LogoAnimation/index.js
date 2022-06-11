import "./stylelogo.scss";
import Logo from '../../assets/img/logomake.png'
import logoHorse from "../../assets/img/logo/logo-horse.svg"
import logoTop from "../../assets/img/logo/logo-top.svg";
import logoBottom from "../../assets/img/logo/logo-bottom.svg";
import logoHorseshoes from "../../assets/img/logo/logo-horseshoes.svg";
import { useEffect, useState } from "react";
const LogoAnimation = () => {
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 });

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
    }
    setTimeout(() => {
      var dip = document.getElementsByClassName('horseshoes-group');
      dip[0].style.display = "none";
    }, 3000);
    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return (

    <div className="Logo">
      <div className="header-container">
        {/* <div className="header">Sponsored Headlines</div> */}
        {/* <div className="title-container">
          <p>Freelance Collaboration &</p>
          <p>Domain Breeding Marketplace</p>
        </div> */}
        <div className="logomake">
          <img src={Logo} alt="logos" style={{width: "40%"}}/>
        </div>
        <div className="scroll-indicator">
          <div className="title">
            The World's Most Exclusive & Top Freelancer
            Network
          </div>
          <div className="arrow-down-icons">
            <span></span>
            <span className="delay1"></span>
            <span className="delay2"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LogoAnimation;