export interface User {
    username: string,
    discriminator: string,
    id: string,
    guilds: Array<any>,
    channels: Array<any>,
    email: string
}