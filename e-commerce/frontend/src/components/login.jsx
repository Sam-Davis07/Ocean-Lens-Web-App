import "./login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


/* 🎨 UI ASSETS (from new design) */
import leftImage from "./assets/xfbxfb.jpg";
import rectangleBtn from "./assets/sfgsge.png";
import rectangleInput from "./assets/awdaw15.png";
import line3 from "./assets/line2.svg";
import line4 from "./assets/line2.svg";

function Login() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
  
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  
  const signin = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    const result = await res.json();
  
    if (result.success) {
      alert("Login successful");
      navigate("/");
      localStorage.setItem("user", JSON.stringify(result.user));
    } else {
      alert(result.message);
    }
  };
  const signup = async () => {
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    const result = await res.json();
  
    if (result.success) {
      alert("Account created successfully");
    } else {
      alert(result.message);
    }
  };
      
  /* 🔒 LOGIC – UNCHANGED */
  const input = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };




  return (
    <div className="desktop">
      {/* LEFT IMAGE */}
      <div className="left-section">
        <img src={leftImage} alt="Visual" />
        <h2>Get Started with Us</h2>
      </div>

      {/* RIGHT FORM */}
      <div className="right-section">
        <h1>Login</h1>

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


        {/* SIGN UP */}
        <p className="signup-text">
          Don’t have account? <span onClick={signup}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;

