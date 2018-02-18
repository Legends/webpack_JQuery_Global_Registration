export default function autoExecute() {
    if (!("Promise" in window)) { // gets executed when Promise is not available, i.e. <= IE11
        const head = document.getElementsByTagName("head")[0];
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js";
        head.appendChild(script as HTMLScriptElement);
    }
}
