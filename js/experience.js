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
            name: "card",
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
                3,  // preview-video-container
                4,  // header-title-container
                5,  // header-subtitle-container
                9, // purchase-button-container
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
            name: "aria",
            type: "container",
            class: "page-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            index: 1,
            content: function(){
                return "";
            },
            children: [
                3,  // preview-video-container
                4,  // header-title-container
                5,  // header-subtitle-container
                9, // purchase-button-container
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
            name: "company",
            type: "container",
            class: "page-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            index: 2,
            content: function(){
                return "";
            },
            children: [
                3,  // preview-video-container
                4,  // header-title-container
                5,  // header-subtitle-container
                9, // purchase-button-container
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
            name: "multiple",
            type: "container",
            class: "preview-video-container",
            id: function(prefix){
                let self = this;
                return prefix+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "";
            },
            index: 3,
            children: [],
            parent: [
                0,
                1,
                2,
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
            name: "multiple",
            type: "container",
            class: "header-title-container",
            id: function(prefix){
                let self = this;
                return prefix+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return pointer.toUpperCase();
            },
            index: 4,
            children: [],
            parent: [
                0,
                1,
                2,
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
            name: "multiple",
            type: "container",
            class: "header-subtitle-container",
            id: function(prefix){
                let self = this;
                return prefix+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                let values = {
                    CARD: "creative Augmented Reality kinectome",
                    ARIA: "Augmented Reality intelligent assistant",
                    COMPANY: "roster"
                }
                return values[pointer.toUpperCase()];
            },
            index: 5,
            children: [],
            parent: [
                0,
                1,
                2,
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
            name: "preview-launcher",
            type: "button-container",
            class: "preview-launcher-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 6,
            children: [
                7, // preview-arrow-container
                8, // preview-label-container
            ],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "preview-arrow",
            type: "content-container",
            class: "preview-arrow-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 7,
            children: [],
            parent: [
                6
            ],
            content: function(pointer){
                let self = this;
            //    console.log(pointer);
                //"&#x25b6;"
                return "▶";
            },
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "preview-label",
            type: "container",
            class: "preview-label-container",
            id: function(){
                let self = this;
                return self.name;
            },
            content: function(pointer){
                let self = this;
            //    console.log(pointer);
                return "";
            },
            index: 8,
            children: [],
            parent: [
                6
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
            name: "multiple",
            type: "button-container",
            class: "purchase-button-container",
            id: function(prefix){
                let self = this;
                return prefix+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                let optionValues = {
                    "CARD": "BUY NOW",
                    "ARIA": "PREORDER"
                };
                return optionValues[pointer.toUpperCase()];
            },
            index: 9,
            children: [],
            parent: [
                0,
                1,
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
            name: "page-indicator-row",
            type: "container",
            class: "page-indicator-bubble-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 10,
            children: [
                11, // page-indicator-bubble
            ],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "multiple",
            type: "button-container",
            class: "page-indicator-bubble",
            id: function(prefix){
                let self = this;
                self.count++; /*there is a for loop in the parent closure, this for loop completes faster than the funciton inside of it is instantiated thus this count value adds by three mean while the document nodes add the correct amount)*/
                //console.log(self.count);   /* troubleshooting for: see comment above [line 283] */
                let a = self.count/*0;
                if(self.count==1||self.count==2){
                    a = 0;
                }
                if(self.count==3||self.count==4){
                    a = 1;
                }
                if(self.count==5||self.count==6){
                    a = 2;
                }*/
                self.a = a;
                let addon = prefix+"-"+self.class+"-"+a;   /* see comment above [line 283] */

                return addon /* see comment above [line 283] */
            },
            iterati: 0,
            count: -1,
            buttonCount: 0,
            index: 11,
            children: [],
            parent: [ /* see comment above [line 283] */
                10,
                10,
                10
            ],
            content: function(pointer){
                let self = this;
                let button = [
                    0,
                    1,
                    2,
                ];
                let count = self.buttonCount;
                if(pointer=="page-indicator-row"){

                }
                //console.log(pointer);
                return ".";
            },
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "site-menu-button",
            type: "button-container",
            class: "site-menu-button-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 12,
            children: [],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "site-menu",
            type: "container",
            class: "site-menu-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 13,
            children: [],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "multiple",
            type: "button-container",
            class: "site-menu-item",
            id: function(prefix){
                let self = this;
                self.count++;
                let a = self.count;
                self.a = a;
                return prefix+"-"+self.class+"-"+a;
            },
            count: -1,
            a: 0,
            content: function(pointer){
                let self = this;
                let menuItems = [
                    "website",
                    "demos",
                    "old row"
                ];
                return menuItems[self.a];
            },
            index: 14,
            children: [],
            parent: [
                13,
                13,
                13
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
            name: "multiple",
            type: "container",
            class: "site-menu-subitem",
            id: function(prefix){
                let self = this;
                return prefix+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 15,
            children: [],
            parent: [],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "multiple",
            type: "container",
            class: "profile-container",
            id: function(prefix){
                let self = this;
                return prefix+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 16,
            children: [],
            parent: [],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "company-blurb",
            type: "container",
            class: "company-blurb-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 17,
            children: [],
            parent: [
                2
            ],
            content: function(pointer){
                let self = this;
            //    console.log(pointer);

                return `Affordable access to open internets is as vital to
                 human life and community well being as access to clean drinking water.
                  The House of Venus, Benefit Corporation empowers entrepreneurs of all
                  ages to to engage their communities via immersive media shared across an open access
                  WiFi network ("HOUSE OF VENUS"). Developers, creators, artists, and inventors can leverage smart
                  city technolgy -- ranging from sentient robotics to augmented reality -- to design
                  experiences that truly reflect their imaginations and address their practical needs.`;
            },
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "preview-closer",
            type: "button-container",
            class: "preview-closer-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 18,
            children: [],
            parent: [],
            content: function(){
                return "x";
            },
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "mp4-media",
            type: "media-container",
            class: "video-container",
            id: function(){
                let self = this;
                return self.name+"-"+self.class;
            },
            index: 19,
            children: [
                20
            ],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("video");
                el.setAttribute("id", self.id());
                el.setAttribute("controls", "");
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "video-source",
            type: "source-container",
            class: "media-reference",
            id: function(){
                let self = this;
                return self.name+"-"+self.class;
            },
            index: 20,
            children: [],
            parent: [
                19
            ],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("source");
                el.setAttribute("id", self.id());
                el.setAttribute("src", "./media/vid/ManCityVsWatford.mp4");
                el.setAttribute("type", "video/mp4");
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
