module.exports = function (app) {
    let userArrays = require("../data/friends")

    app.post("/api/friends", function (req, res) {
        let totalScoreArray = []
        for (let i = 0; i < userArrays.length; i++) {
            let totalScore = 0;
            let currentArray = userArrays[i]
            for (let i = 0; i < req.body.scores.length; i++) {
                let numOne = parseInt(req.body.scores[i])
                let numTwo = parseInt(currentArray.scores[i])
                totalScore += Math.abs(numOne - numTwo)
                console.log("current totalScore", totalScore)
            }
            totalScoreArray.push(totalScore)
            console.log(totalScore)
        }
        console.log(totalScoreArray)
        userArrays.push(req.body)

        function indexOfSmallest(a) {
            var lowest = 0;
            for (var i = 1; i < a.length; i++) {
                if (a[i] < a[lowest]) lowest = i;
            }
            return lowest;
        }

        lowest = indexOfSmallest(totalScoreArray)

        lowest = parseInt(lowest)
        let name = userArrays[lowest].name
        let photo = userArrays[lowest].photo

        res.json({
            name: name,
            photo: photo
        })




    })

    app.get("/api/friends", function (req, res) {

        res.json(userArrays)

    })
}