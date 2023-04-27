// API info for the Football Data API -  use a HTTP header named "X-Auth-Token" with the token as the value.
export const mapAPIs = [
    {link: "https://api.football-data.org/v2/", token: "db0116e51f3b4caa98292319ba53525c"},
    {link: "https://api.football-data.org/v2/", token: "1cfee8f9f61b44f4b23a018e25914193"},
    {link: "https://api.football-data.org/v2/", token: "db0116e51f3b4caa98292319ba53525c"},
    {link: "https://api.football-data.org/v2/", token: "6714f12b78e949bb817b1aff3faa958a"},
    {link: "https://api.football-data.org/v2/", token: "26f4013cfd3f4e1083ebfd1ba0e1d699"},
    {link: "https://api.football-data.org/v2/", token: "8bc6c2578c61463b8afc51d5c7975075"},
    {link: "https://api.football-data.org/v2/", token: "9fc8399837ca4bfdaaaae8b75857712c"},
    {link: "https://api.football-data.org/v2/", token: "d6faa66915ce462c94c34fe9c0150a82"},
    {link: "https://api.football-data.org/v2/", token: "929962cc8ff544f1ad964aa9248ded09"},
    {link: "https://api.football-data.org/v2/", token: "0bbc5f3284754868ae046ed60e38cba5"},
    {link: "https://api.football-data.org/v2/", token: "0d2b67c04c584c048ba0c71ccb204242"},
    {link: "https://api.football-data.org/v2/", token: "1f4378d15ed74b3a83b86f7603d3b1ed"}
];

export const footballApi = {
    link: "https://api.football-data.org/v2/",
    token: "db0116e51f3b4caa98292319ba53525c"
};
export const footballApi1 = {
    link: "https://api.football-data.org/v2/",
    token: "1cfee8f9f61b44f4b23a018e25914193"
};
export const footballApi2 = {
    link: "https://api.football-data.org/v2/",
    token: "6714f12b78e949bb817b1aff3faa958a"
};

//dedicated headers for current game week page (intensive API calls)
export const config = {
    headers:{"X-Auth-Token":"a2cf6fa547064a6a9d80531db3796c20"} 
  }
  export const config1 = {
    headers:{"X-Auth-Token":"475f186119564ee8816f3734b4f34d9e"} 
  }
  export const config2 = {
    headers:{"X-Auth-Token":"f7e8387bdf784af68184cfd714a2a167"} 
  }
  export const footballApi3 = {
    link1: "https://api.football-data.org/v2/competitions/",
    link2: "/matches?matchday="
  };

// API info for odds
export const OddsApi1 = {
    link1: "https://api.the-odds-api.com/v4/sports/",
    link2: "/odds/?apiKey=",
    token3: "ceff8291d788ec7e3e87b78d7afa4126",
    link4:  "&regions=eu&markets=h2h"
}

export const sideBarApi = {
    link: "https://api.football-data.org/v2/",
    token: "126492b463104215885bd26236dc9c58"
}
//Image Links
export const clubCrests = {
    link1: "https://crests.football-data.org/",
    link2: ".svg"
}