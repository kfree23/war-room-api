async function getTeams() {
    const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams");

    if(!response.ok) {
            throw new Error(`Something went wrong ${response.status}`);
        }
        const data = await response.json();

    return data.sports[0].leagues[0].teams;
}

async function getRoster(teamId: string) {
    
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${teamId}/roster`);

        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }

        const data = await response.json()
        return data.athletes;
}

async function getPlayer(athleteId: string) {
    const response = await fetch(`https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${athleteId}`)

        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }
        const data = await response.json()
        return data.athlete;
}

export { getTeams, getRoster, getPlayer };