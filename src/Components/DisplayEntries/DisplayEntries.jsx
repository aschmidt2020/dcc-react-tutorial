const DisplayEntries = (props) => {
    return (
        <table className='table'>
        <thead>
          <tr>
            <th>Entry</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index) => {
            return ( //parenthesis because you are returning multiple lines of code
                <tr key={index}>
                  <td>{index + 1}</td> 
                  <td>{entry.weight}</td>
                  <td>{entry.date}</td>
                </tr>
            )
          })}
        </tbody>
        </table>
    );
}
 
export default DisplayEntries