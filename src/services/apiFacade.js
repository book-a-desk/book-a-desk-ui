import axios from "axios";
import store from "../store";

// Set default headers here
// Set error handling here
// We could make a similar API to HttpClient here

export async function postAsync(url, body) {
  try {
    var config = {}
    const token = await this.$auth.getAccessToken();
    if(token)
    {
      config =
      {
        headers:{
          Authorization: "Bearer " + token
        }
      }
    }

    return await axios.post(url, body, config);
  } catch (error) {
    handleError(error);
  }
}

export async function getAsync(url) {
  try {
    var idtoken = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.value
    var config = {
      headers:
        {
          Authorization: "Bearer " + idtoken
        }
    }
//    const token = await this.$auth.getAccessToken();
//    if(token)
    // {
    //   config =
    //   {
    //     headers:{
    //       Authorization: "Bearer " + token
    //     }
    //   }
    // }

    return await axios.get(url, config);
  } catch (error) {
    { handleError(error); }
  }
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
