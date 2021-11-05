//Package weather provides tools pertaining to global weather.
package weather

// CurrentCondition represents the weather condition of a city.
var CurrentCondition string

// CurrentLocation represents a city.
var CurrentLocation string

// Forecast returns a string consisting of a city and its weather condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
