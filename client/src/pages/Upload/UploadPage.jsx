import App from "../../App";
import publish from "../../assets/icons/publish.svg";
import thumbnail from "../../assets/icons/uploadVideoPreview.jpg";
import "./UploadPage.scss";
import Btn from "../../components/Button/Btn";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { createRef } from "react";

function UploadPage() {
  function redirectHome(){
    alert ("Redirecting");
    window.location.href = "/";
  }
  const formRef = createRef();
  const handleSubmit = () => {
    const form = formRef.current;
    const title = form.title.value;
    const description = form.description.value;
    if (title === "" || description === "") {
      alert("Please fill in all required details");
    } else {
      // alert("Submitted Successfully");
      // window.location="/";
      redirectHome();
    }
  };
  return (
    <section className="upload">
      <div className="upload__header">
        <Header />
      </div>

      <h1 className="upload__heading">Upload Video</h1>
      <div className="upload__section">
        <div className="upload__section--div">
          <p className="upload__heading-img">VIDEO THUMBNAIL</p>
          <img
            className="upload__img"
            src={thumbnail}
            alt="video-thumbnail-image"
          />
        </div>

        <form ref={formRef} className="upload__form">
          <label className="upload__form-label" type="text">
            TITLE YOUR VIDEO
          </label>
          <input
            name="title"
            className="upload__form-input"
            type="text"
            placeholder="Add a title to your video"
          />
          <label className="upload__form-label" type="text">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            name="description"
            className="upload__form-textarea"
            type="text"
            placeholder="Add a description to your video"
          />
          <div className="upload__form-buttons-div">
            <Link to="/" className="upload__form-anchor2" href={App}>
              CANCEL
            </Link>
            <button onClick={handleSubmit} className="upload__form-button">
              <img
                className="upload__form-button-img"
                src={publish}
                alt="video-thumbnail-image"
              />
              <Btn text="PUBLISH" />
            </button>
            <Link to="/" className="upload__form-anchor1" href={App}>
              CANCEL
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UploadPage;
