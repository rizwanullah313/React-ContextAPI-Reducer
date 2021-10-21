import './App.css';
import counterContext from './CounterContext';
import { Parent } from './Parent';

function App() {
  return (
    <counterContext.Provider value={23}>
    <div>
      <h1>ConextAPI</h1>
      <Parent/>
    </div>
    </counterContext.Provider>
  );
}

export default App;


// import './App.css';
// import { Parent } from './Parent';

// function App() {
//   return (
//     <div>
//       <h1>ConextAPI</h1>
//       <Parent name="rizwan"/>
//     </div>
//   );
// }

// export default App;
