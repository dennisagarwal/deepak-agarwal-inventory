import App from "../../App";
import publish from "../../assets/icons/publish.svg";
import thumbnail from "../../assets/icons/uploadVideoPreview.jpg";
import "./UploadPage.scss";
import Btn from "../../components/Button/Btn";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { createRef } from "react";
import axios from "axios";

const PORT = 8080;

function UploadPage() {
  function redirectForm() {
    // event.preventDefault()
    alert("Data Uploaded Successfully");
    window.location = "/";
  }
  const formRef = createRef();
  const handleSubmit = (event) => {
    const form = formRef.current;
    const part = form.part.value;
    const tag = form.tag.value;
    const rack = form.rack.value;
    const quantity = form.quantity.value;
    const location = form.location.value;
    const description = form.description.value;
    console.log(description);
    if (part === "" || tag === "" || description === "") {
      alert("Please fill in all required details");
    } else {
      axios.post(`/videos`, {
        part,
        tag,
        rack,
        quantity,
        location,
        description,
      });
      redirectForm();
    }
  };
  return (
    <section className="upload">
      <Header />

      <form ref={formRef} className="upload__form">
        <label className="upload__form-label" type="text">
          PART NUMBER
        </label>
        <input
          name="part"
          className="upload__form-input"
          type="text"
          placeholder="Part Number"
        />
        <label className="upload__form-label" type="text">
          TAG NUMBER
        </label>
        <input
          name="tag"
          className="upload__form-input"
          type="text"
          placeholder="Tag Number"
        />

        <label className="upload__form-label" type="text">
          RACK NUMBER
        </label>
        <input
          name="rack"
          className="upload__form-input"
          type="text"
          placeholder="Rack Number"
        />

        <label className="upload__form-label" type="text">
          Quantity
        </label>
        <input
          name="quantity"
          className="upload__form-input"
          type="text"
          placeholder="Quantity"
        />

        <label className="upload__form-label" type="text">
          Location
        </label>
        <input
          name="location"
          className="upload__form-input"
          type="text"
          placeholder="Location"
        />

        <label className="upload__form-label" type="text">
          MESSAGE
        </label>
        <textarea
          name="description"
          className="upload__form-textarea"
          type="text"
          placeholder="Add a message"
        />
        <div className="upload__form-buttons-div">

          <Link to="/" onClick={handleSubmit} className="upload__form-button">
            <img
              className="upload__form-button-img"
              src={publish}
              alt="video-thumbnail-image"
            />
            <Btn text="SUBMIT" />
          </Link>
          </div>
      </form>
    </section>
  );
}

export default UploadPage;
