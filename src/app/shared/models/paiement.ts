import { Document } from "./document";
import { Recu } from "./recu";

export class Paiement {
  id!: number;
  montant!: number;
  datePaiement!: Date;
  dateCreation!: Date;
  facture!: Document;
  recu!: Recu;
}
