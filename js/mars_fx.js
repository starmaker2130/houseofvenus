let phrases = [
    {
      type: "text",
      value: "Earth",
      name: "",
      alias: "none"
    },
    {
      type: "text",
      value: "the Earth",
      name: "",
      alias: "none"
    },
    {
      type: "text",
      value: "blue marble",
      name: "",
      alias: "none"
    },
    {
      type: "text",
      value: "little blue planet",
      name: "",
      alias: "none"
    },
    {
        type: "text",
        value: "Terra",
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
      value: 5.97237*Math.pow(10,24),
      name: "mass",
      alias: "au"
    },
    {
      type: "number",
      value: 1.08321*Math.pow(10,12),
      name: "volume",
      alias: "au"
    },
    {
      type: "number",
      value: 9.807,
      name: "surface gravity",
      alias: "au"
    },
    {
      type: "number",
      value: 6371.0,
      name: "mean radius",
      alias: "au",
      units: "km"
    },
    {
      type: "number",
      value: 6378.1,
      name: "equatorial radius",
      alias: "au",
      units: "km"
    }
];

var objectData = {
    name: "Mars",
    type: "Object-Subject",
    author: "Patrice-Morgan Ongoly",
    description: `The fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. Named after the Roman god of war, Mars is often referred to as the "Red Planet" due to the colorful effect caused by the presence of iron oxide on its surface. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.`
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
