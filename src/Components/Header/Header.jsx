import React,{ useState} from "react";
import "./Header.css";
import headerLogo from "../Assests/SkinClubLogo_Logotype_White 1.svg";
import bell_icon from "../Assests/Bell-icon.svg";
import menu_icon from '../Assests/Menu_icon.svg'

const Header = () => {

const currentDate = 'Sunday, 20 August'

  function getTime(){
    const time = new Date();
    const showTime = time.getHours() 
        + ':' + time.getMinutes();
        return showTime
  }
  const [currentTime, setCurrentTime] = useState(getTime())

  return (
    <div className="header">
      <div className="header_container">
        <div className="header-menu-icon">
          <img src={menu_icon} alt="" />
        </div>
        <div className="header_logo">
          <img src={headerLogo} alt="" />
        </div>
        <div className="header_content">
          <div className="header_date">{currentDate}</div>
          <div className="header_time">{currentTime}</div>
          <div className="header_icon">
            <img src={bell_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
