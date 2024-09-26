import './App.css';

function App() {
  return (
    <div>
      /*test*/
      {/* Title Banner Section */}
      <div className="titleBanner">
        <p className="pageTitle">Peer Assessment Tool</p>
        <div className="signup-login-side">
          <p className="signUp">SIGN UP</p>
          <p className="login">LOGIN</p>
        </div>
      </div>

      {/* Tab Section */}
      <div className="tabSection">
        <p>
          <span className="home">HOME</span>
          <span className="features">FEATURES</span>
          <span className="instructors">INSTRUCTORS</span>
          <span className="courses">COURSES</span>
          <span className="aboutUs">ABOUT US</span>
        </p>
      </div>

      {/* Information Section */}
      <div className="informationBox">
        <div className="signupSection">
          <p className="signup-text">SIGN UP</p>
        </div>

        <div>
          <p className="userType">User Type:</p>
          <p className="student">Student</p>
          <input className="checkBox1" type="checkbox" />
          <p className="instructor">Instructor</p>
          <input className="checkBox2" type="checkbox" />
        </div>

        <div>
          <p className="username">Username:</p>
          <input className="search-username" type="text" placeholder="Username" />
        </div>

        <div>
          <p className="firstName">First Name:</p>
          <input className="search-firstName" type="text" placeholder="Jane" />
        </div>

        <div>
          <p className="lastName">Last Name:</p>
          <input className="search-lastName" type="text" placeholder="Doe" />
        </div>

        <div>
          <p className="emailAddress">Email Address:</p>
          <input className="search-emailAddress" type="text" placeholder="example@gmail.com" />
        </div>

        <div>
          <p className="password">Password:</p>
          <input className="search-password" type="text" placeholder="password" />
        </div>

        <div>
          <p className="confirmPassword">Confirm Password:</p>
          <input className="search-confirmPassword" type="text" placeholder="Confirm Password" />
        </div>

        <div className="createAccount">
          <p className="create-account-option">Create Account</p>
        </div>

        <div className="alreadyAccount">
          <p className="already-account-option">Already have an account?</p>
        </div>
      </div>
    </div>
  );
}

export default App;
