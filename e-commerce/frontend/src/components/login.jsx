import "./login.css";

/* 🔒 BACKEND IMPORTS – UNCHANGED */
import { useState, useEffect } from "react";
import app from "./firebase";
import {
  getAuth,
  getRedirectResult,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
} from "firebase/auth";

/* 🎨 UI ASSETS (from new design) */
import leftImage from "./assets/xfbxfb.jpg";
import rectangleBtn from "./assets/awdaw15.png";
import rectangleInput from "./assets/awdaw15.png;
import line3 from "./assets/line2.svg";
import line4 from "./assets/line2.svg";

function Login() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [data, setData] = useState({});

  /* 🔒 LOGIC – UNCHANGED */
  const input = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  getRedirectResult(auth).catch(() => {});

  const signin = () => {
    signInWithEmailAndPassword(auth, data.email, data.password).catch(() => {});
  };

  const signup = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password).catch(
      () => {}
    );
  };

  const popup = () => {
    signInWithPopup(auth, provider).catch(() => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, () => {});
  }, []);

  return (
    <div className="desktop">
      {/* LEFT IMAGE */}
      <div className="left-section">
        <img src={leftImage} alt="Visual" />
        <h2>Get Started with Us</h2>
      </div>

      {/* RIGHT FORM */}
      <div className="right-section">
        <h1>Create an account</h1>

        {/* EMAIL */}
        <div className="input-group">
          <label>Your email</label>
          <div className="input-wrapper">
            <img src={rectangleInput} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={input}
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="input-group">
          <label>Create password</label>
          <div className="input-wrapper">
            <img src={rectangleInput} alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={input}
            />
          </div>
        </div>

        {/* EMAIL BUTTON */}
        <button className="primary-btn" onClick={signin}>
          <img src={rectangleBtn} alt="" />
          <span>Create account</span>
        </button>

        {/* DIVIDER */}
        <div className="divider">
          <img src={line3} alt="" />
          <span>or continue with</span>
          <img src={line4} alt="" />
        </div>

        {/* GOOGLE */}
        <button className="secondary-btn" onClick={popup}>
          Continue with Google
        </button>

        {/* SIGN UP */}
        <p className="signup-text">
          Don’t have account? <span onClick={signup}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
