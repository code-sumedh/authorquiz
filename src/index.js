import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
  {
    name: 'Sumedh',
    imageUrl: 'images/IMG_3320.JPG',
    imageSource: 'ajj',
    books: ['Acd']
  }, {
    name: 'Sachin Tendulkar',
    imageUrl: 'images/IMG_3320.JPG',
    imageSource: 'dsh',
    books: ['kj', 'hb']
  }, {
    name: 'Kapil Sharma',
    imageUrl: 'images/IMG_3320.JPG',
    imageSource: 'jj',
    books: ['kkjkjkj']
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
      return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);
  return {
    books: fourRandomBooks,
    author: authors.find((author) => author.books.some((title)=> title === answer))
  }
}

const state = {
  turnData: getTurnData(authors),
  highlight: ''
}

function onAnswerSelected(answer) {
  const correct = state.turnData.author.books.some((book) => book === answer);
  state.highlight = correct ? 'correct': 'wrong';
  render();
}

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <AuthorQuiz{...state} onAnswerSelected={onAnswerSelected} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
