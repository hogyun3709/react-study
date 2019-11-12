import React from 'react';
import './App.css';
import faker from "faker";

import CommentBox from './CommentBox'
import FeedBox from './FeedBox'

function App() {
  return (
    <div>
      <div className="ui container">
        <FeedBox>
          <CommentBox
            name="오늘 뭐먹지"
            time="07:47"
            comment="react-study"
            />
        </FeedBox>
        <FeedBox>
          <CommentBox
            name="오늘 뭐먹지"
            time="07:47"
            comment="react-study"
            />
        </FeedBox>
        <FeedBox>
          <CommentBox
            name="오늘 뭐먹지"
            time="07:47"
            comment="react-study"
            />
        </FeedBox>
      </div>
    </div>
    );
}
/*
  프로젝트 방향
  1. Css frameworks,
  2. demo or exmaple, CreatReaUpdateDelete
  3. 최소한의 기능구현하려는 목록


*/
/*
  숙제
  타이머 만들기
  컴포넌트화 시키고
  props 사용해서
  time 을 제공해주는 (현재시간 javascript api 또는 library)
*/

export default App;
