package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch {
    case card == "ace":
		  return 11
    case card == "two":
		  return 2
    case card == "three":
		  return 3
    case card == "four":
		  return 4
    case card == "five":
		  return 5
    case card == "six":
		  return 6
    case card == "seven":
		  return 7
    case card == "eight":
		  return 8
    case card == "nine":
		  return 9
    case card == "ten":
		  return 10
    case card == "jack":
		  return 10
    case card == "queen":
		  return 10
    case card == "king":
		  return 10
	  default:
      return 0
    }
}

// IsBlackjack returns true if the player has a blackjack, false otherwise.
func IsBlackjack(card1, card2 string) bool {
	return ParseCard(card1) + ParseCard(card2) == 21
}

// LargeHand implements the decision tree for hand scores larger than 20 points.
func LargeHand(isBlackjack bool, dealerScore int) string {
    if !isBlackjack {
        return "P"
    } else if isBlackjack && dealerScore < 10 {
        return "W"
    } else {
        return "S"
    }
}

// SmallHand implements the decision tree for hand scores with less than 21 points.
func SmallHand(handScore, dealerScore int) string {
	if handScore >= 17 {
        return "S"
    } else if 12 <= handScore && handScore <= 16 {
        if dealerScore >= 7 {
          return "H"
        }
        return "S"
    } else {
        return "H"
    }
}
