const { 
    expect 
} = require("chai")
const {
    calculateCubicWeight
} = require("../functions.js")

describe(
    "calculateCubicWeight",
    function ()
    {
        it(
            "should return 6 for example",
            function ()
            {
                const result = calculateCubicWeight(0.4, 0.2, 0.3)
                expect(result).to.be.equal(6)
            }
        )
    }
)