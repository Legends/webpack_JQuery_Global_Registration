import autoExecute from "./PromisePolyfill";
autoExecute();
import * as $ from "jquery";
// this plugin works because we use the ProviderPlugin to make $,jQuery globally available!
require("./jQueryPlugin-No-Module");
$.fn.test();
