import { connect } from "react-redux";
import LogIn from "../components/login";
import { logInUser, logOutUser } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => dispatch(logInUser(user)),
    logOutUser: () => dispatch(logOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
