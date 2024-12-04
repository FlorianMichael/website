const widgetIds = ["gh-stats", "gh-streak"];
let loadedWidgets = 0;

function checkWidgets() {
    loadedWidgets++;
    if (loadedWidgets === widgetIds.length) {
        document.getElementById("gh-widgets").style.display = "block";
    }
}

widgetIds.forEach(id => {
    const img = document.getElementById(id);

    if (img.complete) {
        checkWidgets();
    } else {
        img.onload = () => {
            checkWidgets();
        };
        img.onerror = () => {
            console.error(`Failed to load widget: ${id}`);
            checkWidgets();
        };
    }
});