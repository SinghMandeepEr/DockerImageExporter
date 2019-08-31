import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dockerimage',
  templateUrl: './dockerimage.component.html',
  styleUrls: ['./dockerimage.component.scss']
})
export class DockerimageComponent implements OnInit {

  @Input() tag: string;
  @Input() repo: String;
  @Input() version: String;
  constructor() { }

  ngOnInit() {
  }

}
