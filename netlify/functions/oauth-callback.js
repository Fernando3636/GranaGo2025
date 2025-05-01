exports.handler = async (event) => {
  const token = event.queryStringParameters.token1;
  return {
    statusCode: 302,
    headers: { Location: `/app?token=${token}` }
  };
};
