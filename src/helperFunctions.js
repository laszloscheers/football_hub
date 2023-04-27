
// Stores the name of a league to get the code
export const mapCompetitions = [
    {name: 'premier league', code: 'PL'},
    {name: 'premiership', code: 'PL'},
    {name: 'bundesliga', code: 'BL1'},
    {name: 'ligue 1', code: 'FL1'},
    {name: 'ligue1', code: 'FL1'},
    {name: 'serie a', code: 'SA'},
    {name: 'primera division', code: 'PD'},
    {name: 'la liga', code: 'PD'},
    {name: 'efl championship', code: 'ELC'}
];

// Takes the name of a league and returns the search ID
export const findLeagueId = leagueName => {
    switch (leagueName.toLowerCase()) {
        case "premier league":
        case "premiership":
            return "PL";
        case "bundesliga":
            return "BL1";
        case "ligue 1":
        case "ligue1":
            return "FL1";
        case "serie a":
            return "SA";
        case "la liga":
        case "primera division":
            return "PD";
        case "the championship":
        case "championship":
        case "efl championship":
            return "ELC";
        case "uefa champions league":
            return "TryAgain"
        default:
            alert("League not found");
            return "";
    };
};

// Object to display the leagues in Leagues page
export const mapLeagues = [
    {name: 'serie a', logo: 'serie-a-logo.jpg'},
    {name: 'premier league', logo: 'pl-l-logo.jpg'},
    {name: 'bundesliga', logo: 'bundesliga-logo.jpg'},
    {name: 'ligue 1', logo: 'ligue-1-logo.jpg'},
    {name: 'primera division', logo: 'la-liga-logo.jpg'},
    {name: 'efl championship', logo: 'english-championship-logo.jpg'},
];

// Aray to display photos in home page
export const mapCarousel = ["photo (1).jpg","photo (2).jpg","photo (3).jpg","photo (4).jpg","photo (5).jpg","photo (6).jpg","photo (7).jpg","photo (8).jpg","photo (9).jpg","photo (10).jpg","photo (11).jpg"];

// Export Odds league codes
export const mapOddsLeagues = [
    {'code_link': 'soccer_epl', 'name': 'Premier League', logo: 'pl-l-logo.jpg'},
    {'code_link': 'soccer_germany_bundesliga', 'name': 'Bundesliga', logo: 'bundesliga-logo.jpg'},
    {'code_link': 'soccer_france_ligue_one', 'name': 'Ligue 1', logo: 'ligue-1-logo.jpg'},
    {'code_link': 'soccer_italy_serie_a', 'name': 'Serie A', logo: 'serie-a-logo.jpg'},
    {'code_link': 'soccer_spain_la_liga', 'name': 'Primera Division', logo: 'la-liga-logo.jpg'},
    {'code_link': 'soccer_efl_champ', 'name': 'EFL Championship', logo: 'english-championship-logo.jpg'},
  ];

// Object to search a team by name and find the id
export const clubId = [
     // Prem Teams
    {name: 'manchester city fc', id: 65},
    {name: 'man city', id: 65},
    {name: 'manchester united', id: 66},
    {name: 'manchester utd', id: 66},
    {name: 'man utd', id: 66},
    {name: 'liverpool fc', id: 64},
    {name: 'liverpool f.c.', id: 64},
    {name: 'liverpool', id: 64},
    {name: 'chelsea', id: 61},
    {name: 'chelsea fc', id: 61},
    {name: 'chelsea f.c.', id: 61},
    {name: 'tottenham hotspur', id: 73},
    {name: 'tottenham hotspur fc', id: 73},
    {name: 'tottenham', id: 73},
    {name: 'spurs', id: 73},
    {name: 'arsenal fc', id: 57},
    {name: 'west ham', id: 563},
    {name: 'west ham fc', id: 563},
    {name: 'wolves', id: 76},
    {name: 'wolverhampton wanderers fc', id: 76},
    {name: 'crystal palace', id: 354},
    {name: 'crystal palace fc', id: 354},
    {name: 'leicester city"', id: 338},
    {name: 'leicester city fc"', id: 338},
    {name: 'aston villa', id: 58},
    {name: 'aston villa fc', id: 58},
    {name: 'southampton fc', id: 340},
    {name: 'southampton', id: 340},
    {name: 'brighton & hove albion fc', id: 397},
    {name: 'brighton', id: 397},
    {name: 'brentford', id: 402},
    {name: 'brentford fc', id: 402},
    {name: 'newcastle', id: 67},
    {name: 'newcastle united fc', id: 67},
    {name: 'leeds united fc', id: 341},
    {name: 'leeds', id: 341},
    {name: 'leedsUtd', id: 341},
    {name: 'leedsUnited', id: 341},
    {name: 'everton', id: 62},
    {name: 'everton fc', id: 62},
    {name: 'burnley', id: 328},
    {name: 'burnley fc', id: 328},
    {name: 'watford fc', id: 346},
    {name: 'watford', id: 346},
    {name: 'norwich city fc', id: 68},
    {name: 'norwich city', id: 68},
    {name: 'norwich', id: 68},
    // Serie A Teams
    {name: 'ac milan"', id: 98},
    {name: 'fc internazionale milano', id: 108},
    {name: 'inter', id: 108},
    {name: 'ssc napoli', id: 113},
    {name: 'juventus fc', id: 109},
    {name: 'as roma', id: 100},
    {name: 'ss lazio', id: 110},
    {name: 'acf fiorentina', id: 99},
    {name: 'atalanta bc', id: 102},
    {name: 'us sassuolo calcio', id: 471},
    {name: 'hellas verona fc', id: 450},
    {name: 'torino fc', id: 586},
    {name: 'bologna fc 1909', id: 103},
    {name: 'udinese calcio', id: 115},
    {name: 'empoli fc', id: 445},
    {name: 'spezia calcio', id: 488},
    {name: 'uc sampdoria', id: 584},
    {name: 'cagliari calcio', id: 104},
    {name: 'venezia fc', id: 454},
    {name: 'genoa fc', id: 107},
    {name: 'us salernitana 1919', id: 455},
    // Bundesliga Teams
    {name: 'fc bayern münchen', id: 5},
    {name: 'fc bayern munich', id: 5},
    {name: 'borussia dortmund', id: 4},
    {name: 'bayer leverkusen', id: 3},
    {name: 'rb leipzig', id: 721},
    {name: 'red bull leipzig', id: 721},
    {name: 'rasenballsport leipzig', id: 721},
    {name: 'sc freiburg', id: 17},
    {name: 'tsg 1899 hoffenheim', id: 2},
    {name: '1. fc köln', id: 1},
    {name: '1. fc koln', id: 1},
    {name: 'eintracht frankfurt', id: 19},
    {name: '1. fsv mainz 05', id: 15},
    {name: 'borussia mönchengladbach', id: 18},
    {name: 'borussia monchengladbach', id: 18},
    {name: 'vfl bochum 1848', id: 36},
    {name: 'vfl wolfsburg', id: 11},
    {name: 'fc augsburg', id: 16},
    {name: 'vfb stuttgart', id: 10},
    {name: 'arminia bielefeld', id: 38},
    {name: 'hertha berlin', id: 9},
    {name: 'hertha bsc', id: 9},
    {name: 'spvgg greuther fürth 1903', id: 21},
    {name: 'spvgg greuther furth 1903', id: 21},
    //La Liga
    {name: 'real madrid cf', id: 86},
    {name: 'fc barcelona', id: 81},
    {name: 'barca', id: 81},
    {name: 'sevilla fc', id: 559},
    {name: 'club atlético de madrid', id: 78},
    {name: 'club atletico de madrid', id: 78},
    {name: 'real betis balompié', id: 90},
    {name: 'real sociedad de fútbol', id: 92},
    {name: 'real sociedad de futbol', id: 92},
    {name: 'villarreal cf', id: 99},
    {name: 'athletic club', id: 77},
    {name: 'athletic bilbao', id: 77},
    {name: 'valencia cf"', id: 95},
    {name: 'ca osasuna', id: 79},
    {name: 'rcd espanyol de barcelona', id: 80},
    {name: 'rc celta de vigo', id: 558},
    {name: 'rayo vallecano de madrid', id: 87},
    {name: 'getafe cf', id: 82},
    {name: 'elche cf', id: 285},
    {name: 'granada cf', id: 83},
    {name: 'rcd mallorca', id: 89},
    {name: 'cádiz cf', id: 264},
    {name: 'cadiz cf', id: 264},
    {name: 'levante ud', id: 88},
    {name: 'deportivo alavés', id: 263},
    {name: 'deportivo alaves', id: 263},
    // Championship Teams
    {name: 'fulham fc', id: 63},
    {name: 'afc bournemouth', id: 1044},
    {name: 'huddersfield town afc', id: 394},
    {name: 'nottingham forest fc', id: 351},
    {name: 'luton town fc', id: 389},
    {name: 'sheffield united fc', id: 356},
    {name: 'blackburn rovers fc', id: 59},
    {name: 'middlesbrough fc', id: 343},
    {name: 'millwall fc', id: 384},
    {name: 'coventry city fc', id: 1076},
    {name: 'queens park rangers fc', id: 69},
    {name: 'qpr', id: 69},
    {name: 'west bromwich albion fc', id: 74},
    {name: 'preston north end fc', id: 1081},
    {name: 'swansea city afc', id: 72},
    {name: 'stoke city fc', id: 70},
    {name: 'blackpool fc', id: 336},
    {name: 'cardiff city fc', id: 715},
    {name: 'birmingham city fc', id: 332},
    {name: 'bristol city fc', id: 387},
    {name: 'hull city afc', id: 322},
    {name: 'barnsley fc', id: 357},
    {name: 'derby county fc', id: 342},
    {name: 'peterborough united fc', id: 1077},
    // Ligue 1 Teams
    {name: 'paris saint-germain fc', id: 524},
    {name: 'paris saint germain fc', id: 524},
    {name: 'psg', id: 524},
    {name: 'olympique de marseille', id: 516},
    {name: 'stade rennais fc 1901', id: 529},
    {name: 'rennes', id: 529},
    {name: 'rc strasbourg alsace', id: 576},
    {name: 'ogc nice', id: 522},
    {name: 'as monaco fc', id: 548},
    {name: 'lille ocs', id: 521},
    {name: 'racing club de lens', id: 546},
    {name: 'fc nantes', id: 543},
    {name: 'olympique lyonnais', id: 523},
    {name: 'lyon fc', id: 523},
    {name: 'montpellier hsc', id: 518},
    {name: 'stade brestois 29', id: 512},
    {name: 'stade de reims', id: 547},
    {name: 'reims fc', id: 547},
    {name: 'angers sco', id: 532},
    {name: 'es troyes ac', id: 531},
    {name: 'fc lorient', id: 336},
    {name: 'clermont foot 63', id: 541},
    {name: 'as saint-étienne', id: 527},
    {name: 'as saint étienne', id: 527},
    {name: 'as saint-etienne', id: 527},
    {name: 'as saint etienn', id: 527},
    {name: 'fc girondins de bordeaux', id: 526},
    {name: 'fc metz', id: 545}
];

// Takes the name of a club and returns the search ID
export const findClubId = clubName => {

    switch (clubName.toLowerCase()) {
        // Prem Teams
        case "manchester city":
        case "man city":
            return 65;
        case "liverpool":
            return 64;
        case "chelsea":
            return 61;
        case "tottenham hotspur":
        case "tottenham":
        case "spurs":
            return 73;
        case "arsenal":
            return 57;
        case "west ham":
            return 563;
        case "manchester united":
        case "manchester utd":
        case "man utd":
            return 66;
        case "wolves":
        case "wolverhampton wanderers":
            return 76;
        case "crystal palace":
        case "palace":
            return 354;
        case "leicester city":
        case "leicester":
            return 338;
        case "aston villa":
        case "villa":
            return 58;
        case "southampton":
            return 340;
        case "brighton":
            return 397;
        case "brentford":
            return 402;
        case "newcastle":
            return 67;
        case "leeds":
        case "leedsUtd":
        case "leedsUnited":
            return 341;
        case "everton":
            return 62;
        case "burnley":
            return 328;
        case "watford":
            return 346;
        case "norwich city":
        case "norwich":
            return 68;
        // Serie A Teams
        case "ac milan":
        case "milan":
            return 98;
        case "fc internazionale milano":
        case "internazionale":
        case "inter":
            return 108;
        case "ssc napoli":
        case "napoli":
            return 113;
        case "juventus fc":
        case "juventus":
        case "juve":
            return 109;
        case "as roma":
        case "roma":
            return 100;
        case "ss lazio":
        case "lazio":
            return 110;
        case "acf fiorentina":
        case "fiorentina":
            return 99;
        case "atalanta bc":
        case "atalanta":
            return 102;
        case "us sassuolo calcio":
        case "sassuolo":
            return 471;
        case "hellas verona fc":
        case "hellas verona":
        case "hellas":
            return 450;
        case "torino fc":
        case "torino":
            return 586;
        case "bologna fc 1909":
        case "bologna fc":
        case "bologna":
            return 103;
        case "udinese calcio":
        case "udinese":
        case "udine":
            return 115;
        case "empoli fc":
        case "empoli":
            return 445;
        case "spezia calcio":
        case "spezia":
            return 488;
        case "uc sampdoria":
        case "sampdoria":
            return 584;
        case "cagliari calcio":
        case "cagliari":
            return 104;
        case "venezia fc":
        case "venezia":
            return 454;
        case "genoa fc":
        case "genoa":
            return 107;
        case "us salernitana 1919":
        case "salernitana":
            return 455;
        // Bundesliga Teams
        case "fc bayern münchen":
        case "bayern":
        case "bayern munich":
        case "fc bayern munich":
            return 5;
        case "borussia dortmund":
        case "dortmund":
            return 4;
        case "bayer 04 leverkusen":
        case "leverkusen":
        case "bayer leverkusen":
            return 3;
        case "rb leipzig":
        case "leipzig":
        case "red bull leipzig":
        case "red bull":
        case "rasenballsport leipzig ":
            return 721;
        case "cs freiburg":
        case "freiburg":
            return 17;
        case "tsg 1899 hoffenheim":
        case "hoffenheim":
            return 2;
        case "1. fc union berlin":
        case "fc union berlin":
        case "union berlin":
            return 28;
        case "1. fc köln":
        case "1. fc koln":
        case "koln":
        case "köln":
            return 1;
        case "eintracht frankfurt":
        case "eintracht":
            return 19;
        case "1. fsv mainz 05":
        case "mainz":
            return 15;
        case "borussia mönchengladbach":
        case "borussia monchengladbach":
        case "mönchengladbach":
        case "monchengladbach":
            return 18;
        case "vfL bochum 1848":
        case "bochum":
            return 36;
        case "vfL wolfsburg":
        case "wolfsburg":
            return 11;
        case "fc augsburg":
        case "augsburg":
            return 16;
        case "vfB stuttgart":
        case "stuttgart":
            return 10;
        case "arminia bielefeld":
            return 38;
        case "hertha berlin":
        case "hertha bsc":
            return 9;
        case "spvgg greuther fürth 1903":
        case "greuther fürth":
            return 21;
        // La Liga Teams
        case "real madrid cf":
        case "real madrid":
        case "real":
            return 86;
        case "fc barcelona":
        case "barcelona":
        case "barca":
            return 81;
        case "sevilla fc":
        case "sevilla":
            return 559;
        case "club atlético de madrid":
        case "club atletico de madrid":
        case "atlético de madrid":
        case "atletico de madrid":
            return 78;
        case "real betis balompié":
        case "real betis":
            return 90;
        case "real sociedad de futbol":
        case "real sociedad de fútbol":
        case "real sociedad":
            return 92;
        case "villareal cf":
        case "villareal":
            return 99;
        case "athletic club":
        case "athletic bilbao":
        case "bilbao":
            return 77;
        case "valencia cf":
        case "valencia":
            return 95;
        case "ca osasuna":
        case "osasuna":
            return 79;
        case "rcd espanyol de barcelona":
        case "espanyol":
            return 80;
        case "rc celta de vigo":
        case "celta":
        case "celta de vigo":
            return 558;
        case "rayo vallecano de madrid":
        case "rayo":
            return 87;
        case "getafe cf":
        case "getafe":
            return 82;
        case "elche cf":
        case "elche":
            return 285;
        case "granada cf":
        case "granada":
            return 83;
        case "rcd mallorca":
        case "mallorca":
            return 89;
        case "cádiz cf":
        case "cádiz":
        case "cadiz":
        case "cadiz cf":
            return 264;
        case "levante ud":
        case "levante":
            return 88;
        case "deportivo alavés":
        case "alavés":
        case "deportivo alaves":
        case "alaves":
            return 263;
        // Championship Teams
        case "fulham fc":
        case "fulham":
            return 63;
        case "afc bournemouth":
        case "bournemouth":
            return 1044;
        case "huddersfield town afc":
        case "huddersfield":
            return 394;
        case "nottingham forest fc":
        case "nottingham forest":
        case "forest":
            return 351;
        case "luton town fc":
        case "luton town":
        case "luton":
            return 389;
        case "sheffield united fc":
        case "sheffield united":
            return 356;
        case "blackburn rovers fc":
        case "blackburn rovers":
        case "blackburn":
            return 59;
        case "middlesbrough fc":
        case "middlesbrough":
            return 343;
        case "millwall fc":
        case "millwall":
            return 384;
        case "coventry city fc":
        case "coventry city":
        case "coventry":
            return 1076;
        case "queens park rangers fc":
        case "queens park rangers":
        case "qpr":
            return 69;
        case "west bromwich albion fc":
        case "west bromwich albion":
        case "west brom":
            return 74;
        case "preston north end fc":
        case "preston north end":
        case "preston":
            return 1081;
        case "swansea city afc":
        case "swansea city":
        case "swansea":
            return 72;
        case "stoke city fc":
        case "stoke city":
        case "stoke":
            return 70;
        case "blackpool fc":
        case "blackpool":
            return 336;
        case "cardiff city fc":
        case "cardiff city":
        case "cardiff":
            return 715;
        case "birmingham city fc":
        case "birmingham city":
        case "birmingham":
            return 332;
        case "bristol city fc":
        case "bristol city":
        case "bristol":
            return 387;
        case "hull city afc":
        case "hull city":
        case "hull":
            return 322;
        case "reading fc":
        case "reading":
            return 355;
        case "barnsley fc":
        case "barnsley":
            return 357;
        case "derby county fc":
        case "derby county":
        case "derby":
            return 342;
        case "peterborough united fc":
        case "peterborough united":
        case "peterborough":
            return 1077;
        // Ligue 1 Teams
        case "paris saint-germain fc":
        case "psg":
            return 524;
        case "olympique de marseille":
        case "marseille":
            return 516;
        case "stade rennais fc 1901":
        case "stade rennais":
        case "rennes":
            return 529;
        case "rc strasbourg alsace":
        case "strasbourg":
        case "strasbourg alsace":
            return 576;
        case "ogc nice":
        case "nice":
            return 522;
        case "as monaco fc":
        case "as monaco":
        case "monaco":
            return 548;
        case "lille ocs":
        case "lille":
            return 521;
        case "racing club de lens":
        case "rc lens":
        case "lens":
            return 546;
        case "fc nantes":
        case "nantes":
            return 543;
        case "olympique lyonnais":
        case "lyon fc":
        case "lyon":
            return 523;
        case "montpellier hsc":
        case "montpellier":
            return 518;
        case "stade brestois 29":
        case "stade brestois":
        case "brest":
            return 512;
        case "stade de reims":
        case "reims fc":
        case "reims":
            return 547;
        case "angers sco":
        case "angers":
            return 532;
        case "es troyes ac":
        case "troyes":
        case "es troyes":
            return 531;
        case "fc lorient":
        case "lorient":
            return 336;
        case "clermont foot 63":
        case "clermont foot":
        case "clermont":
            return 541;
        case "as saint-étienne":
        case "as saint étienne":
        case "as saint-etienne":
        case "as saint etienne":
        case "saint-étienne":
        case "saint étienne":
        case "saint-etienne":
        case "saint etienne":
            return 527;
        case "fc girondins de bordeaux":
        case "bordeaux":
        case "girondins de bordeaux":
            return 526;
        case "fc metz":
        case "metz":
            return 545;
        default:
            alert("Club not found");
            return "";
    };
};