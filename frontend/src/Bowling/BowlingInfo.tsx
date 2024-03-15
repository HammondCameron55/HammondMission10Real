import { useEffect, useState } from 'react';
import { Bowling } from '../types/Bowling';

function BowlingInfo() {
  const [bowlerInfo, setBowlerInfo] = useState<Bowling[]>([]);

  useEffect(() => {
    const fetchBowlerInfo = async () => {
      try {
        const response = await fetch('api/GetBowlerTeamInfo');
        const data = await response.json();
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
              <tr>
                <td>
                  {bowlerInfo?.firstName} {bowlerInfo?.middleName}{' '}
                  {bowlerInfo?.lastName}
                </td>
                <td>{bowlerInfo?.teamName}</td>
                <td>{bowlerInfo?.address}</td>
                <td>{bowlerInfo?.city}</td>
                <td>{bowlerInfo?.state}</td>
                <td>{bowlerInfo?.zip}</td>
                <td>{bowlerInfo?.phoneNumber}</td>
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
