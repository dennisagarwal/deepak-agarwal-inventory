import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UploadPage from "./pages/UploadPage"
// sprint2
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from './pages/Home';
// import reportWebVitals from './reportWebVitals';

//sprint2
// const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
   <Router>
    <App />
    {/* sprint2 */}

    <Route path="/UploadPage" exact component={UploadPage} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
