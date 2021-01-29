import './App.css';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import DataFetch from './components/DataFetch';
import DataFetchById from './components/DataFetchById';
import EffectHook from './components/EffectHook';
import FormHook from './components/FormHook';
import ItemHook from './components/ItemHook';
import MouseEventEffect from './components/MouseEventEffect';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterHook /> */}
      {/* <FormHook /> */}
      {/* <ItemHook /> */}
      {/* <EffectHook /> */}
      {/* <MouseEventEffect /> */}
      {/* <DataFetch /> */}
      <DataFetchById />
    </div>
  );
}

export default App;
