import { User } from "./User";

export interface SocketMessage {
  state: number;
  payload: {
    client: User,
    [key: string]: any
  }  
}