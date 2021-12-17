import React ,{useState} from 'react';
import './App.css';
import Input from './Input'
import ShowCase from './ShowCase';

interface Data{
  date?: string;
  time?: string;
  name?: string;
  things?: string;
}

const App = () =>{

  const [data, setData] = useState<Data>({})
  return (
    <div className="App">
      <Input setData={setData}/>
      <ShowCase data={data}/>
    </div>
  );
}

export default App;
