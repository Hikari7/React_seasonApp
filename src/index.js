import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spiner";
import "./style/App.css";

// import "semantic-ui-css/semantic.min.css";

//classベースのcomponent(GEO APIを呼び出している訳ではない)
class App extends React.Component {
  //State must ne initialized when a component is created

  //↓は、constructorのリファクタリング版
  state = { lat: null, errorMessage: "" };

  //だからconstrucrtorメソッドを作る
  // constructor(props) {
  //   super(props); //super: Reactの拡張機能(React.Component)を使うためのお決まり文句みたいなもん

  //   //THIS IS THE ONLY TIME we do direct assignment
  //   //to this.state
  //   this.state = { lat: null, errorMessage: "" };
  //   //初期化したvalue/keyをstateにassignして初期化する
  //   //state objectを初期化する時、reasonableな値に初期化する必要があるのでnull
  //   //現在のところlatはnullだけど、getCurrentPositionを取得したら分かるようになる
  // }

  componentDidMount() {
    //componentが画面に表示された瞬間(インスタンスを作成した瞬間にユーザーの現在地を取得できるようになる)
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
      //we called setstate!(React componetを拡張した際にアプリコンポーネントに自動的に付与される機能)
      //情報をupdateしたいときには必ず！setState functionを呼ぶことになる
      //state objectへdirect assignmentすることはしない(this.state.latみたいに。必ずsetStateを使う)
    );
  }

  //render methodを全て含むfunctionを作る
  renderContent() {
    //1.緯度がどちらにあるかの確認
    //2.それに伴って表示させる季節をここで書く
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
      //took state from one component and pass it as a prop down to the child.
    }

    // return <div>Loading!</div>;
    return <Spinner message="Please accept location request" />;
  }

  //React says we have to define render!
  render() {
    return <div className="border">{this.renderContent()}</div>;
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
