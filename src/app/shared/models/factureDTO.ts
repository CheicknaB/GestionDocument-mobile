import { Fournisseur } from "./fournisseur";
import { User } from "./user";

export class FactureDto {
  id!: number;
  bytes!: number[];
  montantTotal!: number;
  numeroFacture!: number;
  file!: File | string;
  name!: string;
  type!: string;
  reste: number = 0;
  base64Image!: string;
  etat!: string;
  fournisseur!: Fournisseur;
  utilisateur!: User;
  filePath!: string;
  // agent!: User;
}