"use client"
import { useState,useEffect } from "react";

export default function Logger()
{
    const [visitors,setVisitors]=useState(0)
    
    useEffect(()=>
    {
        async function initLogger()
        {
            const body = {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  clientSecret: "c429037d-292b-4bcb-a086-d3dca4b711b2",
                  applicationId: "ba420882-6a7f-41d2-a321-2fb41a97ef29",
                }),
              };
              const res = await fetch("https://logger-mocha-six.vercel.app/api/logger/v1", body);
              const json = await res.json();
              if (res.status === 200) {
                setVisitors(json)
              } else {
                // error
                console.log(json);
              }
        }
        initLogger()
    },[])
    return <div className="absolute top-40 right-4 bg-green-600 text-white p-2 rounded-md">Visitors {visitors}</div>
}