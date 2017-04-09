import { Component } from '@angular/core';

import { TabService } from '../tab-service/tab-service.service';

@Component({
    selector: 'tab-entry',
    templateUrl: './tab-entry.component.html'
})

export class TabEntryComponent{
    userInput : string;
    constructor(private tabService : TabService) {}

    ngOnInit() {
        this.userInput = null;
    }

    onSubmit(tabs : string, st : HTMLInputElement) {
        st.value = null;
        this.tabService.add(tabs);
    }
}