import React from "react";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const DemoTab = () => (
    <div style={{maxWidth: "32vw"}}>
          <Tabs defaultActiveKey="1" onChange={callback}>
          {[...Array.from({ length: 15 }, (v, i) => i)].map(i => (
            <TabPane tab={`Tab-${i}`} key={i} disabled={i === 3 || i === 12}>
              Content of tab {i+1}
            </TabPane>
          ))}
  </Tabs>
  </div>
);

export default DemoTab;