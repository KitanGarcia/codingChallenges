function codingScoreReportPercent(scores) {
    //scores must be an array
    if (!Array.isArray(scores)) {
        return -1;
    }
    // //scores inside scores array must be numbers
    if (typeof scores[0] !== "number") {
        return -1;
    }
    
    
    let distribution = {};
    let numScores = scores.length;
    
    //iterate through scores and add to hash table
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 300 && scores[i] <= 599) {
            if (distribution.hasOwnProperty("Poor")) {
                distribution["Poor"] += 1 / numScores;
            }
            else {
                distribution["Poor"] = 1 / numScores;
            }
        }
        
        if (scores[i] >= 600 && scores[i] <= 699) {
            if (distribution.hasOwnProperty("Fair")) {
                distribution["Fair"] += 1 / numScores;
            }
            else {
                distribution["Fair"] = 1 / numScores;
            }
        }
        
        if (scores[i] >= 700 && scores[i] <= 749) {
            if (distribution.hasOwnProperty("Good")) {
                distribution["Good"] += 1 / numScores;
            }
            else {
                distribution["Good"] = 1 / numScores;
            }
        }
        
        if (scores[i] >= 750 && scores[i] <= 799) {
            if (distribution.hasOwnProperty("Excellent")) {
                distribution["Excellent"] += 1 / numScores;
            }
            else {
                distribution["Excellent"] = 1 / numScores;
            }
        }
        
        if (scores[i] >= 800) {
            if (distribution.hasOwnProperty("Elite")) {
                distribution["Elite"] += 1 / numScores;
            }
            else {
                distribution["Elite"] = 1 / numScores;
            }
        }
    }
    // console.log(distribution);
    

    let keys = Object.keys(distribution);
    
    //reference to check which levels are higher
    let scoremap = {
        "Poor": 1,
        "Fair": 2,
        "Good": 3,
        "Excellent": 4,
        "Elite": 5,
    };
    
    let sortedHash = {};
    //sort hash
    keys.sort(function(a, b) {
        if (distribution[b] === distribution[a]) {
            console.log(a);
            if (scoremap[a] > scoremap[b]) {
                console.log(a);
                console.log(distribution[a]);
                return -1; //negative so higher level appears first
            }
        }
        return distribution[b] - distribution[a];
    }).forEach(function(k) {
        sortedHash[k] = distribution[k];
    })
    console.log(sortedHash);
    
    
    
    //format hash table
    for (const key in sortedHash) {
        sortedHash[key] = parseFloat(sortedHash[key] * 100).toFixed(2) + "%";
    }

    //arrange in array
    let result = [];
    for (const [key, value] of Object.entries(sortedHash)) {
        result.push(`${key}: ${value}`);
    }

    return result;
}
