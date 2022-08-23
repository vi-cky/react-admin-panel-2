import React, { useState } from "react";
import { Button, Col, Input, Row, Select } from "antd";
// import { CSSTransition } from "react-transition-group";
import "./navbar.css";
import {
  BgColorsOutlined,
  ExpandAltOutlined,
  ExpandOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../../assets/img/logo.png";

const { Option } = Select;

export default function Navbar({ collapsed, toggleCollapsed }) {
  const [expand, setExpand] = useState(true);

  return (
    <>
      <Row>
        <Col xs={12} md={8} lg={3}>
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined style={{ fontSize: "16px" }} />
            ) : (
              <MenuFoldOutlined style={{ fontSize: "16px" }} />
            )}
          </Button>
        </Col>
        <Col xs={0} md={8} lg={3}>
          <img src={logo} width="33px" height="33px" alt="" />{" "}
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>
            Enlite Prime
          </span>
        </Col>
        <Col xs={0} md={0} lg={3}>
          <span onClick={() => setExpand(!expand)}>
            {expand ? (
              <ExpandOutlined style={{ fontSize: "20px" }} />
            ) : (
              <ExpandAltOutlined style={{ fontSize: "20px" }} />
            )}
          </span>
          <span style={{ margin: "0px 20px 0px 20px" }}>
            <BgColorsOutlined style={{ fontSize: "22px" }} />
          </span>
          <span>
            <QuestionCircleOutlined style={{ fontSize: "22px" }} />
          </span>
        </Col>
        <Col xs={0} lg={8} style={{ textAlign: "right" }}>
          <Input
            placeholder="Search UI"
            prefix={<SearchOutlined style={{ fontSize: "18px" }} />}
            style={{ width: "180px", textAlign: "center" }}
          />
        </Col>
        <Col xs={0} lg={4} style={{ textAlign: "right" }}>
          <Select
            labelInValue
            defaultValue={{
              value: "O'zbek",
              label: "O'zbek",
            }}
            style={{
              width: 120,
            }}
          >
            <Option value="O'zbek">O'zbek</Option>
            <Option value="russia">Russia</Option>
            <Option value="English">English</Option>
            <Option value="Espanol">Espanol</Option>
          </Select>
        </Col>
        <Col xs={12} md={8} lg={3} style={{ textAlign: "right"}}>
          <Button
            type="primary"
            style={{ width: "100px", textAlign: "center" }}
          >
            <span>
              <UserOutlined style={{ fontSize: "18px" }} />
            </span>
            LogIn
          </Button>
        </Col>
      </Row>
    </>
  );
}
