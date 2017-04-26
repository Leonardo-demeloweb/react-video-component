import React from 'react';
import { render } from 'react-dom';

import Wrapper from './Wrapper';
import Title from './Title';

const App = () =>
(
  <Wrapper>
    <Title>React first component - a Videoplayer with dropdown menu playlist </Title>
    <iframe width="100%" height="315px" src="https://www.youtube.com/embed/mAf_grWBscw" frameborder="0" allowfullscreen></iframe>

  </Wrapper>

);

render(<App />, document.getElementById('root'));
