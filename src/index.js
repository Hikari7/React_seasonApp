import React from "react";
import ReactDOM from "react-dom";

//classベースのcomponent(GEO APIを呼び出している訳ではない)
class App extends React.Component {
  render() {
    //remder method
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return <div>Latitude: </div>;
// };

ReactDOM.render(<App />, document.querySelector("#root"));
