import React from 'react';
import './App.scss';
import RouteMap from './routes/route.js';
import ScaleBox from 'react-scale-box';

function App() {
  return (
    <ScaleBox width={1920} height={1080}>
      <div id="App">
        <RouteMap/>
      </div>
    </ScaleBox>
  );
}

export default App;
