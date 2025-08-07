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
                  clientSecret: "14ce1c4f-5a8d-4b96-b580-5e6b2c4dc9d8",
                  applicationId: "3171ed73-ba4b-434c-b2fb-b047dd159a5f",
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