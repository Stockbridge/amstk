this["Application"] = this["Application"] || {};
this["Application"]["templates"] = this["Application"]["templates"] || {};
this["Application"]["templates"]["time"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"time\">"
    + this.escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"time","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});