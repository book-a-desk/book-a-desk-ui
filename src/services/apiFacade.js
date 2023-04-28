import axios from "axios";
import store from "../store";

export async function postAsync(url, body) {
  try {
    const headers = getHeaders();

    return await axios.post(url, body, headers);
  } catch (error) {
    handleError(error);
  }
}

export async function getAsync(url) {

  try {
    const headers = getHeaders();
    console.log(url)
    return await axios.get(url, headers);
  } catch (error) {
    { handleError(error); }
  }
}

function getHeaders() {
  const storage = JSON.parse(localStorage.getItem("okta-token-storage"))
  if(storage && storage.idToken)
  {
    const idToken = storage.idToken.value
    const headers =
        {
          headers: {
            Authorization: "Bearer " + idToken
          }
        }
    return headers;
  }
  return { headers : {} }
}

function handleError(error) {
  // Unhandled exceptions return plain text
  // We want to handle it differently from caught errors
  if (error.response.headers["content-type"] == "text/plain") {
    store.commit("ADD_ERROR_MESSAGE", "Oh no, something went wrong");
  }
  // Todo: Problem json handler
  // Todo: Result.failed handler
  store.commit("ADD_ERROR_MESSAGE", "Oh no, something went wrong");
}
