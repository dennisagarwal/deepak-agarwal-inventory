import Header from "./components/Header";
import Comment from "./components/Comment";
import Video from "./components/Video";
import "./styles/App.scss";
import { render } from "sass";
import videoData from "./assets/data/videoDetails.json";
import React from "react";
import views from "../src/assets/icons/views.svg";
import likes from "../src/assets/icons/likes.svg";
import mohanImage from "../src/assets/images/Mohan-muruge.jpg";

class App extends React.Component {
  state = {
    videos: videoData,
    activeVideo: videoData[0],
  };

  handleVideoChange = (id) => {
    console.log("handleVideoChange", id);
    const foundVideo = this.state.videos.find((video) => {
      return video.id === id;
    });
    this.setState({
      activeVideo: foundVideo,
    });
  };

  render() {
    const newDate1 = new Date(this.state.activeVideo.timestamp);
    const { activeVideo } = this.state;
    console.log(activeVideo);
    return (
      <section>
        <Header />
        <video
          className="BMX__video--image"
          poster={this.state.activeVideo.image}
          controls
        ></video>

        <div className="BMX__video--heading">
          <p className="BMX__video--heading-text">
            {this.state.activeVideo.title}
          </p>
        </div>
        <div className="BMX__video--ctvl">
          <div className="BMX__video--channel-timestamp">
            <p className="BMX__video--channel-timestamp-text">
              {this.state.activeVideo.channel}
            </p>
            <p className="BMX__video--channel-timestamp-text">
              {newDate1.toLocaleDateString()}
            </p>
          </div>
          <div className="BMX__video--view-like">
            <div className="BMX__video--view">
              <img
                className="BMX__video--view-img"
                src={views}
                alt="view-image"
              />
              <p className="BMX__video--view-text">
                {this.state.activeVideo.views}
              </p>
            </div>
            <div className="BMX__video--like">
              <img
                className="BMX__video--like-img"
                src={likes}
                alt="view-image"
              />
              <p className="BMX__video--like-text">
                {this.state.activeVideo.likes}
              </p>
            </div>
          </div>
        </div>
        <div className="BMX__video--desc">
          <p className="BMX__video--desc-text">
            {this.state.activeVideo.description}
          </p>
        </div>
        <Comment />
        <div className="BMX__video--comment">
          {/* <div className="BMX__video--comment-heading">
            <h2 className="BMX__video--comment-heading-text">3 Comments</h2>
          </div> */}
          {this.state.activeVideo.comments.map((comment) => {
            return (
              <div className="BMX__video--comment-user" key={comment.id}>
                <div className="BMX__video--comment-img">
                  <img
                    className="BMX__video--comment-img-stamp"
                    src={mohanImage}
                    alt="mohan-image"
                  />
                </div>
                <div className="BMX__video--comment-name-timestamp-active">
                  <div className="BMX__video--comment-name-timestamp">
                    <p>{comment.name}</p>

                    <p>{comment.timestamp}</p>
                  </div>
                  <div className="BMX__video--comment-active">
                    <p>{comment.comment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="next-video__heading">
        <h2 className="next-video__heading--text">Next Videos</h2>
        </div>
        <section className="next-video__section">
          {this.state.videos.map((video) => {
            return (
              <Video
                key={video.id}
                id={video.id}
                title={video.title}
                image={video.image}
                channel={video.channel}
                handleVideoChange={this.handleVideoChange}
              />
            );
          })}
        </section>
      </section>
    );
  }
}

export default App;
