var clone = require("../support/clone");
module.exports = function(opts, node, type, value) {
    var json;
    if(node == null) {
        if(opts.materialized == true) {
            json = Object.create(null);
            json.$type = "sentinel";
        }
    } else if(type == "reference") {
        json = clone(node);
    } else if(type == "error") {
        json = clone(node);
    } else if(opts.boxed == true) {
        json = clone(node);
    } else if(value === undefined && opts.materialized == true) {
        json = clone(node);
    } else {
        json = value;
    }
    return json;
}

/*
module.exports = function(opts, node, type, value) {
    var json;
    if(opts.materialized === true) {
        if(node == null) {
            json = Object.create(null);
            json["$type"] = "sentinel";
        } else if(value === undefined) {
            json = clone(node);
        } else if(type == "reference") {
            json = clone(node);
        } else {
            json = value;
        }
    } else if(opts.boxed == true) {
        json = clone(node);
    } else if(type != "error" || opts.errorsAsValues) {
        json = value;
    } else if(node) {
        json = clone(node);
    }
    return json;
}
*/