import { Component, Input } from "@angular/core";

@Component({
    selector:'fb-rightnavbar',
    templateUrl:'rightnavbar.component.html',
    styleUrls:['rightnavbar.component.css']
})

export class RightNavBarComponent{
    @Input() img: string;
    @Input() title: string;
    @Input() name: string;

    constructor() {
        this.img = "";
        this.title = "";
        this.name = "";
    }
}
