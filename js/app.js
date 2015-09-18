/**
 * Created by v.bogoroditskiy on 9/15/2015.
 */

requirejs.config({
    baseUrl: 'js',
    paths:{
        jquery: 'jquery-2.1.4.min',
        underscore: 'underscore',
        backbone: 'backbone',
        text: 'text',
        stickit: 'backbone.stickit'
    }
});

require([
        'newMainBackbone'
    ],
    function(App) {
        (new App()).$el.appendTo('body');
    }
);