import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { LoadingOutlined } from "@ant-design/icons";
import { ConfigProvider, Spin } from "antd";
import { theme } from "./custom-theme";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </HashRouter>
);
