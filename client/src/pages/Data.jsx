import React from "react";
import { connect } from "react-redux";
import { autoLogout } from "../store/actions/authActions";

const DataPage = props => {
  return (
    <div>
      <h1>This is data page</h1>;
    </div>
  );
};
const mapDispatch = dispatch => ({
  logout: () => dispatch(autoLogout())
});
export default connect(
  null,
  mapDispatch
)(DataPage);
