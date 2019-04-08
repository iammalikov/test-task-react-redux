import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";

import FavoriteAlbumsActions from "../../favorite-albums/actions";

import SearchResultsActions from "../actions";
import SearchResults from "../components/SearchResults";

const mapStateToProps = ({ searchResults }) => ({
  albumsList: searchResults.data
});

const mapDispatchToProps = {
  ...SearchResultsActions,
  ...FavoriteAlbumsActions
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentWillUnmount() {
      this.props.resetSearchResults();
    }
  })
)(SearchResults);
