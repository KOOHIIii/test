import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import kentaLogin from "./img/kenta-login.png";
import kentaRegis from "./img/kenta-regis.png";
import kentaData from "./img/kenta-data.png";
import kentaDash from "./img/kenta-dashBord.png";
import ninjamail from "./img/ninjamail.png";
import todolist from "./img/todolist.png";
import colorpick from "./img/colorpick.png";
import spexx1 from "./img/spexx1.png";
import spexx2 from "./img/spexx2.png";
import robotImg from "./img/robotstudio.png";
import cerLetter from "./img/Letter-img.jpg";

function App() {
  var [setDirection, fixSetdirection] = useState(1);
  function homeFunc() {
    fixSetdirection((setDirection = 1));
  }
  function campusFunc() {
    fixSetdirection((setDirection = 2));
  }
  function selfproFunc() {
    fixSetdirection((setDirection = 3));
  }
  function CerFunc() {
    fixSetdirection((setDirection = 4));
  }

  const navList = [
    { index: "Home", page: "#home-page", func: homeFunc, id: 1 },
    { index: "Campus Project", page: "#campus-page", func: campusFunc, id: 2 },
    { index: "Self Project", page: "#self-page", func: selfproFunc, id: 3 },
    { index: "Certificate", page: "#cer-page", func: CerFunc, id: 4 },
  ];

  return (
    <div className="App">
      <div className="wrap-sidebar">
        <div className="nav-menu">
          <div className="img-box"></div>
          <h3>Nutthakun W</h3>
          <ul className="nav-item">
            {navList.map((data) => (
              <li key={data.index}>
                <a
                  className={data.id === setDirection && "action"}
                  onClick={data.func}
                  href={data.page}
                >
                  {data.index}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap-content">
        {setDirection === 1 ? <Home /> : null}
        {setDirection === 2 ? <Campus /> : null}
        {setDirection === 3 ? <SelfProj /> : null}
        {setDirection === 4 ? <Cer /> : null}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div id="home-page" className="home">
      <div className="home-content">
        <div>
          <h1>Nutthakun | Portfolio</h1>
          <div className="wrap-text-home">
            <h5>For Dev Journey , Create With</h5>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Campus() {
  var [selfState, setSelfstate] = useState(1);
  function previous() {
    if (selfState > 1) {
      setSelfstate(selfState - 1);
    }
  }
  function next() {
    if (selfState < 2) {
      setSelfstate(selfState + 1);
    }
  }
  const active = "project-bar-active";
  return (
    <div className="campus-grid">
      <div className="campus-item1">
        <div className={`project-bar ${selfState === 1 && active}`}></div>
        <div className={`project-bar ${selfState === 2 && active}`}></div>
      </div>
      <div className="campus-item2">
        <div>
          <button onClick={previous} className="side-btn">
            {"<"}
          </button>
        </div>
      </div>
      <div className="campus-item3">
        {selfState === 1 ? <Kenta /> : null}
        {selfState === 2 ? <Robot /> : null}
      </div>
      <div className="campus-item4">
        <div>
          <button onClick={next} className="side-btn">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Kenta() {
  return (
    <div className="wrap-robot">
      <div className="textBox-project">
        <h4>Kenta Smart Sleeping Pad</h4>
        <a href="http://localhost/test_kenta/login.php">Visit Site</a>
        <a href="http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=kenta&table=kenta_db">
          Visit Database
        </a>
      </div>
      <div className="wrap-projContent">
        <div className="project-img">
          <img src={kentaLogin} alt="kentaLogin" />
          <img src={kentaRegis} alt="kentaLogin" />
          <img src={kentaDash} alt="kentaLogin" />
          <img src={kentaData} alt="kentaLogin" />
        </div>
      </div>
    </div>
  );
}

function Robot() {
  return (
    <div className="wrap-robot">
      <div className="textBox-project">
        <h4>BU Robot Studio (With WordPress)</h4>
        <a href="https://robotstudio.bu.ac.th/">Visit Site</a>
      </div>
      <div className="wrap-projContent">
        <div className="project-img">
          <img src={robotImg} alt="kentaLogin" />
        </div>
      </div>
    </div>
  );
}

function SelfProj() {
  var [selfState, setSelfstate] = useState(1);
  function previous() {
    if (selfState > 1) {
      setSelfstate(selfState - 1);
    }
  }
  function next() {
    if (selfState < 3) {
      setSelfstate(selfState + 1);
    }
  }
  const active = "project-bar-active";
  return (
    <div className="campus-grid">
      <div className="campus-item1">
        <div className={`project-bar ${selfState === 1 && active}`}></div>
        <div className={`project-bar ${selfState === 2 && active}`}></div>
        <div className={`project-bar ${selfState === 3 && active}`}></div>
      </div>
      <div className="campus-item2">
        <div>
          <button onClick={previous} className="side-btn">
            {"<"}
          </button>
        </div>
      </div>
      <div className="campus-item3">
        {selfState === 1 ? <Ninjamail /> : null}
        {selfState === 2 ? <Todolist /> : null}
        {selfState === 3 ? <Colorpicker /> : null}
      </div>
      <div className="campus-item4">
        <div>
          <button onClick={next} className="side-btn">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Ninjamail() {
  return (
    <div className="wrap-robot">
      <div className="textBox-project">
        <h4>Ninja Mail (Layout Practice)</h4>
        <a href="https://koohiiii.github.io/Ninja-Mail/">Visit Site</a>
      </div>
      <div className="wrap-projContent">
        <div className="project-img">
          <img src={ninjamail} alt="ninjamail" />
        </div>
      </div>
    </div>
  );
}

function Todolist() {
  return (
    <div className="wrap-robot">
      <div className="textBox-project">
        <h4>To Do List (JS Practice)</h4>
        <a href="https://koohiiii.github.io/Project-To-Do-List/">Visit Site</a>
      </div>
      <div className="wrap-projContent">
        <div className="project-img">
          <img src={todolist} alt="todolist" />
        </div>
      </div>
    </div>
  );
}

function Colorpicker() {
  return (
    <div className="wrap-robot">
      <div className="textBox-project">
        <h4>Color Picker (JS Practice)</h4>
        <a href="https://koohiiii.github.io/Project-Color-Picker/">
          Visit Site
        </a>
      </div>
      <div className="wrap-projContent">
        <div className="project-img">
          <img src={colorpick} alt="colorpick" />
        </div>
      </div>
    </div>
  );
}

function Cer() {
  var [selfState, setSelfstate] = useState(1);
  function previous() {
    if (selfState > 1) {
      setSelfstate(selfState - 1);
    }
  }
  function next() {
    if (selfState < 2) {
      setSelfstate(selfState + 1);
    }
  }
  const active = "project-bar-active";
  return (
    <div className="campus-grid">
      <div className="campus-item1">
        <div className={`project-bar ${selfState === 1 && active}`}></div>
        <div className={`project-bar ${selfState === 2 && active}`}></div>
      </div>
      <div className="campus-item2">
        <div>
          <button onClick={previous} className="side-btn">
            {"<"}
          </button>
        </div>
      </div>
      <div className="campus-item3">
        {selfState === 1 ? <Letter /> : null}
        {selfState === 2 ? <English /> : null}
      </div>
      <div className="campus-item4">
        <div>
          <button onClick={next} className="side-btn">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

function English() {
  const onButtonClick = () => {
    const pdfUrl = "/certificate.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Certificate.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="wrap-robot">
      <div className="textBox-project">
        <h4>SPEXX Certificate</h4>
        <p style={{ cursor: "pointer" }} onClick={onButtonClick}>
          Download Certificate
        </p>
      </div>
      <div className="wrap-projContent">
        <div className="cer-img">
          <img src={spexx1} alt="SPEXX Certificate" />
          <img src={spexx2} alt="SPEXX Certificate" />
        </div>
      </div>
    </div>
  );
}

function Letter() {
  const onButtonClick = () => {
    const pdfUrl = "/Letter.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Recomendation.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="wrap-robot">
      <div className="textBox-project">
        <h4>Recommendation Letter</h4>
        <p style={{ cursor: "pointer" }} onClick={onButtonClick}>
          Download Recomendation Letter
        </p>
      </div>
      <div className="wrap-projContent">
        <div className="letter-img">
          <img src={cerLetter} alt="Recomendation Letter" />
        </div>
      </div>
    </div>
  );
}

export default App;
