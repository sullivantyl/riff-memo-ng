export class TabService {
    get() {
        return this.tabs;
    }
    add(tabEntry : any) {
        this.parseTabs(tabEntry);
    }

    parseTabs(tabEntry : any) {
        let tbuffer = [];
        let aTabs = Array.from(tabEntry);
        if (aTabs[0] === "\""){

        } else if (aTabs[0] === "U") {

        } else if (aTabs[0] === "C") {

        } else {
            for (let tab in aTabs) {
                if (aTabs[tab] === "E") {
                    let entryLength = tbuffer.length;
                    this.tabs[0].eString += tbuffer.join("");
                    for (let i = 0; i < entryLength; i++) {
                        this.tabs[0].aString += "-";
                        this.tabs[0].dString += "-";
                        this.tabs[0].gString += "-";
                        this.tabs[0].bString += "-";
                        this.tabs[0].heString += "-";
                    }
                } else if (aTabs[tab] === "A") {

                } else if (aTabs[tab] === "D") {
                    
                } else if (aTabs[tab] === "G") {
                    
                } else if (aTabs[tab] === "B") {
                    
                } else if (aTabs[tab] === "e") {
                    
                } else if (aTabs[tab] === "L") {
                    
                } else {
                    tbuffer.push(aTabs[tab]);
                }
            }
        }
    }
    tabs = [
        {
            lineLength : 30,
            heString : "e | -",
            bString : "B | -",
            gString : "G | -",
            dString : "D | -",
            aString : "A | -",
            eString : "E | -",
        }
    ]  
}