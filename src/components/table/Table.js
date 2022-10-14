import React, { useState } from 'react';
import Symbol from '../symbol/Symbol';

function Table(props) {
    const [symbols, SetSymbols] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
    const [whorun, SetWhoRun] = useState(props.whoRun);
    const [disabledTable, SetDisabledTable] = useState(false);

    const [GameIsWin, SetGameIsWin] = useState(false);
    const [GameIsDraw, SetGameIsDraw] = useState(false);

    function RefreshTable() {
        SetSymbols([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
        SetWhoRun(props.whoRun);
        SetDisabledTable(false);
        SetGameIsWin(false);
        SetGameIsDraw(false);
    }

    function IsGameGameIsDraw(array) {
        for (let i = 0; i < array.length; i++)
            if (array[i] === -1)
                return false;
        SetGameIsDraw(true);
        return true;
    }

    function IsGameWin(array) {
        let res = false;
        // Horizontal
        if (array[0] === array[1] && array[1] === array[2] && array[0] !== -1)
            res = true;
        if (array[3] === array[4] && array[4] === array[5] && array[3] !== -1)
            res = true;
        if (array[6] === array[7] && array[7] === array[8] && array[6] !== -1)
            res = true;

        // Vertical
        if (array[0] === array[3] && array[3] === array[6] && array[0] !== -1)
            res = true;
        if (array[1] === array[4] && array[4] === array[7] && array[1] !== -1)
            res = true;
        if (array[2] === array[5] && array[5] === array[8] && array[2] !== -1)
            res = true;

        // X
        if (array[0] === array[4] && array[4] === array[8] && array[4] !== -1)
            res = true;
        if (array[2] === array[4] && array[4] === array[6] && array[4] !== -1)
            res = true;

        SetGameIsWin(res);
        return res;
    }

    function IsEnd(array) {
        if (IsGameWin(array) || IsGameGameIsDraw(array)) {
            SetDisabledTable(true);
            SetSymbols(array);
            return true;
        }
        return false
    }

    function AutoClickInRandomSymbol(array, Who_Run) {
        if (IsEnd(array))
            return;
        
        let random = Math.floor(Math.random() * 9);
        while (array[random] !== -1) {
            random = Math.floor(Math.random() * 9);
        }
        
        let symbol = (Who_Run) ? 1 : 0;
        let new_array = array.map((c, indx) => {
            if (indx === random)
                return symbol;
            else
                return c;
        });
        SetSymbols(new_array);
        if (IsEnd(new_array))
            return;
    }


    function OnHandleClick(index, Who_Run) {
        if (IsEnd(symbols))
            return;
        let tmp_array = symbols;
        let symbol = (Who_Run) ? 1 : 0;
        let new_array = tmp_array.map((c, indx) => {
            if (indx === index)
                return symbol;
            else
                return c;
        });
        if (tmp_array[index] !== -1)
            return;
        if (IsEnd(tmp_array))
            return;
        
        AutoClickInRandomSymbol(new_array, !Who_Run);
    }

    function GetUITable(table) {
        return (
            <div>
                <Symbol key={0}
                    element={table[0]}
                    disabled={disabledTable}
                    onClick={() => { OnHandleClick(0, whorun); }} />
                <Symbol key={1}
                    element={table[1]}
                    disabled={disabledTable}
                    onClick={() => { OnHandleClick(1, whorun); }} />
                <Symbol key={2}
                    element={table[2]}
                    disabled={disabledTable}
                    onClick={() => { OnHandleClick(2, whorun); }} />
                <br />
                <Symbol key={3}
                    element={table[3]}
                    disabled={disabledTable}
                    onClick={() => { OnHandleClick(3, whorun); }} />
                <Symbol key={4}
                    element={table[4]}
                    disabled={disabledTable}
                    onClick={() => { OnHandleClick(4, whorun); }} />
                <Symbol key={5}
                    element={table[5]}
                    disabled={disabledTable}
                    onClick={() => { OnHandleClick(5, whorun); }} />
                <br />
                <Symbol key={6}
                    element={table[6]}
                    disabled={disabledTable}
                    onClick={() => { OnHandleClick(6, whorun); }} />
                <Symbol key={7}
                    element={table[7]}
                    disabled={disabledTable}
                    onClick={() => { OnHandleClick(7, whorun); }} />
                <Symbol key={8}
                    element={table[8]}
                    disabled={disabledTable}
                    onClick={() => { OnHandleClick(8, whorun); }} />
                <br />
                {
                    (GameIsDraw)
                        ?
                        <div>
                            <h3>Game is Draw</h3>
                            <button onClick={RefreshTable}>New Game</button>
                        </div>
                        :
                        null
                }
                {
                    (GameIsWin)
                        ?
                        <div>
                            <h3>Game is End</h3>
                            <button onClick={RefreshTable}>New Game</button>
                        </div>
                        :
                        null
                }
            </div>
        );
    }

    return (
        <div>
            {
                GetUITable(symbols)
            }
        </div>
    );
}

export default Table;