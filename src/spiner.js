import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//Spinnerを表示するときのdefaultのメッセージ
//propsのデフォルト値や代替値を設定したい場合は、defailtPropsを使うとよい
Spinner.defaultProps = {
  message: "Loadig...",
};

export default Spinner;
