import React from "react";
import { List, Button } from "antd";

const SearchResults = ({ albumsList, addToFavorites }) => (
  <List
    itemLayout="horizontal"
    dataSource={albumsList}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta title={item.albumName} description={item.artistName} />
        <Button id={item.id} type="primary" onClick={addToFavorites}>
          add to favorite
        </Button>
      </List.Item>
    )}
  />
);

export default SearchResults;
