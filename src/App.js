// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout'; // Import Layout component
// import Home from './pages/Home';
// import Article from './pages/Article';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import CreateArticle from './pages/CreateArticle';

// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/articles" element={<Article />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/create-article" element={<CreateArticle />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { Home } from './pages/Home';
import FullWidthWrapper from './components/FullWidthWrapper';
import HorizontalAd from './components/AdPlaceholders ';

function App() {
  return (
    <FullWidthWrapper>
      <HorizontalAd />
      <Home />
      <HorizontalAd />
    </FullWidthWrapper>
  );
}

export default App;




//  {/* <Router>
//         <Layout>
//           <Routes>
//             <Route exact path="/">
//               <Notes />
//             </Route>
//             {/* <Route path="/create">
//               <Create />
//             </Route> */}
//             </Routes>
//             </Layout >
//           </Router > * /}