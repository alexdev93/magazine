import React from 'react';
import ReadMore from './ReadMore'
import '../styles/PhototWithText.css';

const PhotoWithText = () => {
  const photo = {
    url: 'https://picsum.photos/600/400?image=10',
    title: 'Beautiful Landscape',
  };

  const article = {
    title: 'The Beauty of Nature',
    body: 'Nature is the most beautiful and attractive surrounding around us which make us happy and provide us with natural environment to live healthily. Our nature provides us a variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. We should be grateful to our nature for helping, caring and nurturing us like a mother.'
  };

  return (
    <div className="photo-with-text">
              <div className="photo-section">
                <img src={photo.url} alt={photo.title} className="photo" />
                <h2>{photo.title}</h2>
              </div>
              <div className="text-section">
                <h3>{article.title}</h3>
                <ReadMore text={article.body} maxLength={100} />
              </div>
            </div>
  );
};

export default PhotoWithText;
