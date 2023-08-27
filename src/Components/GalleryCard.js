import React from 'react';

function GalleryCard({ name ,image }) {
  return (
                <div className='card'>
                    <img
                        src={image}
                        alt={name}
                        style={{width:'100%'}}
                    />
                    <figcaption>
                        <p>{name}</p>
                    </figcaption>
                </div>
  );
};

export default GalleryCard;
