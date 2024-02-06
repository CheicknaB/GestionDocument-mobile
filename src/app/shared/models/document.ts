import { Fournisseur } from "./fournisseur";
import { User } from "./user";

export class Document {
  id!: number;
  montantTotal!: number;
  numeroFacture!: number;
  file!: File | string;
  name!: string;
  type!: string;
  etat!: string;
  fournisseur!: Fournisseur;
  utilisateur!: User;
  filePath!: string;
  // agent!: User;
}
