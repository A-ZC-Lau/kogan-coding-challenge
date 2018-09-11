const axios = require("axios")
const {
    calculateCubicWeight,
    createUrl,
    getData,
} = require("./functions.js")

run()

async function run()
{
    const data = []
    
    let path = "/api/products/1"
    let url = createUrl(path)
    do {
        const category = "Air Conditioners"
        let response, result
        try 
        {
            response = await getData(url)
            result = response.data
        } 
        catch (error) 
        {
            console.error(error)    
        }
        
        let filtered_results = result.objects.filter( element => element.category === category)
        for (let element of filtered_results)
        {
            let all_sizes = Object.values(element.size)
            if (all_sizes.length !== 3)
            {
                throw Error("there are more sizes than expected")
            }

            all_sizes = all_sizes.map( size => size / 100 ) // convert to meters
            element["average cubic weight"] = calculateCubicWeight(...all_sizes)
        }

        data.push(...filtered_results)
        if (!result.next)
        {
            break
        }
        url = createUrl(result.next)
    }
    while (url)

    console.log(JSON.stringify(data, null, 4))
    return data
}