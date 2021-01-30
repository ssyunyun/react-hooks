import React, {useReducer, createContext, useState} from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC_2 from './components/ComponentC_2';
import ComponentC from './components/ComponentC';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import CounterReducer from './components/CounterReducer';
import DataFetch from './components/DataFetch';
import DataFetchById from './components/DataFetchById';
import EffectHook from './components/EffectHook';
import FormHook from './components/FormHook';
import ItemHook from './components/ItemHook';
import MouseEventEffect from './components/MouseEventEffect';

export const UserContext = createContext()
export const LanguageContext = createContext()

export const CountContext = createContext()
const initialState = {
  firstCounter: 0,
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment1':
      return {...state, firstCounter: state.firstCounter + action.value}
    case 'decrement1':
      return {...state, firstCounter: state.firstCounter - action.value}
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [user, setUser] = useState({name: 'yamada', age:'20'})
  const [language, setLanguage] = useState('日本語')
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterHook /> */}
      {/* <FormHook /> */}
      {/* <ItemHook /> */}
      {/* <EffectHook /> */}
      {/* <MouseEventEffect /> */}
      {/* <DataFetch /> */}
      {/* <DataFetchById /> */}
      {/* <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterReducer /> */}

      <h1>カウント: {count.firstCounter}</h1>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch}} >
        <ComponentA />
        <ComponentB />
        <ComponentC_2 />
      </CountContext.Provider>

    </div>
  );
}

export default App;
