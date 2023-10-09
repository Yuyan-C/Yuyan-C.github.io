import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Misc = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/misc.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  // const count = markdown.split(/\s+/)
  //   .map((s) => s.replace(/\W/g, ''))
  //   .filter((s) => s.length).length;

  return (
    <Main
      title="About"
      description="Learn about Yuyan"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2><Link to="/misc">Misc</Link></h2>
            {/* <p>(in about {count} words)</p> */}
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Misc;
