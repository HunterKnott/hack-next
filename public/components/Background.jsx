import React from 'react';

const Background = () => {
  return (
    <div className="bg-cover flex flex-col justify-center w-full h-screen inset-0 bg-center min-w-full min-h-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ca0fac3ecfc9b97e7973d331dffcee35011e99d51d361f3a1e8bb25f35bd760?apiKey=083cff44761149f29de8a214fde171e4&"
        alt="Descriptive alt text for the image"
        className="bg-cover w-full h-auto object-cover inset-0 bg-center min-w-full min-h-full"
      />
    </div>
  );
};

export default Background;