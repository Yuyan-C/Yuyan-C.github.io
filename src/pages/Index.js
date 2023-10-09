import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Lorem ipsum dolor sit amet'
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            I created my website based on this <a href="https://github.com/mldangelo/personal-site">template</a>.
          </p>
        </div>
      </header>
      <p>My profile picture is  <a href="https://www.parcjeandrapeau.com/en/biosphere-environment-museum-montreal/">Biosphere</a>, an environment museum and a geodesic dome in Montreal, QC. </p>

    </article>
  </Main>
);

export default Index;
