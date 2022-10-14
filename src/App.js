import { useState } from 'react';
import './App.css';
import Table from './components/table/Table';

function App() {

  const [who_run, SetWho_Run] = useState(true);
  const [visibleMenu, SetVisibleMenu] = useState(true);
  function onChangeHandler(e) {
    console.log(e.target.value);
    if (e.target.value === 1)
      SetWho_Run(1)
    else
      SetWho_Run(0)
  }

  return (
    <div className="App">
      {
        (visibleMenu) ?
          <div>
            <br />
            <br />
            <select onChange={onChangeHandler}>
              <option value="1">X</option>
              <option value="0">0</option>
            </select>
            <br />
            <br />
            <button onClick={() => { SetVisibleMenu((prev) => !prev); }}>Start</button>
          </div>
          :
          <div>
            <br />
            <br />
            <Table indexMenu={visibleMenu} whoRun={who_run} />
          </div>
      }

    </div>
  );
}

export default App;