import jwtDecode from 'jwt-decode';

function getUserIdFromToken(token) {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.id;
  } catch (error) {
    console.error('Error decoding JWT token:', error);
    return null;
  }
}

export default getUserIdFromToken;
