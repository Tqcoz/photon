import { Base } from '../Base';
export interface Channel extends Base {
  permissions: number;
  type: 'thread' | 'chat';
  get: () => Channel;
}