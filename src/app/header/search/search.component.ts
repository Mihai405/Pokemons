import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { alphabetsRequiredValidator } from '../../shared/alphabetsRequired.validator'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl = new FormControl('');

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.searchControl = this.fb.control('',[Validators.minLength(3), alphabetsRequiredValidator])
  }

}
