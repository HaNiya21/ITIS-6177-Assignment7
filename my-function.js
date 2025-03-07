exports.handler = async (event) => {
    const keyword = event.queryStringParameters.keyword || '';
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hana says ${keyword}`),
    };
    return response;
};