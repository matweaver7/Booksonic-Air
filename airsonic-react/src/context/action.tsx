const ROOT_URL = 'http://localhost:3000/api';
 
export async function loginUser(dispatch: any, loginPayload:any) {
    console.log("here");
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
  };
 
  try {
    console.log("woot");
    dispatch({ type: 'REQUEST_LOGIN' });
    console.log(`${ROOT_URL}/login`);
    let response = await fetch(`${ROOT_URL}/login`, requestOptions);
    console.log(response);
    if (await response.status === 302) {
        let username = {user: loginPayload.j_username};
        dispatch({ type: 'LOGIN_SUCCESS', payload: username });
        localStorage.setItem('currentUser', JSON.stringify(username));
        return username;
    }
    
    let data = await response.json();
    data = response.json();
    console.log(response);
    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}
 
export async function logout(dispatch: any) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}