"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = void 0;
const serialize = (obj, prefix) => {
    const str = [];
    let p;
    for (p in obj) {
        if (obj.hasOwnProperty(p)) {
            const k = prefix ? prefix + '[' + p + ']' : p, v = obj[p];
            str.push(v !== null && typeof v === 'object'
                ? exports.serialize(v, k)
                : encodeURIComponent(k) + '=' + encodeURIComponent(v));
        }
    }
    return str.join('&');
};
exports.serialize = serialize;
//# sourceMappingURL=index.js.map