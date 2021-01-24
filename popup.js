let homeButton = document.getElementById('home');
let recButton = document.getElementById('rec');

homeButton.addEventListener('click', handleHome);
recButton.addEventListener('click', handleRec);
console.log('outside')

var logicHome = 100; 
var logicRec = 100;

chrome.storage.local.get(/* String or Array */["home"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
    logicHome = items.home;
    console.log("Logic home is", logicHome)
    if(logicHome === undefined){
        console.log("This is logic home", logicHome);
        chrome.storage.local.set({"home": false}, function(){
            console.log("home is set") 
        });
    } else if(logicHome === true){
        document.getElementById('home').classList.toggle("home_button"); 
    }
    return true;
});

chrome.storage.local.get(/* String or Array */["rec"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
    logicRec = items.rec;
    console.log("Logic rec is", logicRec)
    if(logicRec === undefined){
        console.log("This is logic rec", logicRec);
        chrome.storage.local.set({"rec": false}, function(){
            console.log("rec is set") 
        });
    } else if(logicRec === true){
        document.getElementById('rec').classList.toggle("rec_button"); 
     }
    return true;
});



// chrome.storage.local.get(/* String or Array */["home"], function(items){
//     //  items = [ { "phasersTo": "awesome" } ]
//     console.log('this is the items:', items.home);
// });

function handleHome(){
    // alert("Handle home is clicked");
    document.getElementById('home').classList.toggle("home_button");

    // chrome.tabs.getCurrent(gotTab);

    // function gotTab(tab){
    //     console.log("inside home button");
    //     chrome.tabs.sendMessage(tab.id, "homeSection");
    // }   
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs){
        console.log("inside home button");
        chrome.tabs.sendMessage(tabs[0].id, "homeSection")
    }

    chrome.storage.local.get(['home'], function(items){
        if(items.home === true){
            chrome.storage.local.set({"home": false}, function(){
                console.log("home is set to false") 
             });
        }
        else{
            chrome.storage.local.set({"home": true}, function(){
                console.log("home is set to true") 
            }); 
        }
    })
   
}

function handleRec(){
    // alert("Handle Rec is clicked");
    document.getElementById('rec').classList.toggle("rec_button");

    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs){
        console.log("inside recommendation button1");
        chrome.tabs.sendMessage(tabs[0].id, "recSection");
    }   
    
    chrome.storage.local.get(['rec'], function(items){
        if(items.rec === true){
            chrome.storage.local.set({"rec": false}, function(){
                console.log("rec is set to false") 
             });
        }
        else{
            chrome.storage.local.set({"rec": true}, function(){
                console.log("rec is set to true") 
            }); 
        }
    })
}