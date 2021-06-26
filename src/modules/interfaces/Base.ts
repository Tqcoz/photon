export interface Base {
  name: string;
  setName: (name: string) => {

  };
  id: string;
  createdAt: number;
  delete: () => {

  };
  deleted: boolean;
  deletable: boolean;
}