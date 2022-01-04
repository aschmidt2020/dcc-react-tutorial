import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}]) //hardcoded first entry with array that contains one object; can leave empty list

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]; // '...' spreads apart to prevent nested array; adds newEntry to END of existing entries
    setEntries(tempEntries);
  }

  return (
    <div>
      <div className='container-lg'>
        <div className='row'>
          <h1 style={{'margin-top': '1em'}}>Weight <small className='text-muted'>Tracker</small></h1>
        </div>
        
        <div className='row'>
          <div className='col'>
            <div className='border-box'>
              <h3>Past Entries</h3>
              <DisplayEntries parentEntries={entries} />
            </div>
            <div className='border-box'>
              <h3>Add New Entry</h3>
              <AddEntryForm addNewEntryProperty={addNewEntry}/>
            </div>
          </div>

          <div className='col'>
            <div className='border-box'>
              <h3 className='center-text'>Weight Graph</h3>
              <EntriesChartTracker entries={entries}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


export default App;
