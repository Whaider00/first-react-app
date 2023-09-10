import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import DisplayCount from './Components/DisplayCount/DiaplayCount';
import ContactUsForm from './Components/ContactUsForm/ContactUsFrom';


function App() {

// let Count = 0;

const[Count,setCount] = useState(0);
const[isShow, setIsShow] = useState(true);

const incrementBtn = () => {
  // Count = Count + 1;
  // console.log("Increment");
  setCount(Count+1);
  console.log(Count);
}

const decrementBtn = () => {
  if(Count === 0){
    return
  };
  // Count = Count - 1;
  // console.log("Decrement");
  setCount(Count-1);
  console.log(Count);
}

const tasks = [
  {
    name: "task one",
  },
  {
    name: "task two",
  },
  {
    name: "task three",
  },
  {
    name: "task four",
  },
  {
    name: "task five",
  },
  {
    name: "task one",
  },
];

  return (
    <div className="App">
      {isShow && <DisplayCount countShow = {Count} />}
      {/* <h2> Count: {Count}</h2> */}
      <button onClick={incrementBtn}>Increment</button>
      <button onClick={decrementBtn}>Decrement</button>
      <button onClick={() => setIsShow(!isShow)}>Show/Hide</button>

      {tasks.map((singleTask, index) => {
        return <p key={index}>{singleTask.name}</p>
      })
      }
      <ContactUsForm />
    </div>
  );
}

export default App;
