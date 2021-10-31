// importing an image
import logo from "../assets/logo/BrainFlix-logo.svg";
import mohanImage from "../assets/images/Mohan-muruge.jpg";
import "../styles/Header.scss";
import Btn from "./Btn";
import upload from '.././assets/icons/upload.svg';
import search from ".././assets/icons/search.svg";


export default function Header() {
  return (
    <header className="main-header">
      <h1 className="main-header__logo">
        <img src={logo} alt="app logo" />
      </h1>
      <form className="main-header__form">
        <div className="main-header__form-input-img">
        <div className="main-header__form-input-search-img">
        <img className="main-header__form-input-search-img--element" src={search} alt="search-image" />
          <input
            className="main-header__form-input"
            type="text"
            id="search"
            name="search"
            placeholder="Search"
          />
        </div>
        <div className="Btn__upload2">
        <img className="Btn__upload2--img" src={upload} alt="upload-image" />
        <Btn text="UPLOAD" />
        </div>
        <img className="main-header__form-img" src={mohanImage} alt="profile image" />

        </div>
        <div className="Btn__upload">
        <img className="Btn__upload--img" src={upload} alt="upload-image" />
        <Btn text="UPLOAD" />
        </div>
        {/* <button className="main-header__form-button" type="submit">
          UPLOAD
        </button> */}
      </form>
    </header>
  );
}
