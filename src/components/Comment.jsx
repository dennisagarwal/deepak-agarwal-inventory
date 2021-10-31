import "../styles/Comment.scss";
import mohanImage from "../assets/images/Mohan-muruge.jpg";
import Btn from "./Btn";
import addComment from ".././assets/icons/add_comment.svg";

export default function Comment() {
  return (
    <div className="comment">
      <div className="comment-heading">
        <h2 className="comment-heading__text">3 Comments</h2>
      </div>
      {/* <div className="comment-subheading">
        <h3 className="comment-subheading__subtext">Join The Conversation</h3>
      </div> */}
      <div className="comment__img-textarea-btn">

        <div className="comment__img-textarea">
          <div className="comment__img">
            <img
              className="comment__img--mohan"
              src={mohanImage}
              alt="mohan-image"
            />
          </div>
          <div className="comment__textarea">
          <h3 className="comment__textarea__subtext">Join The Conversation</h3>

            <textarea
              className="comment__textarea-element"
              rows="8"
              cols="50"
              placeholder="Add a new comment"
            />
            <div className="Btn__addComment">
              <img
                className="Btn__addComment--img"
                src={addComment}
                alt="addComment-image"
              />
              <Btn text="COMMENT" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
