import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";

import { getFavoriteAlbums } from "../../../utils/storage";

import FavoriteAlbumsActions from "../actions";
import FavoriteAlbums from "../components/FavoriteAlbums";

const mapStateToProps = ({ favoriteAlbums }) => ({
  favoriteAlbums: favoriteAlbums.data
});

const mapDispatchToProps = {
  ...FavoriteAlbumsActions
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      const currentList = getFavoriteAlbums();

      this.props.setFavoriteAlbums(currentList);
    },
    componentWillUnmount() {
      this.props.resetFavoriteAlbums();
    }
  })
)(FavoriteAlbums);
