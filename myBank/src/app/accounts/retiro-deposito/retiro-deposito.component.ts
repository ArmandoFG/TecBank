import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Cuenta } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-retiro-deposito',
  templateUrl: './retiro-deposito.component.html',
  styleUrls: ['./retiro-deposito.component.css']
})
export class RetiroDepositoComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
