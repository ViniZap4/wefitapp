import axios from "axios";


export const gitHubApi = axios.create({
  baseURL: "https://api.github.com/",
  headers:{
    'Authentication': `token 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`
  }
})
