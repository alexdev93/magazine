import React, { useState } from 'react';
import { Typography } from '@mui/material';
import '../styles/ReadMore.css';

const ReadMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Typography variant="body2" color="textSecondary" className="read-more-text" component="p" gutterBottom>
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      <span onClick={toggleReadMore} className="read-more-link">
        {isExpanded ? ' Show Less' : ' Read More'}
      </span>
    </Typography>
  );
};

export default ReadMore;
