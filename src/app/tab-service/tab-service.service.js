"use strict";
exports.__esModule = true;
var TabService = (function () {
    function TabService() {
        this.fulltab = {
            lineLength: 30,
            heString: "e | -",
            bString: "B | -",
            gString: "G | -",
            dString: "D | -",
            aString: "A | -",
            eString: "E | -"
        };
        this.tabs = [
            {}
        ];
    }
    TabService.prototype.get = function () {
        return this.tabs;
    };
    TabService.prototype.add = function (tabEntry) {
        this.parseTabs(tabEntry);
    };
    TabService.prototype.parseTabs = function (tabEntry) {
        var tbuffer = [];
        var aTabs = Array.from(tabEntry);
        if (aTabs[0] === "\"") {
        }
        else if (aTabs[0] === "U") {
        }
        else if (aTabs[0] === "C") {
        }
        else {
            for (var tab in aTabs) {
                if (aTabs[tab] === "E") {
                    var entryLength = tbuffer.length;
                    this.fulltab.eString += tbuffer.join("");
                    tbuffer = [];
                    for (var i = 0; i < entryLength; i++) {
                        this.fulltab.aString += "-";
                        this.fulltab.dString += "-";
                        this.fulltab.gString += "-";
                        this.fulltab.bString += "-";
                        this.fulltab.heString += "-";
                    }
                }
                else if (aTabs[tab] === "A") {
                }
                else if (aTabs[tab] === "D") {
                }
                else if (aTabs[tab] === "G") {
                }
                else if (aTabs[tab] === "B") {
                }
                else if (aTabs[tab] === "e") {
                }
                else if (aTabs[tab] === "L") {
                    this.fulltab.lineLength = parseInt(tbuffer.join(""));
                }
                else {
                    if (aTabs[tab] !== " ") {
                        tbuffer.push(aTabs[tab]);
                    }
                    else {
                        tbuffer.push("-");
                    }
                }
            }
            this.tabs = [];
            for (var i = 0; i < this.fulltab.eString.length; i + this.fulltab.lineLength + 1) {
                this.tabs.push({
                    heString: this.fulltab.heString.substr(i, this.fulltab.lineLength),
                    bString: this.fulltab.bString.substr(i, this.fulltab.lineLength),
                    gString: this.fulltab.gString.substr(i, this.fulltab.lineLength),
                    dString: this.fulltab.dString.substr(i, this.fulltab.lineLength),
                    aString: this.fulltab.aString.substr(i, this.fulltab.lineLength),
                    eString: this.fulltab.eString.substr(i, this.fulltab.lineLength)
                });
            }
        }
    };
    return TabService;
}());
exports.TabService = TabService;
