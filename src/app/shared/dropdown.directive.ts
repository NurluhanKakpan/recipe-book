import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[dropdown]'
})

export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
