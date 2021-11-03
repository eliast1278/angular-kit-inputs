import {Input, NgModule} from "@angular/core";
import {CkInputTextComponent} from "./ck-input-text/ck-input-text.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CkInputTextComponent],
  imports: [
    CommonModule
  ],
  exports: [CkInputTextComponent]
})
export class CkInputTextModule {
}
