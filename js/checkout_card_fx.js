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
        document.getElementById("site-menu").style.height = "500px";
        document.getElementById("site-menu").style.opacity = 1.0;
        document.getElementById("site-menu").style.display = "block";
        let subItems = document.getElementsByClassName("site-menu-item");

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

function switchToPage(page){
    let target = page;
    let pages = [
        "card",
        "aria",
        "company"
    ]
    console.log(`show ${pages[target]}-page-container`);

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
                            if(currentChild.type!="special-button-container"){
                                childElement.textContent = currentChild.content(parentObject.name);
                            }
                            else{
                                console.log(childElement);
                                childElement.textContent = "";
                                tapin = true;
                            }
                            childElement.textContent = currentChild.content(parentObject.name);
                            console.log(currentChild.parent[l]);
                            console.log(Experience.objectsubject[currentChild.parent[l]]);
                            console.log(parentObject)
                            console.log(`#${currentChild.id()}`);

                            if(currentChild.type=="button-container"||currentChild.type=="special-button-container"){
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
            else{ // if the object has multiple parents, i.e. itis a resource or characterisatic shared by other objects
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
    //toggleMenuVisibility();
    switchToPage(pageInFocus);
}

var mainMenuVisible = true;
var pageInFocus = 0;
