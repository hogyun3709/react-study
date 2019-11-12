import React from 'react';
import faker from "faker";

/* props 는 위에서 아래로 데이터가 흐른다*/
const CommentBox = (props) => {
  return (
    <div>
      <div className="commentBox">
        <div className="flexBox">
          <img alt="오뭐먹?" src={faker.image.avatar()}/>
          <div className="flexBox column">
            <div>
              {props.name}
            </div>
            <div>
              {props.time}
            </div>
            <div>
              {props.comment}
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentBox
