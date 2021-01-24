
// document.body.querySelector("div#secondary.style-scope.ytd-watch-flexy").classList.toggle("invisible");
function includedOrNot(array, target){
    let i = 0;
    while(i < array.length){
        if(array[i] === target){
            return true
        }
        i++;
    }
    return false
}

// alert('test');
// alert(document.body.querySelector("div#secondary.style-scope.ytd-watch-flexy").classList);
// alert(includedOrNot(document.body.querySelector("div#secondary.style-scope.ytd-watch-flexy").classList, 'invisible'));
// alert(document.body.querySelector("div#contents.style-scope.ytd-rich-grid-renderer").classList);
// alert(includedOrNot(document.body.querySelector("div#contents.style-scope.ytd-rich-grid-renderer").classList, 'invisible2'))


chrome.storage.local.get(/* String or Array */["rec"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
    logicRec = items.rec;
    // alert('Rec is '+logicRec);
});

chrome.storage.local.get(/* String or Array */["home"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
    logicHome = items.home;
    // alert('Home is '+logicHome);
});

blockAlgo(document.body);

function blockAlgo(element){

    let homeStatus;
    let recStatus;

    chrome.storage.local.get(/* String or Array */["rec"], function(items){
        //  items = [ { "phasersTo": "awesome" } ]
        logicRec = items.rec;
        // alert('logicrec '+logicRec);
        // alert('logicrec2 ' + !includedOrNot(element.querySelector("div#secondary.style-scope.ytd-watch-flexy").classList, 'invisible'));
        if(logicRec === true && 
            !includedOrNot(element.querySelector("div#secondary.style-scope.ytd-watch-flexy").classList, 'invisible'))
        {
            // alert("Flipping Recommended Section");
            element.querySelector("div#secondary.style-scope.ytd-watch-flexy").classList.toggle("invisible");
        }
        return true;
    });
    
    chrome.storage.local.get(/* String or Array */["home"], function(items){
        //  items = [ { "phasersTo": "awesome" } ]
        logicHome = items.home;
        // alert('logichome '+logicHome);
        // alert('logichome2 '+ !includedOrNot(element.querySelector("div#contents.style-scope.ytd-rich-grid-renderer").classList, 'invisible2'));

        if(logicHome === true &&
            !includedOrNot(element.querySelector("div#contents.style-scope.ytd-rich-grid-renderer").classList, 'invisible2'))
        {
            // alert("Flipping Home Section");
            element.querySelector("div#contents.style-scope.ytd-rich-grid-renderer").classList.toggle("invisible2");
        }
        return true;
    }); 
    
}

// function replaceText(element){
//     if(element.hasChildNodes()){
//         element.childNodes.forEach(replaceText);

//     } else if(element.nodeType === Text.TEXT_NODE){//if no children
//         element.textContent = element.textContent.replace(/coronavirus/gi, '👹');

//     }
// }