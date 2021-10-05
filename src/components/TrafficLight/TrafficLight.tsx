import React, { useState } from "react";
import "./TrafficLight.css";

type light = "red" | "amber" | "green";

type TrafficLightProps = {
  startLight: light;
};

const TrafficLight = ({ startLight = "red" }: TrafficLightProps) => {
  const [currentLight, setLight] = useState<light>(startLight);

  return (
    <section className="traffic-lights">
      <div className="outer">
        <div className="inner">
          <div className="lights">
            <div
              className={`light stop ${currentLight === "red" ? "on" : ""}`}
            ></div>
            <div
              className={`light caution ${
                currentLight === "amber" ? "on" : ""
              }`}
            ></div>
            <div
              className={`light go ${currentLight === "green" ? "on" : ""}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="controls">
        <button className="stop button" onClick={() => setLight("red")}>Red</button>
        <button className="caution button" onClick={() => setLight("amber")}>Amber</button>
        <button className="go button" onClick={() => setLight("green")}>Green</button>
      </div>
    </section>
  );
};

export default TrafficLight;
