import React from 'react'

const Leaderboard = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Leaderboard</h1>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{/* Add your leaderboard data here */}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;