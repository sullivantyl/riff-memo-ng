export class TabService {

    get() {
        return this.fulltab.tabs;
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
                    this.fulltab.tabs[this.fulltab.currentLine].eString += tbuffer.join("");
                    tbuffer = [];
                    for (let i = 0; i < entryLength; i++) {
                        this.fulltab.tabs[this.fulltab.currentLine].aString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].dString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].gString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].bString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].heString += "-";
                    }
                } else if (aTabs[tab] === "A") {
                    let entryLength = tbuffer.length;
                    this.fulltab.tabs[this.fulltab.currentLine].aString += tbuffer.join("");
                    tbuffer = [];
                    for (let i = 0; i < entryLength; i++) {
                        this.fulltab.tabs[this.fulltab.currentLine].eString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].dString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].gString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].bString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].heString += "-";
                    }
                } else if (aTabs[tab] === "D") {
                    let entryLength = tbuffer.length;
                    this.fulltab.tabs[this.fulltab.currentLine].dString += tbuffer.join("");
                    tbuffer = [];
                    for (let i = 0; i < entryLength; i++) {
                        this.fulltab.tabs[this.fulltab.currentLine].aString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].eString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].gString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].bString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].heString += "-";
                    }
                } else if (aTabs[tab] === "G") {
                    let entryLength = tbuffer.length;
                    this.fulltab.tabs[this.fulltab.currentLine].gString += tbuffer.join("");
                    tbuffer = [];
                    for (let i = 0; i < entryLength; i++) {
                        this.fulltab.tabs[this.fulltab.currentLine].aString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].dString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].eString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].bString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].heString += "-";
                    }
                } else if (aTabs[tab] === "B") {
                    let entryLength = tbuffer.length;
                    this.fulltab.tabs[this.fulltab.currentLine].bString += tbuffer.join("");
                    tbuffer = [];
                    for (let i = 0; i < entryLength; i++) {
                        this.fulltab.tabs[this.fulltab.currentLine].aString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].dString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].gString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].eString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].heString += "-";
                    }
                } else if (aTabs[tab] === "e") {
                    let entryLength = tbuffer.length;
                    this.fulltab.tabs[this.fulltab.currentLine].heString += tbuffer.join("");
                    tbuffer = [];
                    for (let i = 0; i < entryLength; i++) {
                        this.fulltab.tabs[this.fulltab.currentLine].aString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].dString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].gString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].bString += "-";
                        this.fulltab.tabs[this.fulltab.currentLine].eString += "-";
                    }
                } else if (aTabs[tab] === "L") {

                } else {
                    if (aTabs[tab] !== " ") {
                        tbuffer.push(aTabs[tab]);
                    } else {
                        tbuffer.push("-");
                    }
                }
            }
        }
        
    }

    fulltab = {
        lineLength: 30,
        lines: 0,
        currentLine: 0,
        tabs: [
            {
                heString : "e | -",
                bString : "B | -",
                gString : "G | -",
                dString : "D | -",
                aString : "A | -",
                eString : "E | -",
            }
        ]
    }
}