import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={''
      + '.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            This website is adpated from <a href="https://github.com/mldangelo/personal-site">here</a>.
          </p>
        </div>
      </header>
      <p> </p>
    </article>
  </Main>
);

export default Index;
