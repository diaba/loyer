import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocataireService } from 'src/app/service/locataire.service';

@Component({
  selector: 'app-view-locataire',
  templateUrl: './view-locataire.component.html',
  styleUrls: ['./view-locataire.component.css']
})
export class ViewLocataireComponent implements OnInit {
  locataireId: string = '';
  locataire : any;

  constructor(private activatedRoute: ActivatedRoute, private locataireService: LocataireService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
     
      
      this.locataireId = data['id'];
      
     this.locataireService.viewLocataire(this.locataireId)
     .subscribe(locataire =>{
      console.log(data['id']+" "+ locataire);
       this.locataire = locataire;
     })
    })
  }

}
