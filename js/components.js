/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        var versions = vkeys.map(function (k) {
            var vdata = lib.versions[k];
            var zip = vdata.zipball_url;
            return React.createElement("span", {"className": "label label-success vspan"}, k);
            //return <button type="button" data-disable="true" className="btn btn-sm btn-default">{k}</button>
        });
        var header = React.createElement("h4", {"className": "list-group-item-heading"}, name);
        if (homepage != "") {
            header = React.createElement("h4", {"className": "list-group-item-heading"}, React.createElement("a", {"href": homepage}, name));
        }
        return React.createElement("div", {"className": "list-group-item"}, React.createElement("p", {"className": "pullright"}, React.createElement("button", {"type": "button", "className": "btn btn-default btn-sm"}, "Stars: ", stars)), header, React.createElement("p", {"className": "list-group-item-text"}, this.props.library.description), React.createElement("p", null, React.createElement("div", {"className": "btn-group", "role": "group", "aria-label": "..."}, versions)));
    };
    return Result;
})(React.Component);
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
                if (inname) {
                    _this.results.push(lib);
                }
            });
            this.results = this.results.sort(function (a, b) {
                return b.stars - a.stars;
            });
            // TODO: Set results
            console.log("Should search for term ", term);
            console.log("Results: ", this.results);
        }
        //console.log("New state", this);
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
        //console.log("Mounted");
        var _this = this;
        // TODO: Make a prop
        var source = "http://impact.github.io/impact_index.json";
        //console.log("Loading");
        $.get(source, function (result) {
            _this.setState(new ImpactState(_this.state.term, result));
            console.log("Loaded");
        });
    };
    Impact.prototype.handleChange = function (event) {
        //console.log("this = ", this);
        //console.log("this.state = ", this.state);
        //console.log("Change: ", event);
        var term = event.target.value;
        //console.log("Term = ", term);
        //console.log("Current state = ", this.state);
        this.setState(new ImpactState(term, this.state.index));
    };
    Impact.prototype.render = function () {
        console.log("State at render: ", this.state);
        var term = this.state.term;
        console.log("Rendering with term ", term);
        var relems = this.state.results.map(function (result) {
            return React.createElement(Result, {"library": result});
        });
        return (React.createElement("div", {"className": "container-fluid"}, React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col-lg-12 centered"}, React.createElement("img", {"src": "img/logo_glossy.svg"})), React.createElement("div", {"className": "col-lg-4 col-lg-offset-4 centered"}, React.createElement("div", {"className": "input-group"}, React.createElement("input", {"type": "text", "className": "form-control", "value": term, "placeholder": "Search for...", "onChange": this.handleChange.bind(this)}), React.createElement("span", {"className": "input-group-btn"}, React.createElement("button", {"className": "btn btn-default", "type": "button"}, React.createElement("span", {"className": "glyphicon glyphicon-search"})))))), React.createElement("div", {"className": "list-group col-lg-8 col-lg-offset-2 rgroup"}, relems)));
    };
    return Impact;
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