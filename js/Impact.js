/// <reference path="../typings/react/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ImpactState = (function () {
    function ImpactState(term) {
        this.term = term;
    }
    return ImpactState;
})();
var Impact = (function (_super) {
    __extends(Impact, _super);
    function Impact() {
        _super.call(this);
        this.state = new ImpactState("");
    }
    Impact.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("span", null, "Impact")));
    };
    return Impact;
})(React.Component);
//# sourceMappingURL=Impact.js.map