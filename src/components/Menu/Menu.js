import React from "react";
import { Menu } from "antd";

import "./Menu.css";

const AppMenu = (props) => {
  const menuItems = [
    {
      key: "home",
      label: "Home",
    },
    {
      key: "country_page",
      label: "Country Page",
    },
  ];
  return <Menu mode="horizontal" className="menu-top" items={menuItems}></Menu>;
};

export default AppMenu;
