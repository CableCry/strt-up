import { useEffect, useRef } from 'react';
import './assets/App.css';
import { Root, Title, Stats, Visual, BuyScale, BuyMulti } from './components';
import { gameController } from './logic/index';

function App() {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      gameController.init();
      isInitialized.current = true;
    }
    
    return () => {

    };
  }, []);

  return (
    <Root>
      <Title />
      <Stats />
      <Visual id="train" />
      <BuyScale id="scale" />
      <BuyMulti id="multi" />
    </Root>
  );
}

export default App;