/**
 * Created by v.bogoroditskiy on 7/31/2015.
 */


function findSelector(){
    var selectorName = document.querySelector(".selector").value;
    if(selectorName !== null || undefined) {
        var currentBlock = document.querySelector(selectorName);
        currentBlock.classList.toggle('active');
    }
    return currentBlock;
}

/*function nextSelector() {
    var text = document.querySelector(".selector").value;
    if(text !== null || undefined) {
       var nextS = text.nextSibling;
           nextS.classList.add("active");
    }
}*/
function allElements() {
    var selectorName = document.querySelector(".selector").value;
    var elements = document.getElementsByTagName(selectorName);
    var array = [];
    for (var i = 0; i < elements.length; i++) {
        array.push(elements[i]);
    }
    return array;
}


var i = 0;
function nextElement(array) {
    //if (i == allElements(array).length -1) {
    //    i = 0;
    //    allElements(array).classList.add('active');
    //} else {
    //    i++;
    //}
    var nextSelector = allElements(array)[i++ % allElements(array).length];
    nextSelector.classList.add('active');
}
function prevElement(array) {
    var nextSelector = allElements(array)[i-- % allElements(array).length];
    nextSelector.classList.add('prev');
}

function getParent(currentBlock){
    var parentBlock = findSelector(currentBlock).parentNode;
    parentBlock.classList.add('active');
}

function firstChildren(currentBlock){
    var firstChild = findSelector(currentBlock).firstElementChild;
    firstChild.classList.add('active');
}

function nextElementSibling(currentBlock) {
    var nextElementSib = findSelector(currentBlock).nextElementSibling ;
    nextElementSib.classList.add('active');
}

function prevElementSibling(currentBlock) {
    var prevElementSib = findSelector(currentBlock).previousElementSibling ;
    prevElementSib.classList.add('active');
}