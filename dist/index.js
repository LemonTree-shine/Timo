function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useContext } from "react";
import _lodash from 'lodash';
const context = /*#__PURE__*/React.createContext(null);

function TiMo(props) {
  let globaldata = props.globaldata;

  if (props.cache && localStorage.getItem('timo_global_data')) {
    try {
      globaldata = JSON.parse(localStorage.getItem('timo_global_data'));
    } catch (e) {
      globaldata = props.globaldata;
    }
  }

  const [data, setData] = useState(globaldata);

  function dispatch(action, redurceData = {}) {
    let globalData = props.redurcer(action, redurceData, data); //是否开启数据缓存

    if (props.cache) {
      localStorage.setItem('timo_global_data', JSON.stringify(globalData));
    }

    setData(_lodash.cloneDeep(globalData));
  }

  console.log(props);
  return /*#__PURE__*/React.createElement(context.Provider, {
    value: { ...data,
      dispatch: dispatch
    }
  }, props.children);
} //创建Timo


export function createTimo(globaldata = {}, redurcer = () => {}) {
  return function (props) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TiMo, _extends({}, props, {
      globaldata: globaldata,
      redurcer: redurcer
    })));
  };
}
export function useTimo() {
  return useContext(context);
}
export default {
  useTimo,
  createTimo
};