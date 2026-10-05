async function getTeams() {
    const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams");

    if(!response.ok) {
            throw new Error(`Something went wrong ${response.status}`);
        }
        const data = await response.json();

    return data.sports[0].leagues[0].teams;
}

async function getTeam(teamId: string) {
    
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${teamId}/roster`);

        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }

        const data = await response.json()
        return data.athletes;
}

export { getTeams, getTeam };