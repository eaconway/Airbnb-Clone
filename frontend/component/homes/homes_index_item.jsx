import React from 'react';

export default ({home}) => {
  return (
    <div className={'homes-index-item'}>
      <img className={'homes-index-image'} src={home.imageUrl} />
      <div className={'homes-index-info'}>

      </div>
    </div>
  )
};
