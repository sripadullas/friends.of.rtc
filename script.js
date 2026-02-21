const sheetURL = "YOUR_GOOGLE_SHEET_CSV_LINK";

fetch(sheetURL)
.then(response => response.text())
.then(data => {
    document.getElementById("sheet-data").innerHTML =
        "<pre>" + data + "</pre>";
});