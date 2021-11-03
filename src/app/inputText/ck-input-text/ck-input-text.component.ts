import {Component, Directive, Input, OnInit, ViewChild, AfterViewInit, ElementRef} from "@angular/core";

@Component({
  selector: "c-k-input-text",
  templateUrl: 'ck-input-text.component.html',
  styleUrls: ['ck-input-text.component.scss'],

})
export class CkInputTextComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    console.log(this.inlineIcon)
  }

  @Input() id: string = 'reza';
  @Input() label: string = "";
  @Input() labelPos: "in" | "out" = "out";
  @Input() inlineIcon: boolean = false;
  @Input() state: "regular" | "success" | "error" | "warning" = "regular";
  @Input() valueAlignment: "right" | "left" = "right";
  @Input() placeholder: string | null = null;
  @Input() disabled: boolean = false;

  @ViewChild("container")
  set containerElement(v: ElementRef) {
    if(v?.nativeElement.getElementsByTagName("input")){
    v.nativeElement.getElementsByTagName("input")[0].id =this.id;

    }
  }


  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');

  }

}
