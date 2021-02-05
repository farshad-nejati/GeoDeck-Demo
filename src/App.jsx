import React from 'react';
import logo from '@view/logo/logo.svg';
import { DatePicker } from 'antd';
import { Button } from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'



import '@less/style.less';

function App() {
  return (
    <div className="App">
      <DatePicker />
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
