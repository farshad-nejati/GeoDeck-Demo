import React from 'react';

const ColorDemo = () => {
  const renderColor = (color, name) => (
    <div style={{ display: 'flex', margin: '4px' }}>
      <div
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: color,
          marginRight: '1rem',
          border: '1px solid #92929240',
        }}
      ></div>
      <span style={{ color: '#929292' }}>{`${name}`}</span>
    </div>
  );

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(33%, 1fr))',
      }}
    >
      {renderColor('#f2ab1f', 'primary-color')}
      {renderColor('#d5d5d5', 'text-color')}
      {renderColor('#929292', 'text-color-secondary')}
      {renderColor('#92929240', 'text-color-secondary-fade')}
      {renderColor('#000014', 'body-background')}
      {renderColor('#292929', 'component-background')}
      {renderColor('#343434', 'image-bg')}
      {renderColor('#1b3062', 'header-background')}
    </div>
  );
};

export default ColorDemo;
