import "./Video.scss";
// import { Link } from "react-router-dom";

function Video(props) {

  return (
    // <Link to={"/videos/" + props.id} className="BMX__next-article">
     <div className="BMX__next-article">
      <p className="BMX__next-section-div--details-text"> {props.part},</p>
      <p className="BMX__next-section-div--details-text">{props.tag},</p>
      <p className="BMX__next-section-div--details-text">{props.rack},</p>
      <p className="BMX__next-section-div--details-text">{props.quantity},</p>
      <p className="BMX__next-section-div--details-text">{props.location},</p>
      <p className="BMX__next-section-div--details-text">{props.description} ,</p>
    {/* // </Link> */}
    </div>
  );
}

export default Video;
