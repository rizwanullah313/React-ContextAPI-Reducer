import { useState } from 'react';
import './App.css';
import counterContext from './CounterContext';
import { Parent } from './Parent';

function App() {

   let coustate =  useState(0);
  // let [val, setVal] = useState(999);
  return (
    <counterContext.Provider value={coustate}>
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
