import React, { FC } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Tabs: FC = () => {
  return (
    <Nav fill variant="tabs">
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <Link to="/UAH-USD">UAH-USD</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">
          <Link to="/UAH-EUR">UAH-EUR</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">
          <Link to="/UAH-PLN">UAH-PLN</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Tabs;
