import React, {createContext, useState} from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import DataFetch from './components/DataFetch';
import DataFetchById from './components/DataFetchById';
import EffectHook from './components/EffectHook';
import FormHook from './components/FormHook';
import ItemHook from './components/ItemHook';
import MouseEventEffect from './components/MouseEventEffect';

export const UserContext = createContext()
export const LanguageContext = createContext()

function App() {
  const [user, setUser] = useState({name: 'yamada', age:'20'})
  const [language, setLanguage] = useState('日本語')
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
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
