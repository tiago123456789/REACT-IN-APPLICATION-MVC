export default class UrlUtils {

    constructor(url) {
        this._url = url;
        this._urlParams = new URLSearchParams(window.location.search);
    }

    getQuerystring(key) {
        return this._urlParams.get(key);
    }
}