import { Fournisseur } from "./fournisseur";
import { User } from "./user";

export class Document {
  id!: number;
  bytes!: number[];
  montantTotal!: number;
  numeroFacture!: number;
  file!: File | string;
  name!: string;
  reste: number = 0;
  type!: string;
  etat!: string;
  base64Image!: string;
  extension!: string;
  fournisseur!: Fournisseur;
  utilisateur!: User;
  filePath!: string;
  fileName!: string;
  // agent!: User;
}
