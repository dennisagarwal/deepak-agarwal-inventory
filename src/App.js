import Header from "./components/Header";
import Comment from "./components/Comment";
import Video from "./components/Video";
import "./styles/App.scss";
import videoData from "./assets/data/videoDetails.json";
import React from "react";
import views from "../src/assets/icons/views.svg";
import likes from "../src/assets/icons/likes.svg";
import mohanImage from "../src/assets/images/Mohan-muruge.jpg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage";

// import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class App extends React.Component {
  state = {
    // videos: videoData,
    // activeVideo: videoData[0],
    videos: [],
    activeVideo: {},
  };

  componentDidMount() {
    console.log(this.props);
    this.getVideos();
  }

  // get a collection of album
  getVideos() {
    axios
      .get("https://project-2-api.herokuapp.com/videos")
      .then((response) => {
        this.setState({
          videos: response.data,
          activeVideo: response.data[0],
        });
      })
      .catch((error) => console.log(error));
  }

  // get a single video by its ID
  getVideosById() {
    axios
      .get("https://project-2-api.herokuapp.com/videos/${id}")
      .then((response) => {
        this.setState({
          activeVideo: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (id) {
      if (prevState.activeAlbum.id !== id) {
        this.getAVideoById(id);
        // const foundAlbum = this.state.albums.find((album) => album.id === id);
        // console.log(foundAlbum);
        // this.setState({
        //   activeAlbum: foundAlbum
        // });
      }
    }
  }

  // handleVideoChange = (id) => {
  //   console.log("handleVideoChange", id);
  //   const foundVideo = this.state.videos.find((video) => {
  //     return video.id === id;
  //   });
  //   this.setState({
  //     //refers to clicked video in the next video
  //     activeVideo: foundVideo,
  //   });
  // };

  render() {
    const newDate1 = new Date(this.state.activeVideo.timestamp);
    const { activeVideo } = this.state;
    console.log(activeVideo);
    return (
      <section>
        <Header />
        <div className="BMX__video--image">
          <video
            className="BMX__video--image-element"
            poster={this.state.activeVideo.image}
            controls
          ></video>
        </div>
        <section className="page">
          <div className="page-left">
            <div className="BMX__video--heading">
              <p className="BMX__video--heading-text">
                {this.state.activeVideo.title}
              </p>
            </div>
            <div className="BMX__video--ctvl">
              <div className="BMX__video--channel-timestamp">
                <p className="BMX__video--channel-timestamp-text1">
                  {"By " + this.state.activeVideo.channel}
                </p>
                <p className="BMX__video--channel-timestamp-text2">
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
                const newDate2 = new Date(comment.timestamp);
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
                        <p className="BMX__video--comment-name-timestamp-text1">
                          {comment.name}
                        </p>
                        <p className="BMX__video--comment-name-timestamp-text2">
                          {" "}
                          {newDate2.toLocaleDateString()}
                        </p>
                      </div>
                      <div className="BMX__video--comment-active">
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="page-right">
            <div className="next-video__heading">
              <h2>Next Videos</h2>
            </div>
            <section className="next-video__section">
              {this.state.videos
                .filter((video) => video.id !== this.state.activeVideo.id)
                .map((video) => {
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
          </div>
        </section>
      </section>
    );

    //     <BrowserRouter>
    // <Header />
    //       {/* sprint2 */}
    //       <Switch>
    //         <Route path="/UploadPage" exact component={UploadPage} />
    //       </Switch>
    //     </BrowserRouter>
  }
}

export default App;
