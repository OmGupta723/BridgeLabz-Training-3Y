"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    generateForm() {
        let formHTML = '<form id="customForm">';

        this.fields.forEach(function(field) {
            formHTML += `
                <label for="${field.name}">${field.label}</label><br>

                <input
                    type="${field.type}"
                    id="${field.name}"
                    name="${field.name}"
                    required
                ><br><br>
            `;
        });

        formHTML += '<button type="submit">Submit</button>';
        formHTML += '</form>';

        document.getElementById("formContainer").innerHTML = formHTML;

        document.getElementById("customForm").addEventListener(
            "submit",
            (event) => {
                event.preventDefault();

                const formData = this.getFormData();

                document.getElementById("output").textContent =
                    JSON.stringify(formData, null, 2);

                console.log(formData);
            }
        );
    }

    getFormData() {
        const formData = {};

        this.fields.forEach(function(field) {
            formData[field.name] =
                document.getElementById(field.name).value;
        });

        return formData;
    }
}

const fields = [
    {
        name: "name",
        label: "Full Name",
        type: "text"
    },
    {
        name: "email",
        label: "Email Address",
        type: "email"
    },
    {
        name: "age",
        label: "Age",
        type: "number"
    }
];

const formBuilder = new FormBuilder(fields);

formBuilder.generateForm();