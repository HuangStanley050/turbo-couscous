import React, { useEffect } from "react";
import { connect } from "react-redux";
import { autoLogout } from "../store/actions/authActions";

const DataPage = props => {
  useEffect(() => {
    //checking if cookie is still valid
    if (
      document.cookie
        .split(";")
        .filter(item => item.trim().startsWith("htmlPdf=")).length
    ) {
      console.log('The cookie "reader" exists (ES6)');
    }
  }, []);
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
