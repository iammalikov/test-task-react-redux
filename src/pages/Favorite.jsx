import React, { Fragment } from "react";
import { Typography } from "antd";

import FavoriteAlbums from "../modules/favorite-albums";

const { Title } = Typography;

const Favorite = () => (
  <Fragment>
    <Title>My favorite music albums</Title>
    <FavoriteAlbums />
  </Fragment>
);

export default Favorite;
