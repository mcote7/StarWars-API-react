import React, { useState } from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import SearchForm from './components/SearchForm';
import SearchDisplay from './components/SearchDisplay';

function App() {
  const [searchResult, setSearchResult] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  return (

    <div className="App">

      <div className="linkswrapper">
        <Link to="/" className="mylinks">Home</Link>
      </div>

        <div className="titlewrapper">
            <div className="title" style={{marginLeft: "24px"}}>STAR</div>
              <div className="subtitlewrapper">
                <p className="subtitle">&nbsp;&bull;A NEW SEARCH APP&bull;</p>
              </div>
            <div className="title">WARS</div>
        </div>

      <Router>
        <SearchForm path="/" searchResult={searchResult} setSearchResult={setSearchResult} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
        <SearchDisplay path="/:option/:id" searchResult={searchResult} errorMessage={errorMessage}/>
      </Router>

      <br/><br/><br/>
      <br/><br/><br/>
      <div className="footer">
        <p className="footnote">&bull; may the force be with you &bull;</p>
        <p className="myname">&copy; 2020 &nbsp;&nbsp;  michael cote</p>
      </div>
    </div>
  );
}

export default App;