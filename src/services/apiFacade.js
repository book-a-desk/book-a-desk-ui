import axios from "axios";
import store from "../store";

// Set default headers here
// Set error handling here
// We could make a similar API to HttpClient here

export async function postAsync(url, body) {
  try {
    console.log("postAsync");
    return await axios.post(url, body);
  } catch (error) {
    handleError(error);
  }
} 
  
function handleError(error) {
  // Todo: Extract this to a separate function that can be used elsewhere
  if (error.response.status == 401) {
    store.commit(
      "ADD_ERROR_MESSAGE",
      "Unable to authenticate on the server."
    );
  }
  // Unhandled exceptions return plain text
  // We want to handle it differently from caught errors
  if (error.response.headers["content-type"] == "text/plain") {
    store.commit("ADD_ERROR_MESSAGE", "Oh no, something went wrong");
  }
  // Todo: Problem json handler
  // Todo: Result.failed handler
  store.commit("ADD_ERROR_MESSAGE", "Oh no, something went wrong");
}
