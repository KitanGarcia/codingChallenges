package lasagna

func PreparationTime(layers []string, averageTime int) int {
    if averageTime == 0 {
        return len(layers) * 2
    }
	return len(layers) * averageTime
}

func Quantities(layers []string) (int, float64) {
    noodles := 0
    var sauce float64
    sauce = 0
    for i := 0; i < len(layers); i++ {
        if layers[i] == "noodles" {
            noodles += 50
        } else if layers[i] == "sauce" {
          sauce += .2
        }
    }
	return noodles, sauce
}

func AddSecretIngredient(friendsList []string, myList []string) []string {
    return append(myList, friendsList[len(friendsList) - 1])
}

func ScaleRecipe(amounts []float64, numPortions int) []float64 {
    scaledAmounts := make([]float64, len(amounts))
    for i := range scaledAmounts {
        scaledAmounts[i] = amounts[i] * float64(numPortions) / 2
    }
	return scaledAmounts
}
