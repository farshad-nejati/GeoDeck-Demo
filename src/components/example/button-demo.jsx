import React from 'react';
import { Button } from 'antd';

const ButtonDemo = () => (
  <>
    <Button style={{ margin: '0 4px' }} type="primary">
      primary
    </Button>
    <Button style={{ margin: '0 4px' }} type="link">
      link
    </Button>
    <Button style={{ margin: '0 4px' }} type="text">
      text
    </Button>
    <Button style={{ margin: '0 4px' }} type="dashed">
      dashed
    </Button>
    <Button style={{ margin: '0 4px' }} type="ghost">
      ghost
    </Button>
    <Button style={{ margin: '0 4px' }} disabled>
      disable
    </Button>
    <Button style={{ margin: '0 4px' }} type="default">
      default
    </Button>
  </>
);

export default ButtonDemo;
