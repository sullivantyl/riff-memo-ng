export class TabService {

    get() {
        return this.fulltab.tabs;
    }

    add(tabEntry : any) {
        this.parseTabs(tabEntry);
    }

    parseTabs(tabEntry : string) {
        let tbuffer = [];
        if (this.fulltab.tabs[this.fulltab.currentLine].eString.length >= this.fulltab.lineLength || tabEntry.startsWith("new")) {
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
            tabEntry = "";
        } else if (tabEntry.startsWith("delete")) {
            this.fulltab.tabs.pop();
            if (this.fulltab.tabs[0] === undefined) {
                this.fulltab.tabs.push({
                    heString : "e | -",
                    bString : "B | -",
                    gString : "G | -",
                    dString : "D | -",
                    aString : "A | -",
                    eString : "E | -",
                })
            } else {
                this.fulltab.currentLine--;
                this.fulltab.lines--;
            }
            tabEntry = "";
        } else if (tabEntry.startsWith('clear')) {
            while (this.fulltab.tabs[0] !== undefined) {
                this.fulltab.tabs.pop();
            }
            this.fulltab.tabs.push({
                heString : "e | -",
                bString : "B | -",
                gString : "G | -",
                dString : "D | -",
                aString : "A | -",
                eString : "E | -",
            })
            this.fulltab.currentLine = 0;
            this.fulltab.lines = 0;
            tabEntry = "";
        }
        let aTabs = Array.from(tabEntry);
        if (tabEntry === " ") {
            this.fulltab.tabs[this.fulltab.currentLine].eString += "-";
            this.fulltab.tabs[this.fulltab.currentLine].aString += "-";
            this.fulltab.tabs[this.fulltab.currentLine].dString += "-";
            this.fulltab.tabs[this.fulltab.currentLine].gString += "-";
            this.fulltab.tabs[this.fulltab.currentLine].bString += "-";
            this.fulltab.tabs[this.fulltab.currentLine].heString += "-"; 
        } else if (aTabs[0] === "\""){
            aTabs = tabEntry.replace("\"", '').replace("\"", '').split(" ");
            let max = 1;
            for (let tab in aTabs) {
                if (aTabs[tab].length > max) {
                    max = aTabs[tab].length;
                }
            }
            for (let tab in aTabs) {
                while (aTabs[tab].length < max) {
                    aTabs[tab] = "-".concat(aTabs[tab]);
                } if (aTabs[tab] !== null) {
                    aTabs[tab] += "-";
                }
            }
            let def = "";
            for (let i = 0; i <= max; i++) {
                def += "-";
            }
            this.fulltab.tabs[this.fulltab.currentLine].eString += aTabs[0] || def;
            this.fulltab.tabs[this.fulltab.currentLine].aString += aTabs[1] || def;
            this.fulltab.tabs[this.fulltab.currentLine].dString += aTabs[2] || def;
            this.fulltab.tabs[this.fulltab.currentLine].gString += aTabs[3] || def;
            this.fulltab.tabs[this.fulltab.currentLine].bString += aTabs[4] || def;
            this.fulltab.tabs[this.fulltab.currentLine].heString += aTabs[5] || def;

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
                    this.fulltab.lineLength = parseInt(tbuffer.join("")) + 5;
                    tbuffer = [];
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