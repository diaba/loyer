import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LocataireService } from 'src/app/service/locataire.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-locataire',
  templateUrl: './add-locataire.component.html',
  styleUrls: ['./add-locataire.component.css']
})
export class AddLocataireComponent implements OnInit {
addLocataireForm = new FormGroup({});

  constructor( private formBuilder: FormBuilder, 
               private locataireService: LocataireService,
               private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addLocataireForm = this.formBuilder.group({
      'name': new FormControl(''),
      'phone': new FormControl(''),
      'dateEntree': new FormControl('')
    })
  }
  create(){
    this.locataireService.create(this.addLocataireForm.value)
    .subscribe(data =>{
      console.log(data);
      this._snackBar.open('Locataire saved');
    });

  }

}
