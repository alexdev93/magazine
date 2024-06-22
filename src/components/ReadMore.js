import React, { useState } from 'react';
import '../styles/ReadMore.css'; // Ensure you have the styles for the component

const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = 'Nature is the most beautiful and attractive surrounding around us which make us happy and provide us with natural environment to live healthily. Our nature provides us a variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. We should be grateful to our nature for helping, caring and nurturing us like a mother.';
  const maxLength = 100;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p className="read-more-text">
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      <span onClick={toggleReadMore} className="read-more-link">
        {isExpanded ? ' Show Less' : ' Read More'}
      </span>
    </p>
  );
};

export default ReadMore;
