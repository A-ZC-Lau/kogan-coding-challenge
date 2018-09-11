const axios = require("axios")

var 
    calculateCubicWeight,
    createUrl,
    getData



calculateCubicWeight = function(x, y, z)
{
    // x y z values must be in meters
    const conversion_factor = 250
    let result = x * y * z * conversion_factor
    result = result.toPrecision(2)
    // remove unnecessary 0s
    return +(result.toString())
}
module.exports.calculateCubicWeight = calculateCubicWeight



createUrl = function(path)
{
    const base_url = "http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com"
    return base_url + path
}
module.exports.createUrl = createUrl



async function getData(link)
{
    const result = await axios.get(link)
    return result
}
module.exports.getData = getData