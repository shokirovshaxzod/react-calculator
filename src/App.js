import React, { useState } from 'react';
import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import './App.css';
const getDark = () => {
  let isdark = localStorage.getItem('dark');
  if (isdark) {
    return JSON.parse(localStorage.getItem('dark'));
  } else {
    return [];
  }
};
function App() {
  const [dark, setDark] = useState(getDark());
  const [val, setVal] = useState('');
  const backspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal(' ');
    }
  };
  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal('Error');
    }
  };
  const toggle = () => {
    setDark(!dark);
  };
  return (
    <div className={`App ${dark ? 'bg-dark' : ''}`}>
      <div className="container my-2 mx-6">
        <div className="row">
          <div className="col-12 ">
            <h1
              className={`display-6 fw-bolder text-center ${
                dark ? 'text-warning' : 'text-primary'
              }`}>
              CALCULATOR
              <button onClick={toggle} className="btnbox ms-3 ">
                {dark ? <BsSun size={32} className="text-light" /> : <BsFillMoonFill size={28} />}
              </button>
            </h1>
            <hr className="bg-primaryg" />
          </div>
        </div>
        <div className="row justify-content-center" id="rowbox">
          <div className="col-md-4">
            <div className="card  mb-3 pt-3 shadow">
              <div className="card-body text-primary">
                <input
                  type="text"
                  className={`form-control form-control-lg mb-4 text-center ${
                    dark ? 'bg-dark text-warning' : ''
                  } fss-4 text-primary shadow`}
                  onChange={(e) => setVal(e.target.value)}
                  value={val}
                />
                <div className="row">
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="1"
                      onClick={(e) => setVal(val + e.target.value)}>
                      1
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="2"
                      onClick={(e) => setVal(val + e.target.value)}>
                      2
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="3"
                      onClick={(e) => setVal(val + e.target.value)}>
                      3
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow  px-2 py-4 fs-4`}
                      value="C"
                      onClick={() => backspace()}>
                      C/CE
                    </button>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="4"
                      onClick={(e) => setVal(val + e.target.value)}>
                      4
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="5"
                      onClick={(e) => setVal(val + e.target.value)}>
                      5
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="6"
                      onClick={(e) => setVal(val + e.target.value)}>
                      6
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="+"
                      onClick={(e) => setVal(val + e.target.value)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="7"
                      onClick={(e) => setVal(val + e.target.value)}>
                      7
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="8"
                      onClick={(e) => setVal(val + e.target.value)}>
                      8
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="9"
                      onClick={(e) => setVal(val + e.target.value)}>
                      9
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="*"
                      onClick={(e) => setVal(val + e.target.value)}>
                      X
                    </button>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="."
                      onClick={(e) => setVal(val + e.target.value)}>
                      .
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="0"
                      onClick={(e) => setVal(val + e.target.value)}>
                      0
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="="
                      onClick={() => calculate()}>
                      =
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className={`btn ${dark ? 'btn-dark text-warning' : ''} 
                      text-primary shadow p-4 fs-4`}
                      value="/"
                      onClick={(e) => setVal(val + e.target.value)}>
                      /
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
