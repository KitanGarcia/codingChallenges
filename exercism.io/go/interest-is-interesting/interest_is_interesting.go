package interest

// InterestRate returns the interest rate for the provided balance.
func InterestRate(balance float64) float32 {
    if balance < 0 {
        return float32(3.213)
    } else if 0 <= balance && balance < 1000{
        return float32(.5)
    } else if 1000 <= balance && balance < 5000{
        return float32(1.621)
    }
    return float32(2.475)
}

// Interest calculates the interest for the provided balance.
func Interest(balance float64) float64 {
	return float64(InterestRate(balance) / 100) * balance
}

// AnnualBalanceUpdate calculates the annual balance update, taking into account the interest rate.
func AnnualBalanceUpdate(balance float64) float64 {
	return Interest(balance) + balance
}

// YearsBeforeDesiredBalance calculates the minimum number of years required to reach the desired balance:
func YearsBeforeDesiredBalance(balance, targetBalance float64) int {
	years := 0
    for balance < targetBalance {
        balance = AnnualBalanceUpdate(balance)
        years++
    }
	return years
}
