import React from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero() {
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the Book written by the Author shown</p>
    </div>
  </div>);
}

function Book({ title, onClick , highlight}) {
  function HighlightToBgColor(highlight) {
    const mapping = {
      'none' : '',
      'correct' : 'green',
      'wrong' : 'red'
    }
    return mapping[highlight];
  }
  return (<div className="answer" style={{ backgroundColor: HighlightToBgColor(highlight) }} onClick={() => {onClick(title)}}>
    <h4>{title}</h4>
  </div>
  );
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books:PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
}

function Turn({ author, books, highlight, onAnswerSelected }) {
  
  return (<div className="row turn" style={{ backgroundColor: 'white' }}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author" />
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title} highlight={highlight} onClick={onAnswerSelected}/>)}
    </div>
  </div>
  );
}

function Continue() {
  return (<div />);
}

function Footer() {
  return (<div className="row" id="footer">
    <div className="col-12">
      <p className="tex-muted credit">All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are in public domain</p>
    </div>
  </div>
  );
}

function AuthorQuiz({ turnData, highlight, onAnswerSelected }) {
  return (<div className="container-fluid">
    <Hero />
    <Turn{...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
    <Continue />
    <Footer />
  </div>

    /* <img src={logo} className="App-logo" alt="logo" /> */

  );
}

export default AuthorQuiz;
