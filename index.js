const HummusRecipe = require('hummus-recipe');
const fs = require('fs');
const path = require('path');

const coordinates = {
    x: {
        initial: 50,
        addition: 80,
        width: [
            30, 30, 50, 60, 70, 80
        ]
    },
    y: {
        initial: 25,
        addition: 18
    }
}

const member = {
    name: 'Test User Name',
    phone: '01111193404',
    address: "Test Address Value",
    email: "example@domain.ext"
}

const office_data = [
    { Name: 'Test Virt', type: 'Virtual', location: 'NY | Queens', 'Base Rate': '1000$', "Discount Rate": "50%", "Discount Duration": "1 Mounth" },
    { Name: 'Test Virt', type: 'Virtual', location: 'NY | Queens', 'Base Rate': '1000$', "Discount Rate": "50%", "Discount Duration": "1 Mounth" },
    { Name: 'Test Virt', type: 'Virtual', location: 'NY | Queens', 'Base Rate': '1000$', "Discount Rate": "50%", "Discount Duration": "1 Mounth" },
    { Name: 'Test Virt', type: 'Virtual', location: 'NY | Queens', 'Base Rate': '1000$', "Discount Rate": "50%", "Discount Duration": "1 Mounth" },
    { Name: 'Test Virt', type: 'Virtual', location: 'NY | Queens', 'Base Rate': '1000$', "Discount Rate": "50%", "Discount Duration": "1 Mounth" },
]

const test_function = async () => {
    try {

        let pdfDoc = new HummusRecipe('new', path.join('public', 'output.pdf'));
        pdfDoc = pdfDoc
            .createPage('letter-size')

        pdfDoc = pdfDoc
            .text(
                "Tenenat and Unit Information",
                'center', 50,
                {
                    color: [0, 0, 0],
                    fontSize: 14,
                    font: 'Helvatica',
                    bold: true,
                    align: 'center center'
                }
            )
            .text(
                "Tenant Info",
                80, 80,
                {
                    color: [0, 0, 0],
                    fontSize: 14,
                    font: 'Helvatica',
                    bold: true,
                    align: 'center center'
                }
            )

        let member_initial_y = 120;
        Object.keys(member)
            .forEach((key, i) => {
                pdfDoc = pdfDoc
                    .text(
                        key.charAt(0).toUpperCase() + key.slice(1),
                        45, member_initial_y + ((i + 1 + 20) * i),
                        {
                            color: [0, 0, 0],
                            fontSize: 12,
                            font: 'Helvatica',
                        }
                    )
                    .text(
                        member[key],
                        120, member_initial_y + ((i + 1 + 20) * i),
                        {
                            color: [0, 0, 0],
                            fontSize: 12,
                            font: 'Helvatica',
                        }
                    )
            });

        pdfDoc = pdfDoc
            .text(
                "Units Information",
                100, 250,
                {
                    color: [0, 0, 0],
                    fontSize: 14,
                    font: 'Helvatica',
                    bold: true,
                    align: 'center center'
                }
            )

        let units_intial_y = 240;
        office_data.forEach((office, i) => {
            units_intial_y = (units_intial_y + (i + 40));
            Object.keys(office)
                .forEach((key, j) => {
                    units_intial_y = (units_intial_y + (j + 20));
                    pdfDoc = pdfDoc
                        .text(
                            key,
                            45, units_intial_y,
                            {
                                color: [0, 0, 0],
                                fontSize: 12,
                                font: 'Helvatica',
                            }
                        )
                        .text(
                            office[key],
                            160, units_intial_y,
                            {
                                color: [0, 0, 0],
                                fontSize: 12,
                                font: 'Helvatica',
                            }
                        )
                })
        })

        pdfDoc
            .endPage()
            .endPDF(_ => {
                console.log('>> PDF SAVED')
            });

        return true
    } catch (e) {
        console.log(e)
        return e
    }
}

test_function()