import "./SeasonDisplay.css";
import React from "react";

const SeasonDisplay = (props) => {
  // console.log(props.lat); seasonDisplayがちゃんとcurrent latが伝えられているか確認
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //{text, iconName}
  // const text =
  //   season === "winter" ? "Burr, it is chilly" : "Lets hit the beach";
  // const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr it is cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  //sesonDisplay用に仮の引数を渡しておく
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter"; //北半球にいるのであれば"summer"を返して、そうでなければ"winnter"を返す
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default SeasonDisplay;
