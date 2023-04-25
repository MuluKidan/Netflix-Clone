import React from "react";
import "./ProfileScreen.css";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import { auth } from "./Firebase";
import PlansScreen from "./PlansScreen";
function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="ProfileScreen">
      <Nav />

      <div className="ProfileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__Plans">
              <h3>Plans</h3>
              <PlansScreen  />
              <p></p>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
