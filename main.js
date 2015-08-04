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
        refreshButtons();
    }
}

function next(array){
    currentElementIndex++;
    currentElement = currentElements[currentElementIndex];
    //refreshNextButton();
    refreshButtons();
}

function prev(array){
    currentElementIndex--;
    currentElement = currentElements[currentElementIndex];
    //refreshPrevButton();
    refreshButtons();
}

function parentNode(btn) {
    currentElement = currentElement.parentNode;
    //refreshParentNodeButton();
    refreshButtons();
    console.log(currentElement);
}

function firstChild(btn) {
    currentElement = currentElement.firstElementChild;
    //refreshFirstChildButton();.
    refreshButtons();
    console.log(currentElement);
}

function nextElementSibling(btn) {
    currentElement = currentElement.nextElementSibling;
    //refreshNextSiblingButton();
    refreshButtons();
    console.log(currentElement, 'next');

}
function prevElementSibling(btn) {
    currentElement = currentElement.previousElementSibling;
    //refreshPrevSiblingButton();
    refreshButtons();
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
        if(e.srcElement.className.indexOf('selector-next') !== -1) {
            next(e.srcElement);
        }
        if(e.srcElement.className.indexOf('selector-prev') !== -1) {
            prev(e.srcElement);
        }
        if(e.srcElement.className.indexOf('nav-top') !== -1){
            parentNode(e.srcElement);
        }
        if(e.srcElement.className.indexOf('nav-bottom') !== -1){
            firstChild(e.srcElement);
        }
        if(e.srcElement === nextSiblingBtn){
            nextElementSibling(e.srcElement);
        }
        if(e.srcElement === prevSiblingBtn){
            prevElementSibling(e.srcElement);
        }

        console.log(currentElement);
        currentElement.classList.add('active');

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

function hasNextSibling(){
    return currentElement.nextElementSibling;
}

function hasFirstChild() {
    return currentElement.firstElementChild;
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