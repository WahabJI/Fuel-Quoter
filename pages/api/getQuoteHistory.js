

export default function getQuoteHistory(req, res) {
    
    //conn to database
    //check if user
    //find user data
    const Data = [
        //add email to check for whose data it is
        { date: '01-01-2022', address_1: '3551 Cullen Blvd', address_2: 'Rm563', city: 'Houston', state: 'TX', zipCode: 77004, gallons: 100, pricePerGallon: 2.50, totalCost: 250 },
        { date: '02-01-2022', address_1: '2700 Bay Area Blvd', address_2: 'N/A', city: 'Houston', state: 'TX', zipCode: 77058, gallons: 200, pricePerGallon: 2.75, totalCost: 550 },
        { date: '03-01-2022', address_1: '1 Main St', address_2: 'N/A', city: 'Houston', state: 'TX', zipCode: 77002, gallons: 150, pricePerGallon: 3.00, totalCost: 450 },
        { date: '04-01-2022', address_1: '14000 University Blvd', address_2: 'Albert and Mamie George Bldg.', city: 'Sugar Land', state: 'TX', zipCode: 77479, gallons: 300, pricePerGallon: 2.25, totalCost: 675 },

        { date: '01-01-2022', address_1: '3551 Cullen Blvd', address_2: 'Rm563', city: 'Houston', state: 'TX', zipCode: 77004, gallons: 100, pricePerGallon: 2.50, totalCost: 250 },
        { date: '02-01-2022', address_1: '2700 Bay Area Blvd', address_2: 'N/A', city: 'Houston', state: 'TX', zipCode: 77058, gallons: 200, pricePerGallon: 2.75, totalCost: 550 },
        { date: '03-01-2022', address_1: '1 Main St', address_2: 'N/A', city: 'Houston', state: 'TX', zipCode: 77002, gallons: 150, pricePerGallon: 3.00, totalCost: 450 },
        { date: '04-01-2022', address_1: '14000 University Blvd', address_2: 'Albert and Mamie George Bldg.', city: 'Sugar Land', state: 'TX', zipCode: 77479, gallons: 300, pricePerGallon: 2.25, totalCost: 675 },
        { date: '01-01-2022', address_1: '3551 Cullen Blvd', address_2: 'Rm563', city: 'Houston', state: 'TX', zipCode: 77004, gallons: 100, pricePerGallon: 2.50, totalCost: 250 },
        { date: '02-01-2022', address_1: '2700 Bay Area Blvd', address_2: 'N/A', city: 'Houston', state: 'TX', zipCode: 77058, gallons: 200, pricePerGallon: 2.75, totalCost: 550 },
        { date: '03-01-2022', address_1: '1 Main St', address_2: 'N/A', city: 'Houston', state: 'TX', zipCode: 77002, gallons: 150, pricePerGallon: 3.00, totalCost: 450 },
        { date: '04-01-2022', address_1: '14000 University Blvd', address_2: 'Albert and Mamie George Bldg.', city: 'Sugar Land', state: 'TX', zipCode: 77479, gallons: 300, pricePerGallon: 2.25, totalCost: 675 },
        { date: '01-01-2022', address_1: '3551 Cullen Blvd', address_2: 'Rm563', city: 'Houston', state: 'TX', zipCode: 77004, gallons: 100, pricePerGallon: 2.50, totalCost: 250 },
        { date: '02-01-2022', address_1: '2700 Bay Area Blvd', address_2: 'N/A', city: 'Houston', state: 'TX', zipCode: 77058, gallons: 200, pricePerGallon: 2.75, totalCost: 550 },
        { date: '03-01-2022', address_1: '1 Main St', address_2: 'N/A', city: 'Houston', state: 'TX', zipCode: 77002, gallons: 150, pricePerGallon: 3.00, totalCost: 450 },
        { date: '04-01-2022', address_1: '14000 University Blvd', address_2: 'Albert and Mamie George Bldg.', city: 'Sugar Land', state: 'TX', zipCode: 77479, gallons: 300, pricePerGallon: 2.25, totalCost: 675 },

    ]
    // sort data by most recent - least recent
    Data.sort((a, b) => (a.date < b.date) ? 1 : -1)
    //respond sending data to frontend
    res.status(200).json(Data)
}