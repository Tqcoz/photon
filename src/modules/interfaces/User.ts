import { Message } from "postcss";
import { Base } from './Base';
import { Channel } from './Objects/Channel';

export interface User extends Base{
    username: string,
    discriminator: string,
    guilds: Array<any>,
    email: string,
    messages: [Message]
    channels: [Channel]
}