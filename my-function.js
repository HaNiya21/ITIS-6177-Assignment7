exports.handler = async (event) => {
    const keyword = event.queryStringParameters.keyword || '';
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Allow all origins
            'Access-Control-Allow-Methods': 'GET', // Allow GET requests
            'Access-Control-Allow-Headers': 'Content-Type', // Allow specific headers
        },
        body: JSON.stringify(`Hana says ${keyword}`),
    };
    return response;
};