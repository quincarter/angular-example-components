import { Component, Input, OnInit } from "@angular/core";
import { BookType } from "../books";

@Component({
  selector: "app-simple-child",
  templateUrl: "./simple-child.component.html",
  styleUrls: ["./simple-child.component.css"]
})
export class SimpleChildComponent implements OnInit {
  @Input() author: string;
  @Input() name: string;
  @Input() bookType: BookType;

  constructor() {}

  ngOnInit() {}
}
