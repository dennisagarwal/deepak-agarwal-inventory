import "../styles/Video.scss";



function Video(props) {
  console.log("video props", props);
  return (

    <article className="BMX__next-article"
      onClick={() => {
        props.handleVideoChange(props.id);
      }}
    >
<div className="BMX__next-section" >
<div className="BMX__next-section-div">
      <img className="BMX__next-section-div--img" src={props.image} alt={props.name} />
      </div>
      <div className="BMX__next-section-div--details">
      <h2 className="BMX__next-section-div--details-heading">{props.title}</h2>
      <p className="BMX__next-section-div--details-text">{props.channel}</p>
      </div>
      </div>
      <p>{props.views}</p>
      <p>{props.likes}</p>
      <p>{props.timestamp}</p>
    </article>
  );
}

export default Video;
