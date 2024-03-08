import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  menus : any;

  constructor() {}
  ngOnInit(): void {
    this.buildMenu();
  }

  buildMenu(){
    this.menus = [
      {nom:"Documents", icon:"document-text", route:"tabs/tab1"},
      {nom:"Acceuil", icon:"home", route:"tabs/tab2"},
      {nom:"Paiements", icon:"receipt", route:"tabs/tab3"},
      {nom:"Utilisateurs", icon:"people", route:"tabs/utilisateurs"},
      {nom:"Validations", icon:"people", route:"tabs/traitement"},
      // {nom:"authentification", icon:"people", route:"authentification"},
    ]
  }

}
