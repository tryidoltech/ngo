import React from 'react';
import MediaCards from '../../component/MediaCards';

const Media = () => {
  const mediaData = [1, 2, 3, 4, 5]; // Example data for rendering MediaCards

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {mediaData.map((item, index) => (
          <MediaCards key={index} />
        ))}
      </div>
    </div>
  );
};

export default Media;
