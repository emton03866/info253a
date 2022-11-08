import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
//importing all components
import LeftNavi from "./LeftNavi/LeftNavi";
import MainNavi from "./MainNavi/MainNavi";
import Header from "./Header/Header";
import { useEffect } from 'react';

//importing JSON task data?
const jsonTasks = require("./tasks.json"); 

//creating a context so we can declare  states
export const TaskContext = createContext();

function App() {
    //declaring states (i'm unsure which or how many i need lol)
    const [tasks,setTasks] = useState([])
    const [count, setCount] = useState (0);

// add json data to state?
    useEffect(() => {
        setTasks([...jsonTasks]);
    }, []); 


  return (
    <>
            <TaskContext.Provider
                value= {{
                tasks,
                setTasks,
                
                }}
                //add more
            >

                <div>
                    <LeftNavi />
                </div>
                <div>
                    <MainNavi />
                </div>
                <div>
                    <Header/>
                </div>
            </TaskContext.Provider>

    <div className="App">
        <Home.js/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {/* </header> */}
    </div>
    </>
  );
}

export default App;
