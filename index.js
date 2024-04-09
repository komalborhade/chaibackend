require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "komalborhade",
  id: 32019867,
  node_id: "MDQ6VXNlcjMyMDE5ODY3",
  avatar_url: "https://avatars.githubusercontent.com/u/32019867?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/komalborhade",
  html_url: "https://github.com/komalborhade",
  followers_url: "https://api.github.com/users/komalborhade/followers",
  following_url:
    "https://api.github.com/users/komalborhade/following{/other_user}",
  gists_url: "https://api.github.com/users/komalborhade/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/komalborhade/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/komalborhade/subscriptions",
  organizations_url: "https://api.github.com/users/komalborhade/orgs",
  repos_url: "https://api.github.com/users/komalborhade/repos",
  events_url: "https://api.github.com/users/komalborhade/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/komalborhade/received_events",
  type: "User",
  site_admin: false,
  name: "Komal Borhade",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 3,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2017-09-16T16:53:21Z",
  updated_at: "2024-04-09T13:19:14Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("komal_b");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
