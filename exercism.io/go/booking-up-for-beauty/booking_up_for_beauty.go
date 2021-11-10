package booking

import "fmt"
import "time"

// Schedule returns a time.Time from a string containing a date
func Schedule(date string) time.Time {
	t, _ := time.Parse("1/2/2006 15:04:05", date)
	return t
}

// HasPassed returns whether a date has passed
func HasPassed(date string) bool {
	now := time.Now()
	t, _ := time.Parse("January 2, 2006 15:04:05", date)
	return t.Before(now)
}

// IsAfternoonAppointment returns whether a time is in the afternoon
func IsAfternoonAppointment(date string) bool {
    time, _ := time.Parse("Monday, January 2, 2006 15:04:05", date)
    if 12 <= time.Hour() && time.Hour() < 18 {
        return true
    }
    return false
}

// Description returns a formatted string of the appointment time
func Description(date string) string {
	desc := Schedule(date).Format("Monday, January 2, 2006, at 15:04")
	return fmt.Sprintf("You have an appointment on %s.", desc)
}

// AnniversaryDate returns a Time with this year's anniversary
func AnniversaryDate() time.Time {
	now := time.Now()
	date := time.Date(now.Year(), time.September, 15, 0, 0, 0, 0, time.UTC)
	return date
}
