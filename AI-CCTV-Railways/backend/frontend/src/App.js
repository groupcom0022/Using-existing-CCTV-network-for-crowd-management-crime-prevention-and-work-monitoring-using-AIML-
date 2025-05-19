import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        axios.get("/api/alerts")  // No need for localhost:5000, proxy will handle it
            .then(response => setAlerts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold text-blue-900">
                Indian Railways AI Surveillance System
            </h1>
            <p className="text-gray-600">
                Official Government Initiative for Crowd Management & Safety
            </p>
            <ul className="mt-4">
                {alerts.map((alert) => (
                    <li key={alert.id} className="border p-2 my-2 bg-gray-100">
                        <strong>{alert.type}:</strong> {alert.description} ({new Date(alert.timestamp).toLocaleString()})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
