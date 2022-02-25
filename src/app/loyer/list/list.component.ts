import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AssetService } from 'src/app/service/asset.service';
import { LocataireService } from 'src/app/service/locataire.service';
import { LoyerService } from 'src/app/service/loyer.service';
import { MaisonService } from 'src/app/service/maison.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
loyers:any;
listLocataires: any;
listAssets: any;
listMaisons: any;
  constructor(private loyerServices:LoyerService, 
              private locataireService: LocataireService,
              private assetService: AssetService) { }

  ngOnInit(): void {
    // get list of assets
    // get list of locataires
    // get listLoyer where asset.listLoyer.id = listLocataires.listLoyer.id

   this.assetService.listAssets()
   .subscribe(data =>{
      this.listAssets = data; 
      console.log("1.assets"+this.listAssets);
      
    });


    this.locataireService.listLocataires()
    .subscribe(data =>{
       this.listLocataires = data;
       console.log("2.listLocataires: "+this.listLocataires);
     });


    this.loyers = this.loyerServices.listAllLoyers()
    .subscribe(data =>{
      this.loyers = data;

      console.log("4. loyers: "+this.loyers);
    });

  }

}
function x(x: any, arg1: (any: any) => any): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

