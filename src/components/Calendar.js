"use client";

import { useState, useEffect } from "react";
import { DateCalendar, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleBooking = async () => {
    if (selectedDate && selectedTime) {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: dayjs(selectedDate).format("YYYY-MM-DD"),
          time: dayjs(selectedTime).format("h:mm A"),
        }),
      });

      const data = await response.json();
      console.log(data);
      alert("Booking successful!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto justify-center align-middle">
      <h1>Calendar</h1>
      <div className="w-full">
        <DateCalendar
          disablePast
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
        />
        <TimePicker
          views={["hours", "minutes"]}
          value={selectedTime}
          onChange={(newTime) => setSelectedTime(newTime)}
        />
      </div>
      <button onClick={handleBooking}>Sumbit</button>
    </div>
  );
};

export default Calendar;
