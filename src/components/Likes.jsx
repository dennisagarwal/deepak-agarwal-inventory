import "../styles/Likes.scss";
import likes from "../assets/icons/likes.svg";
import views from "../assets/icons/views.svg";

export default function Likes() {
  return (
    <div className="BMX">
      <div className="BMX-Heading">
        <h1 className="BMX__heading">BMW Rampage: 2021 Highlights</h1>
      </div>
      <div className="BMX-View-Likes">
        <div className="BMX-View">
          <p>By Red Crow</p>
          <img className="BMX-View__img" src={views} alt="view-image" />
        </div>
        <div className="BMX-Like">
          <p>07/11/2021</p>
          <img className="BMX-Like__img" src={likes} alt="like-image" />
        </div>
      </div>

    </div>
  );
}
