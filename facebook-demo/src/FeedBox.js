import React from 'react';
const FeedBox = (props) => {
  return (
    <div>
      {props.children}
      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon"></i>
          Like
        </div>
        <a class="ui basic red left pointing label">
          1,048
        </a>
      </div>
  </div>)
}

export default FeedBox
