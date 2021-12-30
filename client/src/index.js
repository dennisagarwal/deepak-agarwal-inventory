import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UploadPage from "./pages/Upload/UploadPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//sprint2
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UploadPage} />
        {/* <Route path="/videos" exact component={App} />
        <Route path="/videos/:id" exact component={App} /> */}
        <Route path="/uploads" exact component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
