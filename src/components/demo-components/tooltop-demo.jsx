import React from 'react';
import { Tooltip, Button } from 'antd';

const text = <span>prompt text</span>;

const buttonWidth = 70;
const colors = [
  'pink',
  'red',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
  'yellow',
  'orange',
];
const TooltipDemo = () => {
  return (
    <>
      <div className="demo">
        <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
          <Tooltip placement="topLeft" title={text}>
            <Button type="link" >TL</Button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <Button type="link" >Top</Button>
          </Tooltip>
          <Tooltip placement="topRight" title={text}>
            <Button type="link" >TR</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <Tooltip placement="leftTop" title={text}>
            <Button>LT</Button>
          </Tooltip>
          <Tooltip placement="left" title={text}>
            <Button>Left</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" title={text}>
            <Button>LB</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
          <Tooltip placement="rightTop" title={text}>
            <Button>RT</Button>
          </Tooltip>
          <Tooltip placement="right" title={text}>
            <Button>Right</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" title={text}>
            <Button>RB</Button>
          </Tooltip>
        </div>
        <div
          style={{
            marginLeft: buttonWidth,
            clear: 'both',
            whiteSpace: 'nowrap',
          }}
        >
          <Tooltip placement="bottomLeft" title={text}>
            <Button type="primary">BL</Button>
          </Tooltip>
          &nbsp;
          <Tooltip placement="bottom" title={text}>
            <Button type="primary">Bottom</Button>
          </Tooltip>
          &nbsp;
          <Tooltip placement="bottomRight" title={text}>
            <Button type="primary">BR</Button>
          </Tooltip>
          &nbsp;
        </div>
      </div>
      <br />
      <div>
        {colors.map((color) => (
          <Tooltip title="prompt text" color={color} key={color}>
            <Button style={{margin: "4px"}}>{color}</Button>
          </Tooltip>
        ))}
      </div>
    </>
  );
};

export default TooltipDemo;
