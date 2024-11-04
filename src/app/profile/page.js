import React from 'react';

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = response.json();
    return data ;
}



const page = async() => {

    const finalData = await getData();

    return (
        <div>
            <p>This is profile page</p>
            <pre>{JSON.stringify(finalData, null,2)}</pre>
        </div>
    );
};

export default page;