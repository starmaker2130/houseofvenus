var Experience = {
    environment: [
        {
            name: "company-landing-page",
            id: function(){
                return "main-app-container";
            },
            type: "website",
            class: "environment-container",
            settings: "all",
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                return el;
            }
        }
    ],
    objectsubject: [
        {
            name: "home",
            type: "container",
            class: "page-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 0,
            children: [
                1,  // #application-title-container
                2,  // #preview-video-button-container
                3,  // #go-to-next-one-button-container
                4, // #go-to-next-one-indicator-container
            ],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "application-title-container",
            type: "container",
            class: "title-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 1,
            content: function(){
                return "house of venus";
            },
            children: [
            ],
            parent: [
                0
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "preview",
            type: "container",
            class: "video-button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            index: 2,
            content: function(){
                return "";
            },
            children: [
            ],
            parent: [
                0
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "go-to-next-one",
            type: "button-container",
            class: "button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "";
            },
            index: 3,
            children: [],
            parent: [
                0
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "go-to-next-one",
            type: "button-container",
            class: "indicator-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                return "▼";
            },
            index: 4,
            children: [],
            parent: [
                0
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "main-options",
            type: "container",
            class: "page-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 5,
            children: [
                6,  //#go-to-previous-zero-indicator-container
                7,   //#go-to-previous-zero-button-container
                8, // #market-option-button-container
                9, //#about-option-button-container
            ],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "go-to-previous-zero",
            type: "button-container",
            class: "indicator-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                return "▲";
            },
            index: 6,
            children: [],
            parent: [
                5
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "go-to-previous-zero",
            type: "button-container",
            class: "button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "";
            },
            index: 7,
            children: [],
            parent: [
                5
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "market",
            type: "button-container",
            class: "option-button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "";
            },
            index: 8,
            children: [],
            parent: [
                5
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "about",
            type: "container",
            class: "option-button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "";
            },
            index: 9,
            children: [],
            parent: [
                5
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "market",
            type: "container",
            class: "option-button-title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "market";
            },
            index: 10,
            children: [],
            parent: [
                8
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "about",
            type: "container",
            class: "option-button-title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "about";
            },
            index: 11,
            children: [],
            parent: [
                9
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "market-option",
            type: "container",
            class: "page-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 12,
            children: [
                13,
                14,
                15,
                17,
                19
                /*6,  //#go-to-previous-zero-indicator-container
                7,   //#go-to-previous-zero-button-container
                8, // #market-option-button-container
                9, //#about-option-button-container*/
            ],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "go-to-previous-one",
            type: "button-container",
            class: "indicator-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                return "▲";
            },
            index: 13,
            children: [],
            parent: [
                12
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "go-to-previous-one",
            type: "button-container",
            class: "button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "";
            },
            index: 14,
            children: [],
            parent: [
                12
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "tsh",
            type: "button-container",
            class: "venture-option-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "";
            },
            index: 15,
            children: [
                /*16*/
            ],
            parent: [
                12
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "tsh",
            type: "container",
            class: "venture-option-title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "talk.show.host";
            },
            index: 16,
            children: [],
            parent: [
                15
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "foodid",
            type: "button-container",
            class: "venture-option-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "";
            },
            index: 17,
            children: [
                /*18*/
            ],
            parent: [
                12
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "foodid",
            type: "container",
            class: "venture-option-title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "foodid";
            },
            index: 18,
            children: [],
            parent: [
                17
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "afs",
            type: "button-container",
            class: "venture-option-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "";
            },
            index: 19,
            children: [
                /*20*/
            ],
            parent: [
                12
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "afs",
            type: "container",
            class: "venture-option-title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "anne's flower shop";
            },
            index: 20,
            children: [],
            parent: [
                19
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "tsh",
            type: "container",
            class: "description-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "talk.show.host description text goes here";
            },
            index: 21,
            children: [],
            parent: [
                15
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "tsh",
            type: " button-container",
            class: "view-site-button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "view site";
            },
            index: 22,
            children: [],
            parent: [
                15
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "foodid",
            type: "container",
            class: "description-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "foodid description text goes here";
            },
            index: 23,
            children: [],
            parent: [
                17
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "foodid",
            type: " button-container",
            class: "view-site-button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "view site";
            },
            index: 24,
            children: [],
            parent: [
                17
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "afs",
            type: "container",
            class: "description-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "anne's flower shop description text goes here";
            },
            index: 25,
            children: [],
            parent: [
                19
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "afs",
            type: " button-container",
            class: "view-site-button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "view site";
            },
            index: 26,
            children: [],
            parent: [
                19
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
    ],
    subjectobject: [],
    effector: [
        {
            view: "flat",
            event: "click",
            fx: function(target){
                let val = target;
                
                console.log("------------------------------------");
                console.log(`${val}`);
                console.log("------------------------------------");
                switch(val){
                    case "go-to-next-one-indicator-container":
                        pp();
                        break;
                    case "go-to-previous-one-indicator-container":
                        pp();
                        break;
                    case "go-to-next-one-button-container":
                        pp();
                        break;
                    case "go-to-previous-one-button-container":
                        pp();
                        
                        break;
                    case "go-to-previous-zero-button-container":
                        qq();
                        break;
                    case "go-to-previous-zero-indicator-container":
                        qq();
                        break;
                    case "market-option-button-container":
                        rr();
                        break;
                    case "afs-view-site-button-container":
                        console.log("yououuoi");
                        window.open("http://annesfloweshop.com", "_blank");
                        break;
                    case "afs-venture-option-container":
                        if(appPreviewInFocus!=null){
                            let previousFocus = document.getElementById(appPreviewInFocus);
                            previousFocus.style.height = "33%";
                            previousFocus.style.lineHeight = "200px";
                            let prefix = appPreviewInFocus.substring(0, appPreviewInFocus.indexOf("-"));
                            document.getElementById(prefix+"-description-container").style.opacity = 0;
                            document.getElementById(prefix+"-view-site-button-container").style.opacity = 0;
                            
                            setTimeout(function(){
                                document.getElementById(prefix+"-description-container").style.display = "none";
                                document.getElementById(prefix+"-view-site-button-container").style.display = "none";
                            }, 500);
                            
                            document.getElementById(prefix+"-description-container").style.fontSize = "0px";
                            document.getElementById(prefix+"-view-site-button-container").style.fontSize = "0px";
                            
                            if(appPreviewInFocus=="afs-venture-option-container"){
                                window.open("http://annesflowershop.com", "_blank");
                            }
                        }
                        if(appPreviewInFocus!="afs-venture-option-container"){
                            document.getElementById("afs-venture-option-container").style.height = "50%";
                            document.getElementById("afs-venture-option-container").style.lineHeight = "50px";

                            document.getElementById("afs-description-container").style.display = "block";
                            document.getElementById("afs-description-container").style.opacity = 1.0;
                            document.getElementById("afs-view-site-button-container").style.display = "block";
                            document.getElementById("afs-view-site-button-container").style.opacity = 1.0;

                            document.getElementById("afs-description-container").style.fontSize = "40px";
                            document.getElementById("afs-view-site-button-container").style.fontSize = "40px";
                            setTimeout(function(){
                                appPreviewInFocus = "afs-venture-option-container";
                            }, 550);
                        }
                        else{
                            appPreviewInFocus = null;
                        }
                        break;
                    case "foodid-venture-option-container":
                        if(appPreviewInFocus!=null){
                            let previousFocus = document.getElementById(appPreviewInFocus);
                            previousFocus.style.height = "33%";
                            previousFocus.style.lineHeight = "200px";
                            let prefix = appPreviewInFocus.substring(0, appPreviewInFocus.indexOf("-"));
                            document.getElementById(prefix+"-description-container").style.opacity = 0;
                            document.getElementById(prefix+"-view-site-button-container").style.opacity = 0;
                            
                            setTimeout(function(){
                                document.getElementById(prefix+"-description-container").style.display = "none";
                                document.getElementById(prefix+"-view-site-button-container").style.display = "none";
                            }, 500);
                            
                            document.getElementById(prefix+"-description-container").style.fontSize = "0px";
                            document.getElementById(prefix+"-view-site-button-container").style.fontSize = "0px";
                        }
                        if(appPreviewInFocus!="foodid-venture-option-container"){
                            document.getElementById("foodid-venture-option-container").style.height = "50%";
                            document.getElementById("foodid-venture-option-container").style.lineHeight = "50px";

                            document.getElementById("foodid-description-container").style.display = "block";
                            document.getElementById("foodid-description-container").style.opacity = 1.0;
                            document.getElementById("foodid-view-site-button-container").style.display = "block";
                            document.getElementById("foodid-view-site-button-container").style.opacity = 1.0;

                            document.getElementById("foodid-description-container").style.fontSize = "20px";
                            document.getElementById("foodid-view-site-button-container").style.fontSize = "20px";
                            setTimeout(function(){
                                appPreviewInFocus = "foodid-venture-option-container";
                            }, 550);
                        }
                        else{
                            appPreviewInFocus = null;
                        }
                        break;
                    case "tsh-venture-option-container":
                        if(appPreviewInFocus!=null){
                            let previousFocus = document.getElementById(appPreviewInFocus);
                            previousFocus.style.height = "33%";
                            previousFocus.style.lineHeight = "200px";
                            let prefix = appPreviewInFocus.substring(0, appPreviewInFocus.indexOf("-"));
                            document.getElementById(prefix+"-description-container").style.opacity = 0;
                            document.getElementById(prefix+"-view-site-button-container").style.opacity = 0;
                            
                            setTimeout(function(){
                                document.getElementById(prefix+"-description-container").style.display = "none";
                                document.getElementById(prefix+"-view-site-button-container").style.display = "none";
                            }, 500);
                            
                            document.getElementById(prefix+"-description-container").style.fontSize = "0px";
                            document.getElementById(prefix+"-view-site-button-container").style.fontSize = "0px";
                        }
                        if(appPreviewInFocus!="tsh-venture-option-container"){
                            document.getElementById("tsh-venture-option-container").style.height = "50%";
                            document.getElementById("tsh-venture-option-container").style.lineHeight = "50px";
                            
                            document.getElementById("tsh-description-container").style.display = "block";
                            document.getElementById("tsh-description-container").style.opacity = 1.0;
                            document.getElementById("tsh-view-site-button-container").style.display = "block";
                            document.getElementById("tsh-view-site-button-container").style.opacity = 1.0;

                            document.getElementById("tsh-description-container").style.fontSize = "20px";
                            document.getElementById("tsh-view-site-button-container").style.fontSize = "20px";
                            setTimeout(function(){
                                appPreviewInFocus = "tsh-venture-option-container";
                            }, 550);
                        }
                        else{
                            appPreviewInFocus = null;
                        }
                        break;
                    default:
                        console.log("no specific functionality defined for this target.");
                    break;
                }
                console.log("------------------------------------");
            }
        }
    ],
    selector: [],

};

var appPreviewInFocus = null;

function pp(){
    console.log("scroll to top of [5]");
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#main-options-page-container").offset().top
    }, 1000);
}

function qq(){
    console.log("scroll to top of [0]");
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home-page-container").offset().top
    }, 1000);
}

function rr(){
    console.log("scroll to top of [12]");
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#market-option-page-container").offset().top
    }, 1000);
}
