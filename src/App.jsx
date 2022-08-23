import {
  ContactsOutlined,
  DashboardOutlined,
  SolutionOutlined,
  TableOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./App";
import "antd/dist/antd.min.css";
import Navbar from "./components/navbar/Navbar";
import ContentPage from "./components/content/ContentPage";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";
const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Header style={{ backgroundColor: "#f0f2f5", padding: "0px 10px 0px 10px" }}>
        <Navbar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      </Header>
      <Layout>
        <Sider collapsed={collapsed} style={{ backgroundColor: "#f0f2f5" }}>
          <Menu
            style={{ backgroundColor: "#f0f2f5" }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            // style={{ fontWeight: "bold", fontSize: "12px" }}
          >
            <Menu.Item
              key="1"
              icon={<DashboardOutlined style={{ fontSize: "18px" }} />}
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <SubMenu
              style={{ backgroundColor: "#f0f2f5" }}
              key="sub1"
              icon={<UserOutlined style={{ fontSize: "18px" }} />}
              title={
                <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                  Students
                </span>
              }
            >
              <Menu.Item
                key="2"
                icon={<UserAddOutlined style={{ fontSize: "18px" }} />}
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                <Link to="/students/add">Add Student</Link>
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<TableOutlined style={{ fontSize: "18px" }} />}
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                <Link to="/students/table">Students Table</Link>
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={<ContactsOutlined style={{ fontSize: "18px" }} />}
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                <Link to="/students/contact">Contact</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              key="5"
              icon={<SolutionOutlined style={{ fontSize: "18px" }} />}
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              <Link to="/teachers">Teachers</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: "10px 15px" }}>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "15px",
                minHeight: "560px",
              }}
            >
              <ContentPage />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Copyright ©2022 Created by Mukhtorov
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
