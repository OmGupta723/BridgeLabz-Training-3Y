"use strict";

let user = {
    name: "Om",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();