import React from 'react';
import './HomePage.css'; 

function Header() {
  return (
    <header>
      <h1>Peer Assessment Tool</h1>
      <span className="sign-up">SIGN UP</span>
      <span className="login">LOGIN</span>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>HOME</li>
        <li>FEATURES</li>
        <li>INSTRUCTORS</li>
        <li>COURSES</li>
        <li>ABOUT US</li>
      </ul>
    </nav>
  );
}

function Main() {
  return (
    <main>
      <h1 className="welcome">Welcome to our Peer Assessment Tool!</h1>

      <div className="text-image">
        <div className="description">
          This platform enables students to anonymously
          <br />
          evaluate peer contributions, while instructors
          can
          <br />
          manage teams and monitor performance efficiently.
        </div>
        <img className="student-image" src="Pictures/student-picture.jpeg" alt="Student" />
      </div>
    </main>
  );
}

function App() {
    return (
      <div>
        <Header />
        <Nav />
        <Main />
      </div>
    );
  }
  
  export default App;