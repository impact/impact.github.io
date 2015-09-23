/// <reference path="../typings/react/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SearchBoxData = (function () {
    function SearchBoxData(term) {
        this.term = term;
    }
    return SearchBoxData;
})();
var SearchBox = (function (_super) {
    __extends(SearchBox, _super);
    function SearchBox() {
        _super.call(this);
        this.state = new SearchBoxData("");
    }
    SearchBox.prototype.showComponent = function () {
        React.render((React.createElement(SearchBox, null)), document.getElementById('content'));
    };
    SearchBox.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("span", null, "Hello")));
    };
    return SearchBox;
})(React.Component);
//# sourceMappingURL=SearchBox.js.map