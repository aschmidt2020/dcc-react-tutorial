import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}]) //hardcoded first entry with array that contains one object; can leave empty list

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]; // '...' spreads apart to prevent nested array; adds newEntry to END of existing entries
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
    </div>
  );
}


export default App;
