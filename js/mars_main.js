document.addEventListener("DOMContentLoaded", function(){
    console.log("-----------------------------------");
    console.log("------------- LYOKO ---------------");
    console.log("-----------------------------------");
    console.log("-- Name: MARS                    --");
    console.log("-- Type: Object-Subject          --");
    console.log("-- Author: Patrice-Morgan Ongoly --");
    console.log("-- Phrases:                      --");
    console.log(phrases);

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

    setTimeout(function(){
        document.getElementById("planet-header-title").setAttribute("value", objectData.name);
        document.getElementById("planet-time-header").setAttribute("value", getCurrentTime());
        document.getElementById("planet-date-header").setAttribute("value", getCurrentDate());
        document.getElementById("planet-description-container").setAttribute("value", objectData.description);

        var video = document.querySelector('video');
        var constraints = window.constraints = {
            audio: false,
            video: true
        };
        var errorElement = document.querySelector('#errorMsg');

        navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
            var videoTracks = stream.getVideoTracks();
            console.log('Got stream with constraints:', constraints);
            console.log('Using video device: ' + videoTracks[0].label);
            stream.onremovetrack = function() {
                console.log('Stream ended');
            };

            window.stream = stream; // make variable available to browser console
            video.srcObject = stream;
        })
        .catch(function(error) {
            if (error.name === 'ConstraintNotSatisfiedError') {
                errorMsg('The resolution ' + constraints.video.width.exact + 'x' + constraints.video.width.exact + ' px is not supported by your device.');
            } else if (error.name === 'PermissionDeniedError') {
                errorMsg('Permissions have not been granted to use your camera and ' +
              'microphone, you need to allow the page access to your devices in ' +
              'order for the demo to work.');
            }
            errorMsg('getUserMedia error: ' + error.name, error);
        });

        var elem = document.getElementById("webcam-container")
        elem.style.width = "100%";
        elem.style.height = "100%";
    }, 500);

});
