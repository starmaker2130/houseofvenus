function toggleSiteSubMenuVisibility(){
    console.log("toggleSiteSubMenuVisibility");
}

function openDemonstrationsGallery(){
    window.open(`./demos`, "_blank");
    console.log("openDemonstrationsGallery");
}

function openCheckout(itemName){
    window.open(`./checkout/${itemName}`, "_blank");
    console.log("openCheckout");
}

function openParkMap(){
    window.open("http://oldrowmary.land", "_blank");
    console.log("openParkMap in new tab at http://oldrowmary.land");
}

function switchToPage(page){
    let target = page;
    let pages = [
        "card",
        "aria",
        "company"
    ]
    console.log(`show ${pages[target]}-page-container`);
    let pagePointers = document.getElementsByClassName("page-container");
    for(var t = 0; t< pagePointers.length; t++){
        (function(){
            if(target == t){
                pagePointers[target].style.opacity = 1.0;
                pagePointers[target].style.display = "block";
                document.getElementById(`page-indicator-row-page-indicator-bubble-${target}`).style.opacity = 1.0;
                pageInFocus = target;
                if(target == 2){
                    document.getElementById("preview-launcher").style.display = "none";
                }
                else{
                    document.getElementById("preview-launcher").style.display = "block";
                }
            }
            else{
                document.getElementById(`page-indicator-row-page-indicator-bubble-${t}`).style.opacity = 0.5;
                pagePointers[t].style.opacity = 0;
                pagePointers[t].style.display = "none";
            }

        })();
    }
}

function playPreviewOfProductInFocus(){
    console.log("playPreviewOfProductInFocus()");
    console.log(pageInFocus);
    let select = [
        "card-preview-video-container",
        "aria-preview-video-container"
    ];

    document.getElementById(select[pageInFocus]).style.height = "100%";
    document.getElementById(select[pageInFocus]).style.top = 0;
    document.getElementById(select[pageInFocus]).style.zIndex = "100";
    document.getElementById("preview-launcher").style.opacity = 0;
    setTimeout(function(){
        document.getElementById("preview-launcher").style.display = "none";
        document.getElementById("preview-closer").style.display = "block";
    }, 1000);

  /*  setTimeout(function(){
        //document.getElementById(select[pageInFocus]).style.opacity = 0;
    }, 4000);*/

    setTimeout(function(){
        //document.getElementById(select[pageInFocus]).style.display = "none";
        document.getElementById("mp4-media-video-container").style.display = "block";
        document.getElementById("mp4-media-video-container").style.zIndex = "100";
        document.getElementById("mp4-media-video-container").style.position = "absolute";
        document.getElementById("mp4-media-video-container").style.top = "10%";
        document.getElementById("mp4-media-video-container").style.left = "0";
    }, 1500);
}

function closePreviewOfProductInFocus(){
    console.log("closePreviewOfProductInFocus()");
    console.log(pageInFocus);
    let deselect = [
        "card-preview-video-container",
        "aria-preview-video-container"
    ];
    //document.getElementById(deselect[pageInFocus]).style.display = "block";
    document.getElementById("mp4-media-video-container").style.display = "none";
    document.getElementById("mp4-media-video-container").style.zIndex = "-1";

    document.getElementById(deselect[pageInFocus]).style.height = "55%";
    document.getElementById(deselect[pageInFocus]).style.top = "10%";
    document.getElementById(deselect[pageInFocus]).style.zIndex = 0;
    document.getElementById(deselect[pageInFocus]).style.opacity = 1.0;
    document.getElementById("preview-launcher").style.opacity = 1.0;
    setTimeout(function(){
        document.getElementById("preview-launcher").style.display = "block";
        document.getElementById("preview-closer").style.display = "none";
    }, 1000);
}

function toggleMenuVisibility(){
    console.log("toggleMenuVisibility()");
    console.log(mainMenuVisible);

    if(mainMenuVisible){
        document.getElementById("site-menu").style.height = 0;
        let subItems = document.getElementsByClassName("site-menu-item");

        setTimeout(function(){
            document.getElementById("site-menu").style.opacity = 0;
            document.getElementById("site-menu").style.display = "none";
        },1100);

        for(var g=0; g<subItems.length; g++){
            (function(){
                console.log(subItems[g]);
                subItems[g].style.height = 0;
                subItems[g].style.opacity = 0;
            })();
        }
        mainMenuVisible = false;
    }
    else{

        document.getElementById("site-menu").style.opacity = 1.0;
        document.getElementById("site-menu").style.display = "block";
        document.getElementById("site-menu").style.height = "0px";
        //document.getElementById("site-menu").style.height = "500px";
        let subItems = document.getElementsByClassName("site-menu-item");

        let h = 0;
        setTimeout(function(){
            //clearInterval(grow);
            document.getElementById("site-menu").style.height = "500px";
        }, 0);

        for(var v=0; v<subItems.length; v++){
            (function(){
                console.log(subItems[v]);
                subItems[v].style.height = "33%";
                subItems[v].style.opacity = 1.0;
            })();
        }
        mainMenuVisible = true;
    }
}

function processChildren(secondary){
    let children = secondary;
  //  console.log("processing children...");
    //console.log(children);
    for(var j=0; j<children.length; j++){
        (function(){
            let currentChild = children[j];

            if(currentChild.name!="multiple"){
                if(currentChild.parent.length==0&&currentChild.children.length==0){ //  objects without any child objects and whose sole parent is the base environment
                    let base = Experience.environment[0];
                    let childElement = currentChild.element();
                    childElement.textContent = currentChild.content();

                    if(currentChild.type=="button-container"){
                        childElement.addEventListener(Experience.effector[0].event, function(){
                            let childSelf = this;
                            Experience.effector[0].fx(childSelf.getAttribute("id"));
                        });
                    }

                    document.getElementById(base.id()).appendChild(childElement);

                }
                if(currentChild.parent.length>0){ //  special cases of the same situation below [see comment in line 564]
                    for(var l = 0; l<currentChild.parent.length; l++){
                        (function(){
                            let parentObject = Experience.objectsubject[currentChild.parent[l]];
                            let childElement = currentChild.element(parentObject.name);
                            let tapin = false;
                            if(currentChild.type!="blurb-container"){
                                childElement.textContent = currentChild.content(parentObject.name);
                            }
                            else{
                                //console.log(childElement);
                                childElement.textContent = "";
                                tapin = true;
                            }

                            //console.log(`#${currentChild.id(parentObject.name)}`);
                            if(currentChild.type=="button-container"){
                                childElement.addEventListener(Experience.effector[0].event, function(){
                                    let childSelf = this;
                                    Experience.effector[0].fx(childSelf.getAttribute("id"));
                                });
                            }

                            document.getElementById(parentObject.id()).appendChild(childElement);
                            if(tapin){
                                document.getElementById(currentChild.id()).innerHTML = currentChild.content();
                            }
                        })();
                    }
                }
            }
            else{ // if the object has multiple parents, i.e. it is a resource or characterisatic shared by other objects
                let parents = currentChild.parent;
                for(var k = 0; k<parents.length; k++){
                    (function(){
                        let parentObject = Experience.objectsubject[parents[k]];
                        let childElement = currentChild.element(parentObject.name);
                        let childContentBody = currentChild.content(parentObject.name);
                        if(typeof(childContentBody)=="str"){
                            childElement.textContent = currentChild.content(parentObject.name);
                        }
                        else{
                      //      console.log("domelement");
                            childElement.textContent = currentChild.content(parentObject.name);
                        }
                      //  console.log(`#${currentChild.id(parentObject.name)}`);
                        if(currentChild.type=="button-container"){
                            childElement.addEventListener(Experience.effector[0].event, function(){
                                let childSelf = this;
                                Experience.effector[0].fx(childSelf.getAttribute("id"));
                            });
                        }

                        document.getElementById(parentObject.id()).appendChild(childElement);

                    })();
                }


            }
        })();
    }
    toggleMenuVisibility();
    switchToPage(pageInFocus);
}

var mainMenuVisible = true;
var pageInFocus = 0;
