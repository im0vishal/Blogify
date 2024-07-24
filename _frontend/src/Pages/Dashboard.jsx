// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserAndBlogs = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const userResponse = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(userResponse.data);

        const blogsResponse = await axios.get('/api/blogs', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBlogs(blogsResponse.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load user data and blogs');
      }
    };

    fetchUserAndBlogs();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-12 py-8 w-full max-w-4xl">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Welcome, {user.name}</h2>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Your Blogs</h3>
          <ul>
            {blogs.map(blog => (
              <li key={blog._id} className="mb-4">
                <h4 className="text-lg font-bold">{blog.title}</h4>
                <p>{blog.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
