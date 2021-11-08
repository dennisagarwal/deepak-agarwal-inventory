// importing an image
import logo from "../../assets/logo/BrainFlix-logo.svg";
import mohanImage from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";
import Btn from "../Button/Btn";
import upload from "../../assets/icons/upload.svg";
import search from "../../assets/icons/search.svg";
import { Link } from "react-router-dom";
//sprint2
//header including logo, input, button ,image
export default function Header() {
  return (
    <header className="main-header">
      <Link to="/" className="main-header__logo">
        <img src={logo} alt="app logo" />
      </Link>
      <form className="main-header__form">
        <div className="main-header__form-input-img">
          <div className="main-header__form-input-search-img">
            <img
              className="main-header__form-input-search-img--element"
              src={search}
              alt="search-image"
            />
            <input
              className="main-header__form-input"
              type="text"
              id="search"
              name="search"
              placeholder="Search"
            />
          </div>
          <Link to="/uploads" className="Btn__upload2">
            <img
              className="Btn__upload2--img"
              src={upload}
              alt="upload-image"
            />
           <Btn text="UPLOAD" />
          </Link>
          <img
            className="main-header__form-img"
            src={mohanImage}
            alt="profile image"
          />
        </div>
        <div className="Btn__upload">
          <img className="Btn__upload--img" src={upload} alt="upload-image" />
          <Btn text="UPLOAD" />
        </div>
      </form>
    </header>
  );
}
