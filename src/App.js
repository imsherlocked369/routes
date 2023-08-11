import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import your CSS file for styling
import page1Animation from './page1-img.jpg'; // Update the path to the correct image location


const Home = () => (
  <div className="page">
    <h1 className="page-title">Welcome to my Home Page</h1>


    <div className="flex-container">
      <Link to="/about" className="back-link">
      About me
      </Link>
      <Link to="/interest" className="back-link">
      Interests
      </Link>
      <Link to="/project" className="back-link">
      Projects
      </Link>
      <Link to="/achievement" className="back-link">
        Achievements
      </Link>
    </div>
  </div>
);

const Page1 = () => (
  <div>
    <h1>About me:</h1>
    <div className="gif-container">

<img src={page1Animation} alt='Page3' className='gif-container img'/>

</div>
    <h2>Sujith S</h2>

    <p>An Undergraduate Student pursuing majort in Artificial Intelligence and DataScience .</p>
    <div className="flex-container">
      <Link to="/" className="back-link">
        Back to Home
      </Link>
      <Link to="/interest" className="back-link">
      Interests
      </Link>
      <Link to="/project" className="back-link">Projects</Link>
      <Link to="/achievement" className="back-link">Achievements</Link>

    </div>
  </div>
);

const Page2 = () => (
  <div>
    <h1>Welcome to Page 2</h1>

    <h2>Interests:</h2>
    <p></p>
    <ul>
    <li>Coding</li>
    <li>Cooking</li> 
    <li>Options Trading</li> 
    <li>Football</li> 
    </ul>

    <div className="flex-container">
      <Link to="/" className="back-link">
        Back to Home
      </Link>
      <Link to="/about" className="back-link">
        About me
      </Link>
      <Link to="/project" className="back-link">Projects</Link>
      <Link to="/achievement"className="back-link">Achievements</Link>

    </div>
  </div>
);

const Page3 = () => (
  <div>
    <h1>Welcome to Page 3</h1>
    <h2>Projects: </h2>
    <p></p>
    <ol>
      <li>Self Powered Posture Correctors.</li>
      <li>Developed a safer protocol for Blockchain Technology.</li>
    </ol>
    <div className="flex-container">
      <Link to="/" className="back-link">
        Back to Home
      </Link>
      <Link to="/about" className="back-link">About me</Link>

      <Link to="/interest" className="back-link">
      Interests
      </Link>
      <Link to="/achievement" className="back-link">Achievements</Link>

    </div>
  </div>
);

const Page4 = () => (
  <div>
    <h1>Achievements: </h1>

    <ol>
      <li>State Level Football Player.</li>
      <li>Got selected in U16 Chennain FC Squad.</li>
    </ol>

    <div className="flex-container">
      <Link to="/" className="back-link">
        Back to Home
      </Link>
      <Link to="/about" className="back-link">About me</Link>

      <Link to="/interest" className="back-link">
      Interests
      </Link>
      <Link to="/project" className="back-link">Projects</Link>

    </div>
  </div>
);

function App() {
  return (
    <Router>
  
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Page1 />} />
            <Route path="/interest" element={<Page2 />} />
            <Route path="/project" element={<Page3 />} />
            <Route path="/achievement" element={<Page4 />} /> {/* New route for Page 4 */}
          </Routes>
        </div>
    </Router>
  );
}


export default App;
