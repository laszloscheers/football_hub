// API info for the Football Data API -  use a HTTP header named "X-Auth-Token" with the token as the value.
export const mapAPIs = [
    {link: "/api/", token: process.env.REACT_APP_API_KEY_1},
    {link: "/api/", token: process.env.REACT_APP_API_KEY_2},
    {link: "/api/", token: process.env.REACT_APP_API_KEY_3},
    {link: "/api/", token: process.env.REACT_APP_API_KEY_4},
    {link: "/api/", token: process.env.REACT_APP_API_KEY_5},
    {link: "/api/", token: process.env.REACT_APP_API_KEY_6},
    {link: "/api/", token: process.env.REACT_APP_API_KEY_7},
    {link: "/api/", token: process.env.REACT_APP_API_KEY_8},
    {link: "/api/", token: process.env.REACT_APP_API_KEY_9},
    {link: "/api/", token: process.env.REACT_APP_API_KEY_10},
    {link: "/api/", token: process.env.REACT_APP_API_KEY_11},
    {link: "/api/", token: process.env.REACT_APP_API_KEY_12}
];

export const footballApi = {
    link: "/api/",
    token: process.env.REACT_APP_API_KEY_1
};
export const footballApi1 = {
    link: "/api/",
    token: process.env.REACT_APP_API_KEY_2
};
export const footballApi2 = {
    link: "/api/",
    token: process.env.REACT_APP_API_KEY_3
};

//dedicated headers for current game week page (intensive API calls)
export const config = {
    headers:{"X-Auth-Token": process.env.REACT_APP_API_KEY_13, "access-control-allow-origin": "https://thefootballhub.netlify.app/*"} 
  }
  export const config1 = {
    headers:{"X-Auth-Token": process.env.REACT_APP_API_KEY_14, "access-control-allow-origin": "https://thefootballhub.netlify.app/*"} 
  }
  export const config2 = {
    headers:{"X-Auth-Token": process.env.REACT_APP_API_KEY_15, "access-control-allow-origin": "https://thefootballhub.netlify.app/*"} 
  }
  export const footballApi3 = {
    link1: "/api/competitions/",
    link2: "/matches?matchday="
  };

// API info for odds
export const OddsApi1 = {
    link1: "https://api.the-odds-api.com/v4/sports/",
    link2: "/odds/?apiKey=",
    token3: process.env.REACT_APP_API_KEY_16,
    link4:  "&regions=eu&markets=h2h"
}

export const sideBarApi = {
    link: "/api/",
    token: process.env.REACT_APP_API_KEY_17
}
//Image Links
export const clubCrests = {
    link1: "https://crests.football-data.org/",
    link2: ".svg"
}