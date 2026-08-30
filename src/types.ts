export interface TeamEntry {
    team: {
        displayName: string,
        logos: {
            href: string
        } []
    }
    stats: {
        name: string,
        value: number
    } []
}