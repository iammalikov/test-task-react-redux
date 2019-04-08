import React, { Fragment } from "react";
import { Typography } from "antd";

import Search from "../modules/search";
import SearchResults from "../modules/search-results";

const { Title } = Typography;

const Main = () => (
  <Fragment>
    <Title>Search music albums</Title>
    <Search />
    <SearchResults />
  </Fragment>
);

export default Main;
