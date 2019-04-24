console.error("wow ");
alert("hi");
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
}
