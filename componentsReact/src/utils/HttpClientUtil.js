export default {

    post(url, body) {
        return fetch(url, { method: "post",  body: body });
    }
}