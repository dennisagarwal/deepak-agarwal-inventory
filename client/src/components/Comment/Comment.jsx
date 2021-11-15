import "./Comment.scss";
import mohanImage from "../../assets/images/Mohan-muruge.jpg";
import Btn from "../Button/Btn";
import addComment from "../../assets/icons/add_comment.svg";
// let i = 0;
export default function Comment(props) {
  return (
    <div className="comment">
      <div className="comment-heading">
{/*
if ({props.id==="76ca28c0-7dea-4553-887f-8e5129a80fc3"}){
  i===2
}else{
  i===3
} */}
        <h2 className="comment-heading__text">3 Comments</h2>
      </div>
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
            <div className="comment__textarea-subtext">
              <h3 className="comment__textarea__subtext">
                Join The Conversation
              </h3>
              <textarea
                className="comment__textarea-element"
                rows="8"
                cols="50"
                placeholder="Add a new comment"
              />
            </div>
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
