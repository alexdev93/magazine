import React, { useEffect, useState, useRef } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Chip, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getArticles } from '../services/api.service';



const Article = () => {
  let imageUrl = "https://cdn.jsdelivr.net/gh/alexdev93/kegeberew-photo-gallery";
  const [articles, setArticles] = useState([

    {
      "id": "e4c0",
      "title": "በጥፋተኝነት ላይ ያልተመሠረተ በአዋጁ ተካቷል አዋጁ የሚፀድቅ ከሆነ 10 ዓመት ወደኃላ ተመልሶ ተፈጻሚ",
      "content": "for registering new customers on the kegeberew real state to orive iut asset for oire seleves anfd to builed for or lifes",
      "image": "home2.jpg",
      "author": "someone"
    },
    {
      "id": "c5de",
      "title": "በጥፋተኝነት ላይ ያልተመሠረተ ንብረት የመውረስ ድንጋጌም በአዋጁ ተካቷል አዋጁ የሚፀድቅ ከሆነ 10 ዓመት  ",
      "content": "በጥፋተኝነት ላይ ያልተመሠረተ ንብረት የመውረስ ድንጋጌም በአዋጁ ተካቷል አዋጁ የሚፀድቅ ከሆነ 10 ዓመት ወደኃላ ተመልሶ ተፈጻሚ ይሆናል ከውጭ በተላከ ገንዘብ ሀብት አፍርቶ የተላከበትን ደረሰኝ ያላቀረበ ሰው ወይም ሊታወቅ ከሚችል ገቢው በላይ ሀብት አፍርቶ ምንጩ ሕጋዊ መሆኑን ማረጋገጥ ያልቻለ ሰው፣ ንብረት በመንግሥት",
      "image": "home2.jpg",
      "author": "someone fir dikel"
    },
    {
      "id": "596b",
      "title": "Update your App.js to include the Header",
      "content": "በጥፋተኝነት ላይ ያልተመሠረተ ንብረት የመውረስ ድንጋጌም በአዋጁ ተካቷል አዋጁ የሚፀድቅ ከሆነ 10 ዓመት ወደኃላ ተመልሶ ተፈጻሚ ይሆናል ከውጭ በተላከ ገንዘብ ሀብት አፍርቶ የተላከበትን ደረሰኝ ያላቀረበ ሰው ወይም ሊታወቅ ከሚችል ገቢው በላይ ሀብት አፍርቶ ምንጩ ሕጋዊ መሆኑን ማረጋገጥ ያልቻለ ሰው፣ ንብረት በመንግሥት",
      "image": "home3.jpg",
      "author": "sd"
    },
    {
      "id": "8ec5",
      "title": "በጥፋተኝነት ላይ ያልተመሠረተ ንብረት የመውረስ ድንጋጌም በአዋጁ ተካቷል አዋጁ የሚፀድቅ ከሆነ 10 ዓመት ወደኃላ ተመልሶ ተፈጻሚ",
      "content": "dfg sfdhg dfgh dfg hdfgh fg",
      "image": "home2.jpg",
      "author": "sdgf sdf"
    }
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    async function fetchArticles() {
      // const articlesData = await getArticles();
      setArticles(articles);
    }
    fetchArticles();
  }, []);

  // Function to scroll cards to the left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
    }
  };

  // Function to scroll cards to the right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; // Adjust scroll distance as needed
    }
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Grid container spacing={2} maxWidth="xl" style={{ width: '100%', padding: 0, margin: 0, overflowX: 'hidden' }}>
        {articles.length > 0 && (
          <Grid item xs={12}>
            <Card
              sx={{
                width: '90%',
                marginBottom: 2,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                border: 'none',
                borderRadius: '0',
                boxShadow: 'none',
                position: 'relative', // Added to ensure Chip is positioned correctly
              }}
            >
              <Chip
                label="Latest News"
                color="primary"
                sx={{
                  position: 'absolute',
                  zIndex: 1,
                  margin: '10px',
                }}
              />
              <div style={{ position: 'relative', width: '100%' }}>
                <CardMedia
                  component="img"
                  height="200" // Custom height for the main article image
                  image={`${imageUrl}/${articles[0].image}`}
                  alt={articles[0].title}
                  sx={{ minWidth: 300, maxWidth: 350 }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    zIndex: 2,
                  }}
                />
              </div>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {articles[0].title.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {articles[0].content.substring(0, 150)}... {/* Display first 150 characters of content */}
                  <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Read More
                  </a>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {articles[0].date && new Date(articles[0].date).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
        <Grid item xs={12} style={{ position: 'relative' }}>
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              minHeight: '300px', // Fixed height for cards container
              position: 'relative', // Ensure relative positioning for absolute elements
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE and Edge
            }}
            // Hide scrollbar in Webkit-based browsers
            className="scrollable-container"
          >
            {articles.slice(1).map((article, index) => (
              <Card
                key={article.id}
                sx={{
                  minWidth: 300, // Adjust card width as needed
                  maxWidth: 300, // Adjust card width as needed
                  flex: '0 0 auto',
                  marginRight: 2, // Adjust spacing between cards
                  minHeight: '100%',
                  border: 'none',
                  borderRadius: '0',
                  boxShadow: 'none'
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '140px' }}>
                  <CardMedia
                    component="img"
                    height="180" // Custom height for the rest of the article images
                    image={`${imageUrl}/${article.image}`}
                    alt={article.title}
                    sx={{ width: '100%' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    zIndex: 2,
                  }} />
                </div>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    {article.title.toUpperCase()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {article.content.substring(0, 150)}... {/* Display first 150 characters of content */}
                    <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Read More</a>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {article.date && new Date(article.date).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Navigation icons */}
          <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
            <IconButton aria-label="scroll left" onClick={scrollLeft}>
              <ArrowBackIosIcon />
            </IconButton>
          </div>
          <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
            <IconButton aria-label="scroll right" onClick={scrollRight}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      <style jsx>{`
        .scrollable-container::-webkit-scrollbar {
          display: none; // Hide scrollbar in Webkit-based browsers
        }
      `}</style>
    </div>
  );
};

export default Article;
