import { Base } from '../Base';
export interface Role extends Base {
  
  permissions: number;
  color: number;
  setColor: () => {};
  priority: number;
  setPriority: (priority: number) => {};
  
}