import "./App.css";
import Progress from "./Progress";

// import img from './img/background.png'

function App() {
  return (
    <div className="App">
      <div className="firstSvg"></div>
      <div className="warper">
        <div className="main-box">
          <h1>Initializing</h1>
          <div>
            <p style={{ color: "#5B6690", fontSize: "1.5rem" }}>
              Authenticating Device
            </p>
            <Progress value={50} />
            <p>Please wait...</p>
          </div>
        </div>
        <div className="footer" style={{ color: "#5B6690" }}>
          <p style={{ textAlign: "left" }}>
            &copy; Mvix(USA), Inc. All rights reserved.
          </p>
          <p style={{ textAlign: "right", fontSize: "1.5rem" }}>Mvix</p>
        </div>
      </div>
      <div className="second"></div>
    </div>
  );
}

export default App;
