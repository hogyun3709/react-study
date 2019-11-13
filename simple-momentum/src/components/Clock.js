import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      greeting: ""
    };
  }

  componentDidMount() {
    setInterval(() => this.updateTime(), 1000);
  }
  updateTime() {
    const date = new Date();
    const hour = date.getHours();

    this.setState({
      date
    });
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
        <h1>{this.state.greeting}! </h1>
        <h2>현재 시간은 {this.state.date.toLocaleTimeString("ko-KR")} 입니다</h2>
      </div>
    );
  }
}

export default Clock;
