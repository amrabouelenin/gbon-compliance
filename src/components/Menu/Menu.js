import React from "react";
import { Menu } from "antd";

import "./Menu.css";

const AppMenu = (props) => {
  return (
    <Menu mode="horizontal" className="menu-top">
      <Menu.Item key={1}>Home</Menu.Item>
      <Menu.Item key={2}>Country Page</Menu.Item>
    </Menu>
  );
};

export default AppMenu;
