import { Component, Input } from "@angular/core";

@Component({
    selector: 'fb-vertical-card',
    templateUrl:'vertical.card.component.html',
    styleUrls:['vertical.card.component.css']
})


export class VerticalCardComponent{
    @Input() img: string;
    @Input() user: string;
    @Input() update: string;

    constructor() {
        this.img = "";
        this.user = "User Story";
        this.update = "Updated just now";
    }
}