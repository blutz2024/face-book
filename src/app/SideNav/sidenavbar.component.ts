import { Component, Input } from "@angular/core";

@Component({
    selector:'fb-sidenavbar',
    templateUrl:'sidenavbar.component.html',
    styleUrls:['sidenavbar.component.css']
})

export class SideNavBarComponent{
    @Input() img: string;
    @Input() title: string;
    @Input() caption: string;

    constructor() {
        this.img = "";
        this.title = "Home";
        this.caption = "";
    }
}