// importing an image
import logo from "../../assets/logo/BrainFlix-logo.svg";
import "./Header.scss";
import Btn from "../Button/Btn";
import upload from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

export default function Header() {
  function redirectHome(){
  window.location = "/";
}
const handleSubmit = (event) => {
  redirectHome();
    }
  return (
    <header className="main-header">
      <Link to="/" onClick={handleSubmit} className="Btn__upload2">
      <Btn text="INVENTORY"  />
      </Link>
      <form className="main-header__form">
          <Link to="/" className="Btn__upload2">
            <Btn text="FORM" />
          </Link>
          <Link to="/uploads" className="Btn__upload2">
            <Btn text="RECORD" />
          </Link>
      </form>
    </header>
  );
}
