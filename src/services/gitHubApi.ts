import axios from "axios";
const token = "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"

export const gitHubApi = axios.create({
  baseURL: "https://api.github.com/",
  headers:{
    'Authentication': `token ${token}`
  }
})
