var calculateCubicWeight

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