import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions/authActions";
import Upload from "../components/fileUpload";

const DataPage = props => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.logout();
    }, 3600000); //auto logs out in 60 mins which is when the cookie expires
    return () => clearTimeout(timer);
  }, [props, props.logout]);
  return (
    <div>
      <h1>This is data page</h1>;<h1>This is upload below</h1>
      <Upload />
    </div>
  );
};
const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
});
export default connect(
  null,
  mapDispatch
)(DataPage);
