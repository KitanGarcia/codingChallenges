/*
Implement a Calendar class to store your events. A new event can be added if adding the event will not cause a double booking.

Your class will have the method, book(start, end). Formally, this represents a booking on the half open interval [start, end)

A double booking happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)

For each call to the method Calendar.book, return true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.

Also, modify the solution to support the removal of existing bookings.
 */

// For testing...
const Mocha = require("mocha");
const chai = require("chai");
const assert = chai.assert;
const mocha = new Mocha();
mocha.suite.emit("pre-require", this, "solution", mocha);

// Defines a Calendar class consisting of an events object and associated methods.
// Meetings should be valid and not overlap with other meetings in events.
class Calendar {
  // Stores start dates as keys and Meetings as values
  // ie. { startDate: Meeting }
  events = {};

  // Creates a calendar with its first meeting if given
  constructor(meeting) {
    if (this.isValidMeeting(meeting)) {
      this.events[meeting.start] = meeting;
    }
  }

  // Adds a meeting to the calendar assuming the meeting is valid and there is no overlap with another event
  book(meeting) {
    if (this.isValidMeeting(meeting)) {
      // Check if new meeting overlaps with any existing meetings in events
      let startDates = Object.keys(this.events);
      for (let startDate of startDates) {
        if (this.isOverlapping(meeting, this.events[startDate])) {
          return false;
        }
      }
      this.events[meeting.start] = meeting;
      return true;
    }

    return false;
  }

  // Checks if a meeting is valid
  isValidMeeting(meeting) {
    // input is not a Meeting
    if (!(meeting instanceof Meeting)) {
      return false;
    }

    // input is an invalid Meeting (described in Meeting class definition)
    if (!Object.keys(meeting).length === 0) {
      return false;
    }
    return true;
  }

  // Checks if a new meeting overlaps with a preexisting meeting
  isOverlapping(newMeeting, originalMeeting) {
    if (
      (newMeeting.start < originalMeeting.start &&
        newMeeting.end < originalMeeting.start) ||
      newMeeting.start >= originalMeeting.end
    ) {
      return false;
    }
    return true;
  }

  // Deletes a booking if it can be found
  removeBooking(meeting) {
    // Meeting found with both start and end date
    console.log(meeting);
    console.log(this.events);
    if (
      this.events[meeting.start] &&
      this.events[meeting.start].start === meeting.start &&
      this.events[meeting.start].end === meeting.end
    ) {
      delete this.events[meeting.start];
      return true;
    }
    return false;
  }
}

// Defines a Meeting class consisting of a start date and end date, ie. {start: date1, end: date2}
// If one of the dates is invalid or if the start date occurs after the end date,
// the meeting is invalid and {} is returned
class Meeting {
  constructor(start, end) {
    if (!start || !end) {
      console.log("Invalid meeting: Start and/or end date is not given");
      return {};
    }

    // Start and end dates should be valid dates
    if (!this.isValidDate(start) || !this.isValidDate(end)) {
      console.log("Invalid meeting: Start and/or end date is invalid");
      return {};
    }

    this.start = new Date(start);
    this.end = new Date(end);

    // Start date should be before or equal to end date (assuming a meeting of 0 seconds can be scheduled)
    if (this.start > this.end) {
      console.log("Invalid meeting: Start date occurs after end date");
      return {};
    }
  }

  // Checks if a date is valid
  isValidDate(date) {
    date = new Date(date);
    if (date instanceof Date && !isNaN(date)) {
      return true;
    }
    return false;
  }
}

/**********TESTS***************/
const calendar = new Calendar();

const meetings = [
  // Invalid meetings
  new Meeting("2022-07-0110:00:00", "2022-07-01T12:00:00"), // false
  new Meeting("2022-07-01T12:00:00", "2022-07-01T11:00:00"), // false

  // Valid meetings
  new Meeting("2022-07-01T10:00:00", "2022-07-01T12:00:00"), // true
  new Meeting("2022-07-01T11:00:00", "2022-07-01T12:00:00"), // false
  new Meeting("2022-07-01T12:00:00", "2022-07-02T13:00:00"), // true
];

meetings.forEach((meeting) => {
  console.log(calendar.book(meeting));
});

describe("Meetings", function () {
  it("should return {} no dates", function () {
    let meeting = new Meeting();
    assert.equal(Object.keys(meeting).length, 0);
  });

  it("should return {} with an invalid date", function () {
    let meeting1 = new Meeting("11/11/2011", "02/36/2019");
    let meeting2 = new Meeting("bad", "meeting");
    let meeting3 = new Meeting("2022-07-0110:00:00", "2022-07-01T12:00:00");
    assert.equal(Object.keys(meeting1).length, 0);
    assert.equal(Object.keys(meeting2).length, 0);
    assert.equal(Object.keys(meeting3).length, 0);
  });

  it("should return {} if the start date is after the end date", function () {
    let meeting = new Meeting("02/25/2022", "11/11/2011");
    assert.equal(Object.keys(meeting).length, 0);
  });

  it("should return a valid Meeting if start and end dates are valid and the same", function () {
    let meeting = new Meeting("02/25/2022", "02/25/2022");
    assert.equal(Object.keys(meeting).length, 2);
    assert.property(meeting, "start");
    assert.property(meeting, "end");
    assert.equal(meeting.start.valueOf, new Date("02/25/2022").valueOf);
    assert.equal(meeting.end.valueOf, new Date("02/25/2022").valueOf);
  });

  it("should return a valid Meeting if start and end dates are valid and different", function () {
    let meeting = new Meeting("02/25/2022", "03/25/2022");
    assert.equal(Object.keys(meeting).length, 2);
    assert.property(meeting, "start");
    assert.property(meeting, "end");
    assert.equal(meeting.start.valueOf, new Date("02/25/2022").valueOf);
    assert.equal(meeting.end.valueOf, new Date("03/25/2022").valueOf);
  });
});

describe("Calendar", function () {
  /******Constructor******/
  it("should create an empty events {} if not given input a meeting", function () {
    let calendar = new Calendar();
    assert.equal(Object.keys(calendar.events).length, 0);
  });

  it("should create an empty events {} if not given an invalid meeting in the constructor", function () {
    let meeting = new Meeting("bad", "meeting");
    let calendar = new Calendar(meeting);
    assert.equal(Object.keys(calendar.events).length, 0);
  });

  it("should create an events {} with 1 meeting if given a valid meeting in the constructor", function () {
    let meeting = new Meeting("02/25/2022", "03/25/2022");
    let calendar = new Calendar(meeting);
    assert.equal(Object.keys(calendar.events).length, 1);
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "start"
    );
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "end"
    );
  });
  /******Constructor End******/

  /******Booking******/
  it("should return false when booking an invalid meeting", function () {
    let meeting = new Meeting("bad", "meeting");
    let calendar = new Calendar();
    assert.equal(calendar.book(meeting), false);
  });

  it("should return false when booking a meeting that overlaps only with a preexisting start date", function () {
    let meeting1 = new Meeting("02/25/2022", "03/25/2022");
    let meeting2 = new Meeting("02/25/2022", "02/25/2022");
    let calendar = new Calendar(meeting1);
    assert.equal(calendar.book(meeting2), false);
    assert.equal(Object.keys(calendar.events).length, 1);
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "start"
    );
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "end"
    );
  });

  it("should return false when booking a meeting that overlaps only through a preexisting end date", function () {
    let meeting1 = new Meeting("02/25/2022", "03/25/2022");
    let meeting2 = new Meeting("03/10/2022", "03/11/2022");
    let calendar = new Calendar(meeting1);
    assert.equal(calendar.book(meeting2), false);
    assert.equal(Object.keys(calendar.events).length, 1);
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "start"
    );
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "end"
    );
  });

  it("should return false when booking a meeting that overlaps inside of a preexisting meeting", function () {
    let meeting1 = new Meeting("02/25/2022", "03/25/2022");
    let meeting2 = new Meeting("03/10/2022", "03/15/2022");
    let calendar = new Calendar(meeting1);
    assert.equal(calendar.book(meeting2), false);
    assert.equal(Object.keys(calendar.events).length, 1);
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "start"
    );
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "end"
    );
  });

  it("should return true when booking a meeting with start date the same as a preexisting end date", function () {
    let meeting1 = new Meeting("02/25/2022", "03/25/2022");
    let meeting2 = new Meeting("03/25/2022", "04/25/2022");
    let calendar = new Calendar(meeting1);
    assert.equal(calendar.book(meeting2), true);
    assert.equal(Object.keys(calendar.events).length, 2);
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "start"
    );
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "end"
    );
    assert.property(
      calendar.events[
        "Fri Mar 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "start"
    );
    assert.property(
      calendar.events[
        "Fri Mar 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "end"
    );
  });
  /******Booking End******/

  /******RemoveBooking******/
  it("should return false when trying to remove a meeting when there are no current meetings", function () {
    let meeting = new Meeting("02/25/2022", "03/25/2022");
    let calendar = new Calendar();
    assert.equal(calendar.removeBooking(meeting), false);
  });

  it("should return false when trying to remove a meeting that has not been booked", function () {
    let meeting1 = new Meeting("02/25/2022", "03/25/2022");
    let meeting2 = new Meeting("11/11/2011", "11/11/2011");
    let calendar = new Calendar();
    calendar.book(meeting1);
    assert.equal(calendar.removeBooking(meeting2), false);
  });

  it("should return true and remove a meeting from the events {} when removeBooking is called with a valid event", function () {
    let meeting1 = new Meeting("02/25/2022", "03/25/2022");
    let meeting2 = new Meeting("11/11/2011", "11/15/2011");
    let calendar = new Calendar();
    calendar.book(meeting1);
    calendar.book(meeting2);
    assert.equal(calendar.removeBooking(meeting2), true);
    assert.equal(Object.keys(calendar.events).length, 1);
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "start"
    );
    assert.property(
      calendar.events[
        "Fri Feb 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
      ],
      "end"
    );
    assert.equal(calendar.removeBooking(meeting1), true);
    assert.equal(Object.keys(calendar.events).length, 0);
  });
  /******RemoveBooking End******/
});

mocha.run();
