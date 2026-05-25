import { useState } from 'react';
import './App.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}

export default App;
