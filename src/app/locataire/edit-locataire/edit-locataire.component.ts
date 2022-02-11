import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LocataireService } from 'src/app/service/locataire.service';

@Component({
  selector: 'app-edit-locataire',
  templateUrl: './edit-locataire.component.html',
  styleUrls: ['./edit-locataire.component.css']
})
export class EditLocataireComponent implements OnInit {
  locataireId: string="";
  locataire:any;
  addLocataireForm = new FormGroup({});

  constructor(private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder, 
    private locataireService: LocataireService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  
    this.addLocataireForm = this.formBuilder.group({
     'name': new FormControl(''),
     'phone': new FormControl(''),
     'dateEntree': new FormControl(''),
     'dateSortie': new FormControl('')
   })
   console.log("init form");
   
    this.activatedRoute.params.subscribe(data =>{
      console.log("check params");
      
      this.locataireId = data['id'];
      console.log("locataire id: "+this.locataireId);
      
     this.locataireService.viewLocataire(this.locataireId)
     .subscribe(locataire =>{
       this.locataire = locataire;
       this.addLocataireForm.patchValue({
         name:this.locataire.name,
         phone:this.locataire.phone,
         dateEntree:this.locataire.dateEntree,
         dateSortie:this.locataire.dateSortie
       })
     })
    })
  }

  save(){
    console.log("update");
    
    this.locataireService.updateLocataire(this.locataireId,this.addLocataireForm.value)
    .subscribe(data =>{
      console.log(data);
      console.log("updated");
      this._snackBar.open('Locataire updated');
    });

  }

}
