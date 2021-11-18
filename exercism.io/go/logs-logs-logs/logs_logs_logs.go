package logs

import "strings"

// Application identifies the application emitting the given log.
func Application(log string) string {
    var runes map[rune]string = map[rune]string{
      0x2757:  "recommendation",
      0x1f50d: "search",
      0x2600:  "weather",
    }
	for _, r := range log {
		if app, exists := runes[r]; exists {
			return app
		}
	}
	return "default"
}

// Replace replaces all occurrences of old with new, returning the modified log
// to the caller.
func Replace(log string, oldRune, newRune rune) string {
	return strings.ReplaceAll(log, string(oldRune), string(newRune))
}

// WithinLimit determines whether or not the number of characters in log is
// within the limit.
func WithinLimit(log string, limit int) bool {
    runes := []rune(log)
	return len(runes) <= limit
}
