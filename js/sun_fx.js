let phrases = [
    {
      type: "text",
      value: "Sun",
      name: "",
      alias: "none"
    },
    {
      type: "text",
      value: "the Sun",
      name: "",
      alias: "none"
    },
    {
      type: "text",
      value: "the star",
      name: "",
      alias: "none"
    },
    {
      type: "text",
      value: "our star",
      name: "",
      alias: "none"
    },
    {
        type: "text",
        value: "center of the solar system",
        name: "",
        alias: "none"
    },
    {
      type: "text",
      value: "solar system",
      name: "",
      alias: "none"
    },
    {
      type: "number",
      value: 1.49*Math.pow(10,8),
      name: "Astronomical Unit",
      alias: "au"
    }
];

var objectData = {
    name: "Sun",
    type: "Object-Subject",
    author: "Patrice-Morgan Ongoly",
    description: "Sol is the largest object in our Solar System; located at its center, the Sun accounts for approximately 99.86% of its mass. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process, making it by far the most important source of energy for life on Earth."
}

function getCurrentDate(){
    let d = new Date();
    let rawDate = d.getDate()+" ";

    switch(d.getMonth()){
        case 0:
            rawDate+="January ";
            break;
        case 1:
            rawDate+="February ";
            break;
        case 2:
            rawDate+="March ";
            break;
        case 3:
            rawDate+="April ";
            break;
        case 4:
            rawDate+="May ";
            break;
        case 5:
            rawDate+="June ";
            break;
        case 6:
            rawDate+="July ";
            break;
        case 7:
            rawDate+="August ";
            break;
        case 8:
            rawDate+="September ";
            break;
        case 9:
            rawDate+="October ";
            break;
        case 10:
            rawDate+="November ";
            break;
        case 11:
            rawDate+="December ";
            break;
    }
    rawDate+=d.getFullYear();
    return rawDate;
}

function getCurrentTime(){
    let d = new Date();
    return d.getTime();
}

function errorMsg(msg, error) {
    errorElement.innerHTML += '<p>' + msg + '</p>'+'<p>' + error + '</p>';

    if (typeof error !== 'undefined') {
        console.error(error);
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
                            let parentObject = null;
                            let parentId = null;
                            let parentObjectNode = null;
                            if(currentChild.parent[l]>-1){
                                parentObject = Experience.objectsubject[currentChild.parent[l]];
                                parentId = parentObject.id();
                                parentObjectNode = document.getElementById(parentObject.id());
                            }
                            else{
                                //console.log("attach video element");
                                parentObject = {
                                    name: "body"
                                }
                                parentId = "";
                                parentObjectNode = document.body;
                            }

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

                            parentObjectNode.appendChild(childElement);

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
}
