/**
 * Created by v.bogoroditskiy on 9/15/2015.
 */
define(['backbone', 'text!../template/navigation_template.html', './model'], function(Backbone, myTemplate, ModelSearch){

    var ViewSearch = Backbone.View.extend({
        className: 'jsbursa-panel',

        tagName: 'div',

        model: new ModelSearch(),

        template: _.template(myTemplate),

        events: {
            'click .selector-find': 'find',
            'click .selector-next': 'next',
            'click .selector-prev': 'prev',
            'click .nav-top':       'parent',
            'click .nav-bottom':    'firstChild',
            'click .nav-left':      'prevSibling',
            'click .nav-right':     'nextSibling'
        },

        find: function() {
            this.removeClass();
            this.findSelector();
            this.addClass();
            this.refreshButtons();
        },

        findSelector: function(){
            var selectorName = $('.selector').val();
            this.currentElementIndex = 0;
            if(selectorName !== null || undefined) {
                this.currentElements = document.querySelectorAll(selectorName);
                this.currentElement = this.currentElements[this.currentElementIndex];
            }
        },

        next: function(){
            this.removeClass();
            this.nextSelector();
            this.addClass();
            this.refreshButtons();
        },

        nextSelector: function(array){
            this.currentElementIndex++;
            this.currentElement = this.currentElements[this.currentElementIndex];
        },

        prev: function(){
            this.removeClass();
            this.prevSelector();
            this.addClass();
            this.refreshButtons();
        },

        prevSelector: function(array){
            this.currentElementIndex--;
            this.currentElement = this.currentElements[this.currentElementIndex];
        },

        parent: function(){
            this.removeClass();
            this.parentNode();
            this.addClass();
            this.refreshButtons();
        },

        parentNode: function(btn){
            this.currentElement = this.currentElement.parentNode;
        },

        firstChild: function(){
            this.removeClass();
            this.firstChildSelector();
            this.addClass();
            this.refreshButtons();
        },

        firstChildSelector: function(btn){
            this.currentElement = this.currentElement.firstElementChild;
        },

        prevSibling: function(){
            this.removeClass();
            this.prevElementSibling();
            this.addClass();
            this.refreshButtons();
        },

        prevElementSibling: function(btn) {
            this.currentElement = this.currentElement.previousElementSibling;
        },

        nextSibling: function(){
            this.removeClass();
            this.nextElementSibling();
            this.addClass();
            this.refreshButtons();
        },

        nextElementSibling: function(btn){
            this.currentElement = this.currentElement.nextElementSibling;
        },

        removeClass: function(){
            if(this.currentElement){
                this.currentElement.classList.remove('active');
            }
        },

        addClass: function(){
            console.log(this.currentElement);
            this.currentElement.classList.add('active');
        },

        refreshButtons: function(){
            this.model.set({
                nextButton: this.hasNext(),
                prevButton: this.hasPrev(),
                parentNodeBtn: this.hasParentNode(),
                firstChildBtn: this.hasFirstChild(),
                prevSiblingBtn: this.hasPrevSibling(),
                nextSiblingBtn: this.hasNextSibling()
            });
        },

        hasFirstChild: function() {
            return this.currentElement.firstElementChild;
        },

        hasNextSibling: function(){
            return this.currentElement.nextElementSibling;
        },

        hasPrevSibling: function(){
            return this.currentElement.previousElementSibling;
        },

        hasParentNode: function(){
            return this.currentElement.parentNode;
        },

        hasNext: function(){
            return this.currentElements && this.currentElementIndex < this.currentElements.length - 1;
        },

        hasPrev: function(){
            return this.currentElements && this.currentElementIndex > 0 ;
        },

        initialize: function(){
            this.render();

            this.listenTo(this.model, 'change', this.render);
            return this;
        },

        render: function(){
            this.$el.html(this.template( this.model.toJSON() ));
            this.currentElement = null;
            return this;
        }
    });
    return ViewSearch;

});