package birdwatcher

// TotalBirdCount return the total bird count by summing
// the individual day's counts.
func TotalBirdCount(birdsPerDay []int) int {
	total := 0
    for i := 0; i < len(birdsPerDay); i++ {
        total += birdsPerDay[i]
    }
	return total
}

// BirdsInWeek returns the total bird count by summing
// only the items belonging to the given week.
func BirdsInWeek(birdsPerDay []int, week int) int {
    startIndex := 7 * (week - 1)
    endIndex := len(birdsPerDay) - 1
    count := 0
    if endIndex > startIndex + 7 {
        endIndex = startIndex + 7
    }
    for i := startIndex; i < endIndex; i++ {
        count += birdsPerDay[i]
    }
	return count
}

// FixBirdCountLog returns the bird counts after correcting
// the bird counts for alternate days.
func FixBirdCountLog(birdsPerDay []int) []int {
	for i := 0; i < len(birdsPerDay); i++ {
        if i % 2 == 0 {
            birdsPerDay[i] += 1
        }
    }
	return birdsPerDay
}
