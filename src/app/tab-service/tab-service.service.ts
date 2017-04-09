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
                if (this.fulltab.tabs[this.fulltab.currentLine].eString.length >= this.fulltab.lineLength) {
                    this.fulltab.tabs.push({
                        heString : "e | -",
                        bString : "B | -",
                        gString : "G | -",
                        dString : "D | -",
                        aString : "A | -",
                        eString : "E | -",
                    })
                    this.fulltab.currentLine++;
                    this.fulltab.lines++;
                }
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
                    this.fulltab.lineLength = parseInt(tbuffer.join("")) + 5;
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

    reconfigureTabs() {
        let full = {
            heString : "",
            bString : "",
            gString : "",
            dString : "",
            aString : "",
            eString : "",
        }

        for (let i = 0; i < this.fulltab.tabs.length; i++) {
            full.heString += this.fulltab.tabs[i].heString.substr(4);
            full.bString += this.fulltab.tabs[i].bString.substr(4);
            full.gString += this.fulltab.tabs[i].gString.substr(4);
            full.dString += this.fulltab.tabs[i].dString.substr(4);
            full.aString += this.fulltab.tabs[i].aString.substr(4);
            full.eString += this.fulltab.tabs[i].eString.substr(4);
        }

        this.fulltab.tabs = [];
        this.fulltab.currentLine = -1;
        this.fulltab.lines = -1;
        for (let i = 0; i < full.eString.length; i+=this.fulltab.lineLength) {
            this.fulltab.currentLine++;
            this.fulltab.lines++;
            this.fulltab.tabs.push({
                heString : "e | -",
                bString : "B | -",
                gString : "G | -",
                dString : "D | -",
                aString : "A | -",
                eString : "E | -",
            })
            this.fulltab.tabs[this.fulltab.currentLine].heString += full.heString.substr(i, i+this.fulltab.lineLength);
            this.fulltab.tabs[this.fulltab.currentLine].bString += full.bString.substr(i, i+this.fulltab.lineLength);
            this.fulltab.tabs[this.fulltab.currentLine].gString += full.gString.substr(i, i+this.fulltab.lineLength);
            this.fulltab.tabs[this.fulltab.currentLine].dString += full.dString.substr(i, i+this.fulltab.lineLength);
            this.fulltab.tabs[this.fulltab.currentLine].aString += full.aString.substr(i, i+this.fulltab.lineLength);
            this.fulltab.tabs[this.fulltab.currentLine].eString += full.eString.substr(i, i+this.fulltab.lineLength);
            
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