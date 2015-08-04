function DOMObservable(){
    this.init();
}

DOMObservable.prototype = {
    init: function(){
        this.findElements();
        this.addHandlers();
    },
    findSelector: function(){
        var selectorName = document.querySelector(".selector").value;
        this.currentElementIndex = 0;
        if(selectorName !== null || undefined) {
            this.currentElements = document.querySelectorAll(selectorName);
            this.currentElement = this.currentElements[currentElementIndex];
        }
    }
};


/**
 * Created by v.bogoroditskiy on 7/31/2015.
 */

var currentElement,
    currentElements,
    currentElementIndex,
    nextButton = document.querySelector('.selector-next'),
    prevButton = document.querySelector('.selector-prev'),
    firstChildBtn = document.querySelector('.nav-bottom'),
    parentNodeBtn = document.querySelector('.nav-top'),
    prevSiblingBtn = document.querySelector('.nav-left'),
    nextSiblingBtn = document.querySelector('.nav-right');


//document.querySelector('.selector-find').addEventListener('click', findSelector);

function findSelector(){
    var selectorName = document.querySelector(".selector").value;
    currentElementIndex = 0;
    if(selectorName !== null || undefined) {
        currentElements = document.querySelectorAll(selectorName);
        currentElement = currentElements[currentElementIndex];
    }
}

findSelector.prototype.next = function(array) {
    currentElementIndex++;
    currentElement = currentElements[currentElementIndex];
}


function next(array){
    currentElementIndex++;
    currentElement = currentElements[currentElementIndex];
}

function prev(array){
    currentElementIndex--;
    currentElement = currentElements[currentElementIndex];

}

function parentNode(btn) {
    currentElement = currentElement.parentNode;
    console.log(currentElement);
}

function firstChild(btn) {
    currentElement = currentElement.firstElementChild;
    console.log(currentElement);
}

function nextElementSibling(btn) {
    currentElement = currentElement.nextElementSibling;
    console.log(currentElement, 'next');

}
function prevElementSibling(btn) {
    currentElement = currentElement.previousElementSibling;
    console.log(currentElement, 'prev');
}

document.querySelector('.jsbursa-panel').addEventListener('click', function(e) {
    if (e.srcElement.tagName.toLocaleLowerCase() === 'button'){
        if(currentElement){
            currentElement.classList.remove('active');
            console.log('remove', currentElement);
        }

        if(e.srcElement.className.indexOf('selector-find') !== -1){
            findSelector(e.srcElement.value);
        }
        if(e.srcElement === nextButton) {
            console.log(this.next);
            this.next(e.srcElement);
        }
        if(e.srcElement === prevButton) {
            prev(e.srcElement);
        }
        if(e.srcElement === parentNodeBtn){
            parentNode(e.srcElement);
        }
        if(e.srcElement === firstChildBtn){
            firstChild(e.srcElement);
        }
        if(e.srcElement === nextSiblingBtn){
            nextElementSibling(e.srcElement);
        }
        if(e.srcElement === prevSiblingBtn){
            prevElementSibling(e.srcElement);
        }

        currentElement.classList.add('active');
        refreshButtons();
    }
});


function refreshButtons(){
    refreshNextSiblingButton();
    refreshPrevSiblingButton();
    refreshNextButton();
    refreshPrevButton();
    refreshParentNodeButton();
    refreshFirstChildButton();
}

function refreshNextButton(){
    if(hasNext()){
        nextButton.disabled = false;
    }else{
        nextButton.disabled = true;
    }
}

function refreshPrevButton(){
    if(hasPrev()){
        prevButton.disabled = false;
    }else {
        prevButton.disabled = true;
    }
}

function refreshNextSiblingButton(){
    if(hasNextSibling()){
        nextSiblingBtn.disabled = false;
    }else {
        nextSiblingBtn.disabled = true;
    }
}

function refreshPrevSiblingButton(){
    if(hasPrevSibling()){
        prevSiblingBtn.disabled = false;
    }else {
        prevSiblingBtn.disabled = true;
    }
}

function refreshParentNodeButton() {
    if(hasParentNode()){
        parentNodeBtn.disabled = false;
    }else {
        parentNodeBtn.disabled = true;
    }
}

function refreshFirstChildButton() {
    if(hasFirstChild()){
        firstChildBtn.disabled = false;
    }else {
        firstChildBtn.disabled = true;
    }
}

function hasFirstChild() {
    return currentElement.firstElementChild;
}

function hasNextSibling(){
    return currentElement.nextElementSibling;
}

function hasPrevSibling(){
    return currentElement.previousElementSibling;
}

function hasParentNode(){
    return currentElement.parentNode;
}

function hasNext(){
    console.log(currentElementIndex, currentElements.length);
    return currentElements && currentElementIndex < currentElements.length - 1;
}

function hasPrev(){
    console.log(currentElementIndex, currentElements.length);
    return currentElements && currentElementIndex > 0 ;
}