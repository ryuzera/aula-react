import Greeting from "./Greeting";

import "./App.css"
import GreetingList from "./GreetingList";

const users: User[] = [
  {
    name: 'John',
    title: 'Mr'
  },
  {
    name: 'Mary',
    title: 'Miss'
  }
]

export function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      {/* <Greeting title="Mr" name="Ryu"></Greeting> */}
      <GreetingList />
    </div>
  );
}