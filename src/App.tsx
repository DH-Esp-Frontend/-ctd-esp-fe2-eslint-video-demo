

import Blogs from './components/Blogs';
 import NavBar from './components/NavBar';
  import './styles/index.css'

const App = () => (
  <div className="App">
            <NavBar />
                       <div className="content">
                            <h1>Blog Webb 🌠</h1>
                            <Blogs />
                       </div>
  </div>
);

export default App;
