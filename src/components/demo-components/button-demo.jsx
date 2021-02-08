import React from 'react';
import { Button } from 'antd';

const ButtonDemo = () => (
  <>
    <Button style={{ margin: '8px' }} type="primary">
      primary
    </Button>
    <Button style={{ margin: '8px' }} type="link">
      link
    </Button>
    <Button style={{ margin: '8px' }} type="text">
      text
    </Button>
    <Button style={{ margin: '8px' }} type="dashed">
      dashed
    </Button>
    <Button style={{ margin: '8px' }} type="ghost">
      ghost
    </Button>
    <Button style={{ margin: '8px' }} disabled>
      disable
    </Button>
    <Button style={{ margin: '8px' }} type="default">
      default
    </Button>
  </>
);

export default ButtonDemo;
