/**
 * Created by v.bogoroditskiy on 7/31/2015.
 */

var currentElement,
    currentElements,
    currentElementIndex,
    nextButton = document.querySelector('.selector-next')
    nextSiblingBtn = document.querySelector('.nav-right');

var i = 0;

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

function allElements() {
    var selectorName = document.querySelector(".selector").value;
    return Array.prototype.slice.call(document.getElementsByTagName(selectorName), 0);
}

function next(array){
    currentElementIndex++;
    currentElement = currentElements[currentElementIndex];
    refreshNextButton();
}

function prevButton(array){
    var nextSelector = allElements(array);
    if (i > nextSelector.length-1) {
        i = 0;

    }else {
        currentElementIndex = nextSelector[i];
        //nextSelector[i].classList.add('prev');
        i--;
    }
    return nextSelector;
}

function parentNode() {
    currentElement = currentElement.parentNode;
    console.log(currentElement);
}

function firstChild() {
    currentElement = currentElement.firstElementChild;
    console.log(currentElement);
}

function nextElementSibling(btn) {
    currentElement = currentElement.nextElementSibling;
    refreshNextSiblingButton();
    console.log(currentElement, 'next');

}

function prevElementSibling() {
    currentElement = currentElement.previousElementSibling;
    console.log(currentElement);
}

//document.querySelector('.selector-find').addEventListener('click', enableButton);

function enableButton(array) {

    if(nextButton(array).length > 2){
        document.querySelector('.selector-next').disabled = false;
    } else {
        document.querySelector('.selector-next').disabled = true;
    }
    if(prevButton(array).length > 2){
        document.querySelector('.selector-prev').disabled = false;
    } else {
        document.querySelector('.selector-prev').disabled = true;
    }

}

document.querySelector('.jsbursa-panel').addEventListener('click', function(e) {
    if (e.srcElement.tagName.toLocaleLowerCase() === 'button'){
        if(currentElement){
            currentElement.classList.remove('active');
            console.log('remove', currentElement);
        }

        /*currentElementIndex && currentElementIndex.classList.remove('active');
        currentElementIndex && currentElementIndex.classList.remove('prev');*/

        if(e.srcElement.className.indexOf('selector-find') !== -1){
            findSelector(e.srcElement.value);
        }
        if(e.srcElement.className.indexOf('selector-next') !== -1) {
            next(e.srcElement.value);
        }
        if(e.srcElement.className.indexOf('selector-prev') !== -1) {
            prevButton(e.srcElement.value);
        }
        if(e.srcElement.className.indexOf('nav-top') !== -1){
            parentNode(e.srcElement.value);
        }
        if(e.srcElement.className.indexOf('nav-bottom') !== -1){
            firstChild(e.srcElement.value);
        }
        if(e.srcElement === nextSiblingBtn){
            nextElementSibling(e.srcElement);
        }
        if(e.srcElement.className.indexOf('nav-left') !== -1){
            prevElementSibling(e.srcElement.value);
        }

        console.log(currentElement)
        currentElement.classList.add('active');

    }
});


function refreshButtons(){
    refreshNextSiblingButton();
    refreshNextButton();
}

function refreshNextButton(){
    if(hasNext()){
        nextButton.disabled = false;
    }else{
        nextButton.disabled = true;
    }
}

function refreshNextSiblingButton(){
    if(hasNextSibling()){
        nextSiblingBtn.disabled = false;
    }else {
        nextSiblingBtn.disabled = true;
    }
}

function hasNextSibling(){
    return currentElement.nextElementSibling;
}

function hasNext(){
    console.log(currentElementIndex, currentElements.length)
    return currentElements && currentElementIndex < currentElements.length - 1;
}