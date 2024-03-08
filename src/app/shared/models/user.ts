export class User {
  id!: number;
  username!: string;
  nom!: string;
  prenom!: string;
  password!: string;
  email!: string;
  roles: any;

  constructor() {
      this.roles = [];
  }

  hasRole(roleName: string): boolean {
      return this.roles.some((role: any) => role.libelle === roleName);
  }
}

  