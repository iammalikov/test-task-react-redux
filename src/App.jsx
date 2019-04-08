import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import Main from "./pages/Main";
import Favorite from "./pages/Favorite";

const { Header, Content } = Layout;
const mapStateToProps = ({ router }) => ({
  pathname: router.location.pathname
});

const App = ({ pathname }) => (
  <div className="app">
    <Layout className="layout">
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          selectedKeys={[pathname]}
          className="menu"
        >
          <Menu.Item key={process.env.PUBLIC_URL + "/"}>
            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          </Menu.Item>
          <Menu.Item key={process.env.PUBLIC_URL + "/favorite"}>
            <Link to={process.env.PUBLIC_URL + "/favorite"}>Favorite</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <Route path={process.env.PUBLIC_URL + "/"} component={Main} exact />
        <Route
          path={process.env.PUBLIC_URL + "/favorite"}
          component={Favorite}
          exact
        />
      </Content>
    </Layout>
  </div>
);

export default connect(
  mapStateToProps,
  null
)(App);
