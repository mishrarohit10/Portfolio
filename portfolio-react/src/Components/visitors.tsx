import { useEffect, useState } from "react";
import axios from 'axios';

export function Visitors() {
    const [count, setCount] = useState<number>();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios('http://localhost:3001');
                setCount(response.data.totalVisitors);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Visitors: {count}</h1>
        </div>
    )
}