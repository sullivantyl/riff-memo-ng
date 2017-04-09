import { Component } from '@angular/core';

import { TabService } from '../tab-service/tab-service.service';

@Component({
    selector: 'tab-entry',
    templateUrl: './tab-entry.component.html'
})

export class TabEntryComponent{
    userInput : any;
    constructor(private tabService : TabService) {}

    ngOnInit() {
        this.userInput = "";
    }

    onSubmit(tabs : any) {
        this.tabService.add(tabs);
        this.userInput = "";
    }
}