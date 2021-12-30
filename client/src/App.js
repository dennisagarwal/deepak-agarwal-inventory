import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import "./App.scss";
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    this.getVideos();
  }

  // get a collection of videos
  getVideos() {
    axios
      .get(
        "/videos"
      )
      .then((response) => {
        this.setState({
          videos: response.data,
          // activeVideo: response.data[0],
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
  }

  render() {
    return (
      <section>
        <Header />
          <>

                <div className="next-video__heading">
                  <h2 className="next-video__heading--text">Part Number,</h2>
                  <h2 className="next-video__heading--text">Tag Number,</h2>
                  <h2 className="next-video__heading--text">Rack Number,</h2>
                  <h2 className="next-video__heading--text">Quantity,</h2>
                  <h2 className="next-video__heading--text">Location,</h2>
                  <h2 className="next-video__heading--text">Message,</h2>
                </div>
                <section className="next-video__section">
                  {this.state.videos &&
                    this.state.videos .map((video) => {
                        return (
                          <>
                            <Video
                              key={video.id}
                              id={video.id}
                             part={video.part}
                              tag={video.tag}
                              rack={video.rack}
                              quantity={video.quantity}
                              location={video.location}
                              description={video.description}
                            />
                          </>
                        );
                      })}
            </section>
          </>
      </section>
    );
  }
}

export default App;
