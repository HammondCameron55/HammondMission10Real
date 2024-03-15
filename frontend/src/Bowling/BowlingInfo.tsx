import { useEffect, useState } from 'react';
import { Bowling } from '../types/Bowling';

function BowlingInfo() {
  const [bowlerInfo, setBowlerInfo] = useState<Bowling[]>([]);

  useEffect(() => {
    const fetchBowlerInfo = async () => {
      try {
        const response = await fetch(
          'http://localhost:5020/BowlingLeague/GetBowlerTeamInfo',
        );
        const data = await response.json();
        console.log(data);
        setBowlerInfo(data);
      } catch (error) {
        console.error('Error fetching bowler information:', error);
      }
    };

    fetchBowlerInfo();
  }, []);

  return (
    <div className="container-fluid">
      <h2>Bowler Information</h2>
      <h3>Team Shark and Team Marlin</h3>
      {bowlerInfo.length > 0 ? ( // Changed to check length for content
        <table className="table table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Bowler Name</th>
              <th>Team Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {bowlerInfo.map((info) => (
              <tr key={info.bowlerId}>
                <td>
                  {info.bowlerFirstName} {info.bowlerMiddleInit}{' '}
                  {info.bowlerLastName}
                </td>
                <td>{info.teamName}</td>
                <td>{info.bowlerAddress}</td>
                <td>{info.bowlerCity}</td>
                <td>{info.bowlerState}</td>
                <td>{info.bowlerZip}</td>
                <td>{info.bowlerPhoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading bowler information...</p>
      )}
    </div>
  );
}

export default BowlingInfo;
