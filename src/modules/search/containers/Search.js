import { connect } from "react-redux";

import SearchResultsActions from "../../search-results/actions";

import Search from "../components/Search";

const mapDispatchToProps = {
  onSearch: query => dispatch =>
    dispatch(SearchResultsActions.fetchSearchResults(query))
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
