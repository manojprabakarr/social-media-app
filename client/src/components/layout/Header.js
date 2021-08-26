import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function Header() {
  const { user, logout } = useContext(AuthContext);

  const logoutdata = (e) => {
    logout();
  };
  const headers = user ? (
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
          as={Link}
          to="/"
          style={{ color: "darkblue", fontWeight: "600" }}
        />

        <Menu.Menu position="right">
          <Menu.Item name={user.username} to="/" />
          <Menu.Item name="logout" onClick={logoutdata} />
        </Menu.Menu>
      </Menu>
    </div>
  ) : (
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
          as={Link}
          to="/"
          style={{ color: "darkblue", fontWeight: "600" }}
        />

        <Menu.Menu position="right">
          <Menu.Item as={Link} name="register" to="/register" />
          <Menu.Item as={Link} name="login" to="/login" />
        </Menu.Menu>
      </Menu>
    </div>
  );

  return headers;
}

export default Header;
