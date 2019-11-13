import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      greeting: "",
      timsSeconds: "",
      meridiem: ''
    };
  }

  componentDidMount() {
    this.currentTime = setInterval(() => this.updateTime(), 1000);
  }
  updateTime() {
    const date = new Date();
    let hour = date.getHours();
    if(hour > 12){
      hour = hour - 12
    }
    const meridiemHour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    /* For high UX performance, add starting '0' digit under 10 */
    const time = `${hour > 9 ? hour : `0${hour}`}:${
      minutes > 9 ? minutes : `0${minutes}`
    }`;

    const timeSeconds = `${seconds > 9 ? seconds : `0${seconds}`}`;
    this.setState({
      time,
      timeSeconds
    });
    /* meridiem 설정하기 */
    if (meridiemHour < 12){
      this.setState({
        meridiem: 'AM'
      })
    } else {
      this.setState({
        meridiem: 'PM'
      })
    }
    // 시간대별 인사 문구 - 6:00 부터 - 11:59 까지 - 아침인사
    if (hour >= 6 && hour < 12) {
      this.setState({
        greeting: "Good Morning"
      });
      // 시간대별 인사 문구 - 12:00 부터 - 17:59 까지 - 오후인사
    } else if (hour >= 12 && hour < 18) {
      this.setState({
        greeting: "Good Afternoon"
      });
      // 시간대별 인사문구 - 그 이외 시간 18:00 부터 - 05:59 까지
    } else {
      this.setState({
        greeting: "Good Evening"
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, world!, {this.state.greeting}</h1>
        <h2>
          It is {this.state.time}:{this.state.timeSeconds} {this.state.meridiem}.
        </h2>
      </div>
    );
  }
}

export default Clock;
