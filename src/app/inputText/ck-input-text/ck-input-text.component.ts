import {Component, ElementRef, HostBinding, Input, ViewChild} from "@angular/core";

@Component({
  selector: "c-k-input-text",
  templateUrl: 'ck-input-text.component.html',
  styleUrls: ['ck-input-text.component.scss'],

})

export class CkInputTextComponent {
  constructor() {
    this.randomStr()
  }

  @Input() id: string = 'reza';
  @Input() label: string = "";

  @Input() state: "regular" | "success" | "error" | "warning" = "regular";
  // @Input() valueAlignment: "right" | "left" = "right";
  @Input() placeholder: string | null = null;

  @HostBinding('class.has-icon') @Input() inlineIcon: boolean = false;
  @HostBinding('class.disabled') @Input() disabled: boolean = false;
  @HostBinding('class.has-innerLabel') @Input() labelPos: "in" | "out" = "out";

  @ViewChild("container")
  set containerElement(v: ElementRef) {
    if (v?.nativeElement.getElementsByTagName("input")) {
      v.nativeElement.getElementsByTagName("input")[0].id = this.id;
      if (this.disabled) {
        v.nativeElement.getElementsByTagName("input")[0].disabled = true
      }
    }
  }

  randomStr() {
    this.id = Math.random().toString(36).substr(2, 9);
  }


}
