import React from "react";
import { Menu } from "semantic-ui-react";

function Header() {
  return (
    <div className="header">
      <Menu
        pointing
        secondary
        size="large"
        color="blue"
        style={{ paddingTop: "15px" }}
      >
        <Menu.Item
          name="socialmedia"
          style={{ color: "darkblue", fontWeight: "600" }}
        />

        <Menu.Menu position="right">
          <Menu.Item name="register" to="/register" />
          <Menu.Item name="login" to="/login" />
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Header;
