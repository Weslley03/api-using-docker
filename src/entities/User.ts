import { randomUUID } from "crypto";

class User {
  id!: string; 
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