import { SocketHandler } from '../SocketHandler';
import { User } from '../User';
import { Channel } from '../Objects/Channel';
export interface MessageHandler extends SocketHandler {
  content: string;
  author: User;
  attachments: [any],
  postedAt: Number,
  edited: Number,
  embeds: [any],
  channel: Channel
}