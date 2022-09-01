var rows = prompt("Please enter", "");
//calling fun
printPatter(rows);
//declare and defined

function printPatter(rows) {
    for (var i = 0; i <= rows; i++) {
        for (var j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br/>");
    }

    for (var i = rows; i >= 1; i--) {
        for (var j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br/>");
    }
}