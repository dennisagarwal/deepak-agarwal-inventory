import { Link, Switch, Route } from "react-router-dom";
import publish from "../assets/icons/publish.svg";
import "../styles/Upload.scss"

function UploadPage(props) {
  return (
    <section className="upload">
      <Header />
      <div>
        <h1 className="upload__heading">Upload Video</h1>
        <p className="upload__heading-img">VIDEO THUMBNAIL</p>
        <img className="upload__img" src="" alt="video-thumbnail-image" />
      </div>
      <Form className="upload__form">
        <label className="upload__form-label" type="text">
          TITLE YOUR VIDEO
        </label>
        <input className="upload__form-input" type="text" />
        <label className="upload__form-label" type="text">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea className="upload__form-textarea" type="text" />
        <button className="upload__form-button">
          <img src={publish} alt="video-thumbnail-image" />
          <Btn />
        </button>
      </Form>
    </section>
  );
}

export default UploadPage;
