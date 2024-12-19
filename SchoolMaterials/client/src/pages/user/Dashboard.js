

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/Dashboard.css';  
import Glue from "../../images/glue-stick-574016_1280.jpg";
import Notes from "../../images/notes-1428836_1280.jpg";
import Pencils from "../../images/the-pencils-2949488_1280.jpg";

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    id: '',
    date: '',
    description: ''
  });
  const [showForm, setShowForm] = useState(false); 

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/request');
        setRequests(res.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/api/request/create', newRequest);
      setRequests([...requests, res.data]); 
      setNewRequest({ id: '', date: '', description: '' });
    } catch (error) {
      console.error('Error creating request:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <h2 className="dashboard-subtitle">Information for Requests</h2>

      <button
        className="toggle-form-btn"
        onClick={() => setShowForm(!showForm)} 
      >
        {showForm ? 'Hide Request Form' : 'Create New Request'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="request-form">
          <div className="form-field">
            <label>Request ID:</label>
            <input
              type="text"
              name="id"
              value={newRequest.id}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-field">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={newRequest.date}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-field">
            <label>Description:</label>
            <textarea
              name="description"
              value={newRequest.description}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}

      <div className="dashboard-content">
        <div className="request-table-container">
          <table className="request-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request._id}>
                  <td>{request.id}</td>
                  <td>{request.date}</td>
                  <td>{request.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="ads-container">
  <div className="ad-card">
    <img src={Notes} alt="Ad 1" />
    <p>Explore our latest notebooks collection!</p>
  </div>
  <div className="ad-card">
    <img src={Pencils} alt="Ad 2" />
    <p>Get discounts on whiteboards this season!</p>
  </div>
  <div className="ad-card">
    <img src={Glue} alt="Ad 3" />
    <p>Shop high-quality stationery now!</p>
  </div>
</div>

    </div>
  );
};

export default Dashboard;
