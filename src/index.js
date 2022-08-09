import React from "react";
import ReactDOM from "react-dom";

//classベースのcomponent(GEO APIを呼び出している訳ではない)
class App extends React.Component {
  //State must ne initialized when a component is created
  //だからconstrucrtorメソッドを作る
  constructor(props) {
    super(props); //super: Reactの拡張機能(React.Component)を使うためのお決まり文句みたいなもん

    //THIS IS THE ONLY TIME we do direct assignment
    //to this.state
    this.state = { lat: null, errorMessage: "" };
    //初期化したvalue/keyをstateにassignして初期化する
    //state objectを初期化する時、reasonableな値に初期化する必要があるのでnull
    //現在のところlatはnullだけど、getCurrentPositionを取得したら分かるようになる

    //componentが画面に表示された瞬間(インスタンスを作成した瞬間にユーザーの現在地を取得できるようになる)
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setstate!(React componetを拡張した際にアプリコンポーネントに自動的に付与される機能)
        //情報をupdateしたいときには必ず！setState functionを呼ぶことになる
        //state objectへdirect assignmentすることはしない(this.state.latみたいに。必ずsetStateを使う)
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //React says we have to define render!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
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
