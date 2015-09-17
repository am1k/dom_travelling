/**
 * Created by v.bogoroditskiy on 9/17/2015.
 */

define(['Backbone'], function(Backbone) {

    var ModelSearch = Backbone.Model.extend({
        defaults: {
            nextButton: false,
            prevButton: false,
            parentNodeBtn: false,
            firstChildBtn: false,
            prevSiblingBtn: false,
            nextSiblingBtn: false
        }
    });

    return ModelSearch;
});


