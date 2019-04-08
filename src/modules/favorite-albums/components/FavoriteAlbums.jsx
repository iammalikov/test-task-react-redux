import React from "react";
import { List, Button } from "antd";

const FavoriteAlbums = ({ favoriteAlbums, removeAlbumFromStorage }) => (
  <List
    itemLayout="horizontal"
    dataSource={favoriteAlbums}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          id={item.id}
          title={item.albumName}
          description={item.artistName}
        />
        <Button id={item.id} type="primary" onClick={removeAlbumFromStorage}>
          remove from favorite
        </Button>
      </List.Item>
    )}
  />
);

export default FavoriteAlbums;
