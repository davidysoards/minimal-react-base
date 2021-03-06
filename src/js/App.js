import React from 'react';

import Example from './components/Example.js';

const App = () => (
  <article>
    <h1>Hello, I’m your app, using the minimal React app base.</h1>
    <p>
      Head over to <a href="//github.com/hankchizljaw/minimal-react-base">the repo</a> to find out more info.
    </p>
    <Example text="Hi, pal 👋" label="Click me" />
  </article>
);

export default App;
