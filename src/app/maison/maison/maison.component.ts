import { Component, OnInit } from '@angular/core';
import { MaisonService } from 'src/app/service/maison.service';

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.css']
})
export class MaisonComponent implements OnInit {
listMaison: any;
  constructor(private maisonService: MaisonService) { }

  ngOnInit(): void {
    this.listMaison = this.maisonService.listMaisons()
    .subscribe(data =>{
      this.listMaison = data;
    });
  }

}
