import React, { useState } from 'react';
import './Admin.scoped.css';

function Admin() {
  const [issues, setIssues] = useState(
    [
    {
      id: 1,
      email: 'userStupid@example.com',
      contact: '123-456-7890',
      problem: 'ปัญหาที่ 1',
      status: 'Not Finish',
    },
    {
      id: 2,
      email: 'usereiei@example.com',
      contact: '987-654-3210',
      problem: 'ปัญหาที่ 2',
      status: 'Finish',
    },
    {
      id: 3,
      email: 'userhuakuy@example.com',
      contact: '123-456-7890',
      problem: 'ปัญหาที่ 3',
      status: 'Not Finish',
    },
  ]
  );

  const handleStatusChange = (id, newStatus) => {
    const updatedIssues = issues.map((issue) =>
      issue.id === id ? { ...issue, status: newStatus } : issue
    );
    setIssues(updatedIssues);
  };

  return (
    <div className="admin-container">
      <h2>Administrator</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Problem</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>{issue.email}</td>
              <td>{issue.contact}</td>
              <td>{issue.problem}</td>
              <td>
                <select
                  value={issue.status}
                  onChange={(e) => handleStatusChange(issue.id, e.target.value)}
                >
                  <option value="Finish">Finish</option>
                  <option value="Not Finish">Not Finish</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
