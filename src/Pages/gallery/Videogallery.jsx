import React from 'react';

const Videogallery = () => {
  const Media = [
    // { type: 'image', src: 'photo2.png' },
    // { type: 'image', src: 'photo3.png' },
    { type: 'video', src: 'video1.mp4' },
    // { type: 'image', src: 'photo5.png' },
    { type: 'video', src: 'video2.mp4' },
    // { type: 'image', src: 'photo7.png' },
    // { type: 'image', src: 'photo8.png' },
    { type: 'video', src: 'video3.mp4' },
  ];

  return (
    <div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {Media.map((media, index) => (
            <div key={index} className="w-full">
              <div className="h-[45vh] w-[25vw] max-md:w-full flex-wrap flex max-md:flex-col bg-white border-2 rounded-2xl overflow-hidden">
                <div className="h-[35vh] w-[25vw] max-md:w-full bg-gray-200 rounded-b-[2rem]">
                  {media.type === 'image' ? (
                    <img
                      src={media.src}
                      alt={`Media ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={media.src}
                      controls
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h1 className="py-5 px-5">Headline</h1>
              </div>
            </div>
          ))}
        </div>

        <div className="flex py-5 justify-center">
          <button className="px-6 py-3 rounded-md text-[#6c62ee] shadow-lg">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videogallery;
