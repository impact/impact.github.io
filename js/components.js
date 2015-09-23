/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/semver/semver.d.ts" />
/// <reference path="./Index.tsx" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function SortLibrary(a, b) {
    return b.stars - a.stars;
}
/*
function SortVersion(a: Version, b: Version) {
    if (semver.gt(a, b)) return 1;
    if (semver.lt(a, b)) return -1;
    return 0;
}
*/
var ImpactState = (function () {
    function ImpactState(term, index) {
        var _this = this;
        this.term = term;
        this.index = index;
        // TODO: Compute results
        this.results = [];
        // If we have an index and a term, compute results
        if (index != null && term != "" && term != null) {
            var t = term.toLowerCase();
            this.index.libraries.forEach(function (lib) {
                var inname = lib.name.toLowerCase().indexOf(t) > -1;
                var indesc = lib.description.toLowerCase().indexOf(t) > -1;
                if (inname || indesc) {
                    _this.results.push(lib);
                }
            });
            this.results.sort(SortLibrary);
        }
    }
    return ImpactState;
})();
var Impact = (function (_super) {
    __extends(Impact, _super);
    function Impact() {
        _super.call(this);
        this.state = new ImpactState("", null);
    }
    Impact.prototype.componentDidMount = function () {
        var _this = this;
        // TODO: Make a prop
        var source = "http://impact.github.io/impact_index.json";
        $.get(source, function (result) {
            _this.setState(new ImpactState(_this.state.term, result));
        });
    };
    Impact.prototype.handleChange = function (event) {
        var term = event.target.value;
        this.setState(new ImpactState(term, this.state.index));
    };
    Impact.prototype.render = function () {
        var term = this.state.term;
        var relems = this.state.results.map(function (result) {
            var key = result.name;
            return React.createElement(Result, {"key": key, "library": result});
        });
        return (React.createElement("div", {"className": "container-fluid"}, React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col-lg-10 col-lg-offset-1 centered"}, React.createElement("img", {"id": "logo", "src": "img/logo_glossy.svg"})), React.createElement("div", {"className": "col-lg-4 col-lg-offset-4 col-md-8 col-md-offset-2 col-sm-12 centered"}, React.createElement("div", {"className": "input-group"}, React.createElement("input", {"type": "text", "className": "form-control", "value": term, "placeholder": "Search for...", "onChange": this.handleChange.bind(this)}), React.createElement("span", {"className": "input-group-btn"}, React.createElement("button", {"className": "btn btn-default", "type": "button"}, React.createElement("span", {"className": "glyphicon glyphicon-search"})))))), React.createElement("div", {"className": "list-group col-lg-6 col-lg-offset-3 rgroup col-md-12"}, relems)));
    };
    return Impact;
})(React.Component);
/// <reference path="./Index.tsx" />
var Result = (function (_super) {
    __extends(Result, _super);
    function Result() {
        _super.call(this);
        this.state = {};
    }
    Result.prototype.render = function () {
        var lib = this.props.library;
        var name = lib.name;
        var homepage = lib.homepage;
        var stars = lib.stars;
        var vkeys = Object.keys(lib.versions);
        //var vlist = vkeys.map((k) => lib.versions[k]).sort(SortVersion)
        var versions = vkeys.map(function (k) {
            var vdata = lib.versions[k];
            var zip = vdata.zipball_url;
            return React.createElement("div", {"key": k, "className": "label label-success vspan breaker"}, k);
        });
        var header = React.createElement("h4", {"className": "list-group-item-heading"}, name);
        if (homepage != "") {
            header = React.createElement("h4", {"className": "list-group-item-heading"}, React.createElement("a", {"href": homepage}, name));
        }
        return React.createElement("div", {"className": "list-group-item"}, React.createElement("p", {"className": "pullright"}, React.createElement("button", {"type": "button", "className": "btn btn-default btn-sm"}, "Stars: ", stars)), header, React.createElement("p", {"className": "list-group-item-text"}, this.props.library.description), React.createElement("p", {"className": "centered"}, versions));
    };
    return Result;
})(React.Component);
/// <reference path="../typings/react/react-global.d.ts" />
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
//# sourceMappingURL=components.js.map