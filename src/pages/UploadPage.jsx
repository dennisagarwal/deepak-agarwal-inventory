import App from "../App";
import publish from "../assets/icons/publish.svg";
import thumbnail from "../assets/icons/uploadVideoPreview.jpg";
import "../styles/UploadPage.scss"
import Btn from "../components/Btn";
import Header from "../components/Header";

function UploadPage() {
  return (
    <section className="upload">
    <div className="upload__header">
      <Header />
      </div>
      <div>
        <h1 className="upload__heading">Upload Video</h1>
        <p className="upload__heading-img">VIDEO THUMBNAIL</p>
        <img className="upload__img" src={thumbnail} alt="video-thumbnail-image" />
      </div>
      <form className="upload__form">
        <label className="upload__form-label" type="text">
          TITLE YOUR VIDEO
        </label>
        <input className="upload__form-input" type="text" placeholder="Add a title to your video" />
        <label className="upload__form-label" type="text">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea className="upload__form-textarea" type="text" placeholder="Add a description to your video"/>

        <div className="upload__form-buttons-div">
        <a className="upload__form-anchor2" href={App}>CANCEL</a>

        <button className="upload__form-button">
          <img className="upload__form-button-img" src={publish} alt="video-thumbnail-image" />
          <Btn text="PUBLISH" />
        </button>
        <a className="upload__form-anchor1" href={App}>CANCEL</a>
      </div>
      </form>
    </section>
  );
}

export default UploadPage;
