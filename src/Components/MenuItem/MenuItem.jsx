import React from "react";
import "./MenuItem.css";

const MenuItem = (props) => {
  const menuData = props.data;
  return (
    <div className="menuitem">
      {menuData.map((item) => {
        return (
          <>
            <div
              className={
                item.active ? "menuitem-itemactive" : "menuitem-itemdeactive"
              }
            >
              {item.name}
            </div>
            {item.subMenu.length > 0 ? (
              <>
                <div className="submenugap"></div>
                {item.subMenu.map((sub) => {
                  return <div className="menuItem-submenu">{sub}</div>;
                })}
              </>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default MenuItem;
