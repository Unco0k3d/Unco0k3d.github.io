import React,{useState} from 'react';
import './App.css';
import Form from './components/Form'
import List from './components/List'


function App() {
  
  const [posts,setPosts]=useState([])
  
  return (
    <div className="App">
      <Form />
      <List />
    </div>
  );
}

export default App;
