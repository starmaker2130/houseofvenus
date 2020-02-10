var Experience = {
    environment: [
        {
            name: "saturn",
            id: function(){
                return "planet-scene-container";
            },
            type: "website",
            class: "experience-container",
            settings: "all",
            element: function(){
                let self = this;
                let el = document.createElement("a-scene");
                el.setAttribute("background", {
                    transparent: true,
                });
                el.setAttribute("embedded", "true");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        }
    ],
    objectsubject: [
        {
            name: "webcam-container",
            type: "container",
            class: "viewer-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 0,
            children: [],
            parent: [
              -1
            ],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("video");
                el.setAttribute("id", self.id());
                el.setAttribute("width", "640px");
                el.setAttribute("height", "480px");
                el.style.top = "0";
                el.style.left = "0";
                el.style.zIndex = "100";
                el.setAttribute("autoplay", "true");

                el.classList.add(self.class);
                return el;
            }
        },    //0
        {
            name: "asset-manager",
            type: "container",
            class: "asset-manager-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 1,
            children: [
                2, // preview-arrow-container
                12
            ],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("a-assets");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },    //1
        {
            name: "saturn-surface-texture",
            type: "asset-container",
            class: "texture-asset-file-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 2,
            children: [],
            parent: [
                1
            ],
            content: function(pointer){
                let self = this;
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("img");
                 el.setAttribute("id", self.id());
                el.setAttribute("src", "../../media/texture/saturnmap.jpg");
                el.setAttribute("preload", "true");
                el.classList.add(self.class);
                return el;
            }
        },    //2
        {
            name: "planet-header-title",
            type: "container",
            class: "title-container",
            id: function(){
                let self = this;
                return self.name;
            },
            content: function(pointer){
                let self = this;
            //    console.log(pointer);
                return "";
            },
            index: 3,
            children: [],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("a-text");
                el.setAttribute("id", self.id());
                el.setAttribute("value", "Header Title");
                el.setAttribute("align", "center");
                el.setAttribute("width", "5");
                el.setAttribute("position", "0 3.5 22");
                el.classList.add(self.class);
                return el;
            }
        },    //3
        {
            name: "planet-time-header",
            type: "container",
            class: "title-container",
            id: function(prefix){
                let self = this;
                return self.name;
            },
            content: function(pointer){
                let self = this;

                return "";
            },
            index: 4,
            children: [],
            parent: [],
            element: function(pointer){
                let self = this;
                let el = document.createElement("a-text");
                el.setAttribute("id", self.id());
                el.setAttribute("value", "Time Header");
                el.setAttribute("align", "center");
                el.setAttribute("width", "1");
                el.setAttribute("position", "0 3 22");
                el.classList.add(self.class);
                return el;
            }
        },    //4
        {
            name: "planet-date-header",
            type: "container",
            class: "title-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 5,
            children: [],
            parent: [

            ],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("a-text");
                el.setAttribute("id", self.id());
                el.setAttribute("value", "Date Header");
                el.setAttribute("align", "center");
                el.setAttribute("width", "3");
                el.setAttribute("position", "0 3.2 22");
                el.classList.add(self.class);
                return el;
            }
        },    //5
        {
            name: "saturn-body",
            type: "container",
            class: "planet-body-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 6,
            children: [
                13
            ],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("a-sphere");
                el.setAttribute("id", self.id());
                el.setAttribute("rotation", "-27 0 0");
                el.setAttribute("material", "src: #saturn-surface-texture;");
                el.setAttribute("radius", "9.14");
                el.setAttribute("position", "0 1.25 -5");
                el.setAttribute("animation", "property: rotation; to: -27 360 0; loop: true; dur: 326592; easing: linear;");
                el.classList.add(self.class);
                return el;
            }
        },    //6
        {
            name: "planet-description-container",
            type: "container",
            class: "description-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 7,
            children: [],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("a-text");
                el.setAttribute("id", self.id());
                el.setAttribute("value", "Header Title");
                el.setAttribute("align", "center");
                el.setAttribute("line-height", "75");
                el.setAttribute("rotation", "-45 0 0");
                el.setAttribute("width", "3");
                el.setAttribute("position", "0 0 22");
                el.classList.add(self.class);
                return el;
            }
        },    //7
        {
            name: "camera",
            type: "container",
            class: "camera-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 8,
            children: [],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("a-camera");
                el.setAttribute("id", self.id());
                el.setAttribute("look-controls-enabled", "true");
                el.setAttribute("wasd-controls-enabled", "true");
                el.setAttribute("position", "0 1.87 25");
                el.classList.add(self.class);
                return el;
            }
        },    //8
        {
            name: "menu-item-0",
            type: "container",
            class: "menu-item-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 9,
            children: [],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("a-sphere");
                el.setAttribute("id", self.id());
                el.setAttribute("position", "-1 -1 25.25");
                el.setAttribute("radius", "0.25");
                el.setAttribute("material", "color: red");
                el.classList.add(self.class);
                return el;
            }
        },    //9
        {
            name: "menu-item-1",
            type: "container",
            class: "menu-item-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 10,
            children: [],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("a-sphere");
                el.setAttribute("id", self.id());
                el.setAttribute("position", "0 -1 25");
                el.setAttribute("radius", "0.25");
                el.setAttribute("material", "color: green");
                el.classList.add(self.class);
                return el;
            }
        },    //10
        {
            name: "menu-item-2",
            type: "container",
            class: "menu-item-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 11,
            children: [],
            parent: [],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("a-sphere");
                el.setAttribute("id", self.id());
                el.setAttribute("position", "1 -1 25.25");
                el.setAttribute("radius", "0.25");
                el.setAttribute("material", "color: blue");
                el.classList.add(self.class);
                return el;
            }
        },    //11
        {
            name: "saturn-rings-texture",
            type: "asset-container",
            class: "texture-asset-file-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 12,
            children: [],
            parent: [
                1
            ],
            content: function(){
                return "";
            },
            element: function(){
                let self = this;
                let el = document.createElement("img");
                el.setAttribute("id", self.id());
                el.setAttribute("src", "../../media/texture/saturnringcolor.jpg");
                el.setAttribute("preload", "true");
                el.classList.add(self.class);
                return el;
            }
        },    //12
        {
                name: "saturn-rings",
                type: "container",
                class: "ring-object-container",
                id: function(){
                    let self = this;
                    return self.name;
                },
                index: 13,
                children: [],
                parent: [
                    6
                ],
                content: function(){
                    return "";
                },
                element: function(){
                    let self = this;
                    let el = document.createElement("a-ring");
                    el.setAttribute("id", self.id());
                    el.setAttribute("position", "0 0 0");
                    el.setAttribute("rotation", "-30 0 0");
                    el.setAttribute("material", "side: double; src: #saturn-rings-texture");
                    el.setAttribute("radius-inner", "11");
                    el.setAttribute("radius-outer", "16");
                    el.classList.add(self.class);
                    return el;
                }
            }     //13
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
