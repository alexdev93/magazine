import React, {useState, useEffect} from 'react';
import { Home } from './pages/Home';
import Layout from './components/Layout';
import Loader from './components/Loader';

function App() {

  // const [photos, setPhotos] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Replace this URL with your actual GitHub CDN link
  //   const url = 'https://cdn.jsdelivr.net/gh/alexdev93/kegeberew-photo-gallery/photos.json';
    
  //   fetch(url)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log('====================================');
  //       console.log(data);
  //       console.log('====================================');
  //       setPhotos(data.photo-url);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching photos:', error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
