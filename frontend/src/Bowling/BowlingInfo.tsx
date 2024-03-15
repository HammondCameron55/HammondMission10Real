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
    <div>
      <h2>Bowler Information</h2>
      {bowlerInfo ? (
        <table>
          <thead>
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
            {bowlerInfo.map((bowlerInfo) => (
              <tr key={bowlerInfo.bowlerId}>
                <td>
                  {bowlerInfo?.bowlerFirstName} {bowlerInfo?.bowlerMiddleInit}{' '}
                  {bowlerInfo?.bowlerLastName}
                </td>
                <td>{bowlerInfo?.teamName}</td>
                <td>{bowlerInfo?.bowlerAddress}</td>
                <td>{bowlerInfo?.bowlerCity}</td>
                <td>{bowlerInfo?.bowlerState}</td>
                <td>{bowlerInfo?.bowlerZip}</td>
                <td>{bowlerInfo?.bowlerPhoneNumber}</td>
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
