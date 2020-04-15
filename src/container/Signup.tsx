// Import FirebaseAuth and firebase.
import React from "react";
import { Link } from "react-router-dom";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import fire from "../fire";
// import firebase from "firebase";

// // Configure FirebaseUI.
// const uiConfig = {
//   // Popup signin flow rather than redirect flow.
//   signInFlow: "popup",
//   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   signInSuccessUrl: "/signedIn",
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
// };

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Link to="/speaker/xSwOTU2lVasmNiQOyRUY">I&apos;m a speaker</Link>
        <Link to="/organizer/7EcIbJHBAXHLdMuNbIB6">I&apos;m an organizer</Link>
      </div>
    );
  }
}

export default SignUp;
