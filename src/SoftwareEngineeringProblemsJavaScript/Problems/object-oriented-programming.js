exports.Jessie = Jessie;

// Jessie =============================================================
/* Constructor/Prototype pattern */
function Jessie(hostname) {
    this.hostname = hostname;
    this.createDate = new Date();
}

Jessie.prototype = {
    version: 8.2,
    releaseDate: new Date(2015, 8, 5, 0, 0, 0, 0),
}

Object.defineProperty(Jessie.prototype, "constructor", {
    enumerable: false,
    value: Jessie
});

Object.defineProperty(Jessie.prototype, "OSName", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: "Debian/Jessie"
});
// End Jessie =========================================================