var aText = new Array(
    " ",
    "<span style='font-weight: bold; color: black;'>Network Architect</span> <i>(August 2022 - October 2022)</i><br><span style='font-weight: bold; color: black;'>Cisco thingQbator</span>",
    "-- Devised efficient network architecture, enhancing LANs, WANs, and components for organizational needs. <br> --Led vendor selection, cutting costs through optimal networking equipment and services."
);

var iSpeed = 15;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;
var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout(typewriter, 0); // Reduce the initial delay to 0
        }
    } else {
        setTimeout(typewriter, iSpeed);
    }
}

typewriter();
