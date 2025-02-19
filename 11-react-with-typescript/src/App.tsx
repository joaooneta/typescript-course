import React, {createContext} from 'react';

//4 - Importing components
import FirstComponent from './components/FirstComponent';

//5 - Destructuring props
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';

//6 - useState
import State from './components/State';

//10.3 - Context
import Context from './components/Context';

//9.1 - Type
type textOrNull = string | null;

//10.2 - Context
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  //1 - Variables
  const name: string = "João";
  const age: number = 25;
  const isWorking: boolean = true;

  //2 - Functions
  const userGreeting = (name: string): string => {
    return `Hello, ${name}!`;
  };

  //9.2 - Type
  const myText: textOrNull = "There is something here!";

  let mySecondText: textOrNull = null;
  //mySecondText = "Hello!";

  //10.1 - Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React with TypeScript</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>{isWorking && (<p>Is working!</p>)}</p>
        <p>{userGreeting(name)}</p>
        <FirstComponent />
        <SecondComponent name="Second"/>
        <Destructuring title="First post" content="Something" commentsQty={100} tags={["ts", "js"]} category={Category.TS}/>
        <Destructuring title="Second post" content="Something else" commentsQty={200} tags={["html", "css"]} category={Category.HTML}/>
        <State />
        {myText && <p>myText variable is not null!</p>}
        {mySecondText && <p>mySecondText variable is not null!</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
