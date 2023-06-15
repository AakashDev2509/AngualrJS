import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
    message: string="This is a test message";

    city_list:string[] = ["Pune","Mumbai", "Chennai"];
}
