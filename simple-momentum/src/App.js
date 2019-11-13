import React from "react";
import Clock from "./components/Clock"
import "./App.css"
function App() {
  return (
    <section class="hero is-fullheight">
      <div class="hero-body backgroundCover">
        <div class="container">
          <h1 class="title has-text-white	has-text-centered is-size-1">리액트 타이머</h1>
          <h2 class="subtitle has-text-white has-text-centered is-size-2">
            <Clock/>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default App;
