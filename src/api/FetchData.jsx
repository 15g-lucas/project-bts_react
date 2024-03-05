const FetchData = async (endpoint, method = 'GET', data = null) => {
    console.log('fetch' +  endpoint)
    const requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    };

    const response = await fetch(`http://localhost/${endpoint}`, requestOptions);
    console.log(response.json())
    // const result = await response.json();
    // return result;
};

export default FetchData;
