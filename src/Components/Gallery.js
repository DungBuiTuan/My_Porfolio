import React from 'react';
import data from '../Data/data';
import GalleryCard from './GalleryCard';

function Gallery() {
  return (
    <div className="Gallery"  id='gallery'>
    <h1>Gallery</h1>
    <div className='gallery'>
      {data.map((gallery, index) => {
        return (
            <GalleryCard key={index} {...gallery} />
        );
      })}
    </div>
    </div>
  );
};

export default Gallery;
