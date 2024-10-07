import React from 'react';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const users = useSelector((state) => state.users);

  const userTotals = Object.values(users).map((user) => {
    return {
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answeredCount: Object.values(user.answers).length,
      createdCount: user.questions.length,
      total: Object.keys(user.answers).length + user.questions.length,
    };
  }
  );

  const orderedUsers = userTotals.sort((a, b) => b.total - a.total);

  return (
    <div className="container">
      <div className="content">
        <h1>Leaderboard</h1>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Users</th>
              <th>Answered</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {orderedUsers.map((u) => (
              <tr key={u.id}>
                <td>
                  <div className="user-info">
                    <img
                      src={u.avatarURL}
                      alt={`Avatar of ${u.name}`}
                      className="user-avatar"
                    />
                    <span>{u.name}</span>
                  </div>
                </td>
                <td>{u.answeredCount}</td>
                <td>{u.createdCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
