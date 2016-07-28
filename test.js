var a = (function () {
    function a() {
    }
    return a;
}());
var b = (function () {
    function b() {
    }
    b.z = new a[20];
    return b;
}());
