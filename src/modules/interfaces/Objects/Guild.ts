import { Channel } from "./Channel";
import { Base } from '../Base';

export interface Guild extends Base {
  channels: [Channel],
  
}