'use client'
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                // Await the JSON parsing
                const data = await res.json(); 
                setUser(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchData(); // Call the async function
    }, []);

    return (
        <div>
            <h1>User List</h1>
           
            <h2>Bordered Table</h2>
            <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>            
            <table className="table table-bordered table-hover">
                <thead>
                <tr className='table-success'>
                    <th>Name</th>
                    <th>username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>       
                {user.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <pre>{JSON.stringify(user, null, 2)}</pre> {/* Use <pre> for better formatting */}
        </div>
    );
};

export default Page;
