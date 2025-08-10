"use client"

import { useAuth, useUser } from "@clerk/nextjs";
import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    // const {isLoaded, userId, sessionId, getToken} = useAuth();
    const {isLoaded, isSignedIn, user} = useUser();

    if(!isLoaded || !isSignedIn){
        return null;
    }

    return (
        <>
            <p>Count: {count}</p>
            <button className="py-1 px-2 text-sm border border-neutral-300 dark:border-neutral-500 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded" onClick={() => setCount(count+1)}>Increment</button>
        </>
    )
}