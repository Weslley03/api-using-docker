import { randomUUID } from "crypto";

export interface IUserDTO {
  email: string;
  name: string;
};

class User {
  id?: string; 
  email!: string; 
  name!: string; 
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if(!this.id) {
      this.id = randomUUID();
    };
  };
};

export { User };