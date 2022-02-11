import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocataireService } from 'src/app/service/locataire.service';

@Component({
  selector: 'app-list-locataires',
  templateUrl: './list-locataires.component.html',
  styleUrls: ['./list-locataires.component.css']
})
export class ListLocatairesComponent implements OnInit {
listLocataires: any;
  constructor(private locataireService:LocataireService) { }

  ngOnInit(): void {
    this.listLocataires = this.locataireService.listLocataires()
    .subscribe(data =>{
      this.listLocataires = data;
    });
  }

}
