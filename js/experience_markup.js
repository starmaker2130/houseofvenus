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
                return "▶️";
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
            type: "container",
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
            type: "container",
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
            type: "container",
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
            type: "container",
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
            type: "container",
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
            type: "container",
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
            type: "container",
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
            type: "container",
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
            type: "container",
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
                    case "preview-launcher":
                        playPreviewOfProductInFocus();
                        break;
                    case "site-menu-button":
                        toggleMenuVisibility();
                        break;
                    case "site-menu-site-menu-item-0":
                        toggleSiteSubMenuVisibility();
                        break;
                    case "site-menu-site-menu-item-1":
                        openDemonstrationsGallery();
                        break;
                    case "card-purchase-button-container":
                        openCheckout('card');
                        break;
                    case "aria-purchase-button-container":
                        openCheckout('aria');
                        break;
                    case "site-menu-site-menu-item-2":
                        openParkMap();
                        break;
                    case "page-indicator-row-page-indicator-bubble-0":
                        switchToPage(0);
                        break;
                    case "page-indicator-row-page-indicator-bubble-1":
                        switchToPage(1);
                        break;
                    case "page-indicator-row-page-indicator-bubble-2":
                        switchToPage(2);
                        break;
                    case "preview-closer":
                        closePreviewOfProductInFocus();
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
