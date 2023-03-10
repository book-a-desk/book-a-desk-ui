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
    var config = {
      headers:
        {
          Authorization: "Bearer " + "eyJraWQiOiJRaGt0akx3TjZLajljZHZ0N2kxazUtODZwZUlmN0xGaVZoUTUycUlsSUFjIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUzeDZ2NW00cHN5REhlUjVkNyIsIm5hbWUiOiJBbGV4IEdhZ27DqSIsImVtYWlsIjoiYWxleC5nYWduZUBicm9hZHNpZ24uY29tIiwidmVyIjoxLCJpc3MiOiJodHRwczovL2Rldi0wNTA1NDI0My5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6IjBvYTN4ODdzcmF5YXh2cXhTNWQ3IiwiaWF0IjoxNjc2MDQxOTE3LCJleHAiOjE2NzYwNDU1MTcsImp0aSI6IklELnYxNGhmWXBtOW1Db3BPRG5fRVhMdjEwVHVlNnI0WFFoVlo5WERIc0lnMVUiLCJhbXIiOlsicHdkIl0sImlkcCI6IjBvYTN4NzE3NThwRDd6dE9UNWQ3Iiwibm9uY2UiOiJSMGpHTkxrdWg2THJqSzlwd1Jycms0Z1NlcWhUQjU3am9FdlJnOEpUVm5QaUNJcnVXZnFoS0pHWHJBZnhuU29uIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWxleC5nYWduZUBicm9hZHNpZ24uY29tIiwiYXV0aF90aW1lIjoxNjc2MDM5OTg5LCJhdF9oYXNoIjoiRXhCQTZQQ0Z4Tmp5eDJLRi16REJvQSJ9.P2QJZ-9LIgpe5Th8oPG47_Ne1y1_t9EeNGKbDkdyR4RasjtTODogvlIFiu6xHOcFkFH9CeOEjKav6L3quQIVQqqQZxo_v-BjSGy4mmBR8sNXdMABnRMArPtSmFixob5ez1Y0uSSJabHEpVwvbDfvYsGJU5z5I_T1SbK5GHG6wUN_SwY3FchzULFk1i53zk73miwJ711yY7yQErILn_zu1ntv4Q3j8u42lyWlA7DQAEhmQY-RRyZRTW9nXdsEHHMPoSN7Ew8IhiBQDPa5OXWLsPkbieoupjHhOktezpGssxaZUl09XaOaL0TFvvyOWevc7LUSmxSWsSOODIKEUODc8Q"
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
