"use client";

import { useEffect, useState } from "react";

const Sample = () => {
    const [data, setData] = useState({
        name: "ABC"
    });

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://dummyjson.com/users");
            const data = await res.json();
            console.log(data);
        };
        getData();
    }, []);

    return (
        <>
            <h1>
                Name : {data.name}
            </h1>
        </>
    )
};

export default Sample;