'use client';

import { useState } from "react";

interface CounterProps {
    intial: number;
}

export default function Counter({initial}: CounterProps){
    const [count, setCount] = useState(initial);

    return (
        <div className="flex items-center gap-4 p-4">
            <button
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >-
                </button>
                <span className="text-2xl font-bold">{count}</span>
                <button
                    onClick={() => setCount(count + 1)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >+</button>
        </div>
    );
};