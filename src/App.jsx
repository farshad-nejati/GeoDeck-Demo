import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";

import '@less/main.less';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
    <Provider store={store}>
      <div className="App"> App</div>
    </Provider>
  );
}

export default App;
