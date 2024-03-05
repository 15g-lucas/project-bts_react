const FetchData = async (endpoint, method = 'GET', data = null) => {

    const requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    };

    const response = await fetch(`http://localhost/${endpoint}`, requestOptions);
    const result = await response.json();
    return result;
};

export default FetchData;
