var Experience = {
    environment: [
        {
            name: "card-checkout-page",
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
            name: "checkout",
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
                1,  // #card-image-container
                6
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
            class: "image-container",
            id: function(){
                let self = this;
                return self.name+"-"+self.class;
            },
            content: function(){
                let self = this;
                console.log(self.id());
                console.log("image of the ARia")
                return "";
            },
            index: 1,
            children: [],
            parent: [
                0,
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
            name: "preorder",
            type: "container",
            class: "checkout-header-container",
            id: function(prefix){
                let self = this;
                return self.name+"-"+self.class;
            },
            content: function(){
                let self = this;
                console.log(self.id());
                return "preorder";
            },
            index: 2,
            children: [],
            parent: [
                6,
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
            name: "aria",
            type: "container",
            class: "checkout-subheader-container",
            id: function(){
                let self = this;
                return self.name+"-"+self.class;
            },
            content: function(){
                let self = this;
                console.log(self.id());
                return "Augmented Reality internet assistant";
            },
            index: 3,
            children: [],
            parent: [
                6,
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
            name: "standard",
            type: "button-container",
            class: "buy-item-button-container",
            id: function(){
                let self = this;
                return self.name+"-"+self.class;
            },
            content: function(){
                let self = this;
                console.log(self.id());
                return "STANDARD EDITION $299.99";
            },
            index: 4,
            children: [],
            parent: [
                6,
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
            name: "business",
            type: "button-container",
            class: "buy-item-button-container",
            id: function(){
                let self = this;
                return self.name+"-"+self.class;
            },
            content: function(){
                let self = this;
                console.log(self.id());
                return "DIRECTOR'S EDITION $399.99";
            },
            index: 5,
            children: [],
            parent: [
                6,
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
            name: "purchase",
            type: "container",
            class: "options-container",
            id: function(){
                let self = this;
                return self.name+"-"+self.class;
            },
            content: function(){
                let self = this;
                console.log(self.id());
                return "";
            },
            index: 6,
            children: [
                2,
                3,
                4,
                5
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
        }
        /*{
            name: "site-menu",
            type: "container",
            class: "site-menu-container",
            id: function(){
                let self = this;
                return self.name;
            },
            index: 2,
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
        }*/
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
                    case "business-buy-item-button-container":
                        console.log("connect to payment gateway with request for business item edition");
                        break;
                    case "standard-buy-item-button-container":
                        console.log("connect to payment gateway with request for standard item edition");
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
