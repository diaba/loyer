import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MaisonService } from 'src/app/service/maison.service';

@Component({
  selector: 'app-edit-maison',
  templateUrl: './edit-maison.component.html',
  styleUrls: ['./edit-maison.component.css']
})
export class EditMaisonComponent implements OnInit {
  maisonId: string="";
  maison:any;
  addMaisonForm = new FormGroup({});

  constructor(private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder, 
    private maisonService: MaisonService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  
    this.addMaisonForm = this.formBuilder.group({
     'name': new FormControl(''),
     'localisation': new FormControl('')
   })
   console.log("init form");
   
    this.activatedRoute.params.subscribe(data =>{
      console.log("check params");
      
      this.maisonId = data['id'];
      console.log("locataire id: "+this.maisonId);
      
     this.maisonService.viewMaison(this.maisonId)
     .subscribe(maison =>{
       this.maison = maison;
       this.addMaisonForm.patchValue({
         name:this.maison.name,
         phone:this.maison.localisation
       })
     })
    })
  }

  save(){
    console.log("update");
    
    this.maisonService.updateMaison(this.maisonId,this.addMaisonForm.value)
    .subscribe(data =>{
      console.log(data);
      console.log("updated");
      this._snackBar.open('Maison updated');
    });

  }

}
