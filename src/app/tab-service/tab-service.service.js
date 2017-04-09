"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TabService = (function () {
    function TabService() {
        this.tabs = [
            {
                lineLength: 30,
                heString: "e | -",
                bString: "B | -",
                gString: "G | -",
                dString: "D | -",
                aString: "A | -",
                eString: "E | -",
            }
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
                    this.tabs[0].eString += tbuffer.join("");
                    for (var i = 0; i < entryLength; i++) {
                        this.tabs[0].aString += "-";
                        this.tabs[0].dString += "-";
                        this.tabs[0].gString += "-";
                        this.tabs[0].bString += "-";
                        this.tabs[0].heString += "-";
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
                }
                else {
                    tbuffer.push(aTabs[tab]);
                }
            }
        }
    };
    return TabService;
}());
exports.TabService = TabService;
//# sourceMappingURL=tab-service.service.js.map