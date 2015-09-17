/**
 * Created by v.bogoroditskiy on 7/31/2015.
 */


function DOMObservable(){
    this.currentElement = null;
    this.init();
}

DOMObservable.prototype = {
    init: function(){
        this.findElements();
        this.addHandlers();
    },
    findElements: function() {
        this.nextButton = document.querySelector('.selector-next');
        this.prevButton = document.querySelector('.selector-prev');
        this.firstChildBtn = document.querySelector('.nav-bottom');
        this.parentNodeBtn = document.querySelector('.nav-top');
        this.prevSiblingBtn = document.querySelector('.nav-left');
        this.nextSiblingBtn = document.querySelector('.nav-right');
    },
    addHandlers: function() {
        var self = this;
        document.querySelector('.jsbursa-panel').addEventListener('click', function(e) {
            if (e.srcElement.tagName.toLocaleLowerCase() === 'button'){

                if(self.currentElement){
                    self.currentElement.classList.remove('active');
                }
                if(e.srcElement.className.indexOf('selector-find') !== -1){
                    self.findSelector(e.srcElement.val);
                }
                if(e.srcElement === self.nextButton) {
                    self.next(e.srcElement);
                }
                if(e.srcElement === self.prevButton) {
                    self.prev(e.srcElement);
                }
                if(e.srcElement === self.parentNodeBtn){
                    self.parentNode(e.srcElement);
                }
                if(e.srcElement === self.firstChildBtn){
                    self.firstChild(e.srcElement);
                }
                if(e.srcElement === self.nextSiblingBtn){
                    self.nextElementSibling(e.srcElement);
                }
                if(e.srcElement === self.prevSiblingBtn){
                    self.prevElementSibling(e.srcElement);
                }
                self.currentElement.classList.add('active');
                self.refreshButtons();
            }
        });
    },
    findSelector: function(){
        var selectorName = document.querySelector(".selector").value;
        this.currentElementIndex = 0;
        if(selectorName !== null || undefined) {
            this.currentElements = document.querySelectorAll(selectorName);
            this.currentElement = this.currentElements[this.currentElementIndex];
        }
    },
    next: function(array){
        this.currentElementIndex++;
        this.currentElement = this.currentElements[this.currentElementIndex];
    },
    prev: function(array){
        this.currentElementIndex--;
        this.currentElement = this.currentElements[this.currentElementIndex];
    },
    parentNode: function(btn){
        this.currentElement = this.currentElement.parentNode;
    },
    firstChild: function(btn){
        this.currentElement = this.currentElement.firstElementChild;
    },
    nextElementSibling: function(btn){
        this.currentElement = this.currentElement.nextElementSibling;
    },
    prevElementSibling: function(btn) {
        this.currentElement = this.currentElement.previousElementSibling;
    },
    refreshButtons: function(){
        this.refreshNextSiblingButton();
        this.refreshPrevSiblingButton();
        this.refreshNextButton();
        this.refreshPrevButton();
        this.refreshParentNodeButton();
        this.refreshFirstChildButton();
    },
    refreshNextButton: function(){
        if(this.hasNext()){
            this.nextButton.disabled = false;
        }else{
            this.nextButton.disabled = true;
        }
    },
    refreshPrevButton: function(){
        if(this.hasPrev()){
            this.prevButton.disabled = false;
        }else {
            this.prevButton.disabled = true;
        }
    },
    refreshNextSiblingButton: function(){
        if(this.hasNextSibling()){
            this.nextSiblingBtn.disabled = false;
        }else {
            this.nextSiblingBtn.disabled = true;
        }
    },
    refreshPrevSiblingButton: function(){
        if(this.hasPrevSibling()){
            this.prevSiblingBtn.disabled = false;
        }else {
            this.prevSiblingBtn.disabled = true;
        }
    },
    refreshParentNodeButton: function() {
        if(this.hasParentNode()){
            this.parentNodeBtn.disabled = false;
        }else {
            this.parentNodeBtn.disabled = true;
        }
    },
    refreshFirstChildButton: function() {
        if(this.hasFirstChild()){
            this.firstChildBtn.disabled = false;
        }else {
            this.firstChildBtn.disabled = true;
        }
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
    }
};
new DOMObservable();