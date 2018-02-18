export default function autoExecute() {
    if (!("Promise" in window)) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js";
        head.appendChild(script);
    }
}
//# sourceMappingURL=PromisePolyfill.js.map