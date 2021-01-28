import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimpleChildComponent } from "./simple-child.component";

@NgModule({
  imports: [CommonModule],
  declarations: [SimpleChildComponent],
  exports: [SimpleChildComponent]
})
export class SimpleChildModule {}
