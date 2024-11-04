import React from 'react';

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users',{
        cache:"no-cache",
        next:{revalidate:100},
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    });

    const data = response.json();
    return data ;
}

const page = async() => {

    const finalData = await getData();


    return (
        <div>
            <p>Brand Page</p>
            <p>{JSON.stringify(finalData)}</p>
        </div>
    );
};

export default page;