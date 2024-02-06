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
      {nom:"Documents", icon:"document-text", route:"tab1"},
      {nom:"Acceuil", icon:"home", route:"tab2"},
      {nom:"Paiements", icon:"receipt", route:"tab3"},
      {nom:"Utilisateurs", icon:"people", route:"utilisateurs"},
      {nom:"Validations", icon:"people", route:"traitement"},
    ]
  }

}
