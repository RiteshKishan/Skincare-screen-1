import React from "react";
import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  const menulist = [
    {
      name: "Overview",
      subMenu: [],
      active: false,
    },
    {
      name: "Profile",
      subMenu: [],
      active: false,
    },
    {
      name: "Appointments",
      subMenu: [],
      active: false,
    },
    {
      name: "History",
      subMenu: ['Videos', 'Videos Library'],
      active: false,
    },
    {
      name: "Messages",
      subMenu: [],
      active: false,
    },
    {
      name: "Support",
      subMenu: [`FAO's`, 'Procedure Information'],
      active: false,
    },
    {
      name: "Aftercare",
      subMenu: ['Quizzes', 'Health & Skin Assesment'],
      active: false,
    },
    {
      name: "Finances",
      subMenu: [],
      active: false,
    },
    {
      name: "Virtual Consultation",
      subMenu: [],
      active: true,
    },
  ];

  return (
    <div className="menu">
      <div className="menu-content">
        <MenuItem data = {menulist} />
      </div>
    </div>
  );
};

export default Menu;
