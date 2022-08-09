import React from "react";
import ReactDOM from "react-dom";

//classベースのcomponent(GEO APIを呼び出している訳ではない)
class App extends React.Component {
  //State must ne initialized when a component is created
  //だからconstrucrtorメソッドを作る
  constructor(props) {
    super(props); //Reactの拡張機能を使うためのお決まり文句みたいなもん

    //THIS IS THE ONLY TIME we do direct assignment
    //to this.state
    this.state = { lat: null };
    //初期化したvalue/keyをstateにassignして初期化する
    //state objectを初期化する時、reasonableな値に初期化する必要があるのでnull
    //現在のところlatはnullだけど、getCurrentPositionを取得したら分かるようになる

    //componentが画面に表示された瞬間(インスタンスを作成した瞬間にユーザーの現在地を取得できるようになる)
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setstate!(React componetを拡張した際にアプリコンポーネントに自動的に付与される機能)
        //情報を更新したいときにはsetState functionを呼ぶことになる
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  //React says we have to define render!
  render() {
    //remder method

    return <div>Latitude: {this.state.lat}</div>;
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
