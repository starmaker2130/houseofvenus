document.addEventListener("DOMContentLoaded", function(){
    console.log(Experience);

    if(Experience.environment[0]!=null){
        document.body.appendChild(Experience.environment[0].element());
    }

    if(Experience.objectsubject!=null){
        let objectSubjects = Experience.objectsubject;
        osPointers = Object.keys(objectSubjects);
        let secondary = []; // the secondary child objects, ie the children of the primary objects in the relationship tree

        for(var i=0; i<osPointers.length; i++){
            let currentAddition = objectSubjects[osPointers[i]];
            if(currentAddition.children.length>0){
                let main = Experience.environment[0].id();
                let childElement = currentAddition.element();
                if(currentAddition.type=="button-container"){
                    childElement.addEventListener(Experience.effector[0].event, function(){
                        let childSelf = this;
                        Experience.effector[0].fx(childSelf.getAttribute("id"));
                    });
                }
                document.getElementById(main).appendChild(childElement);
            }
            else{
                secondary.push(currentAddition);
            }
        }

        processChildren(secondary);
    }
});
