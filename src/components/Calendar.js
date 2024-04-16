"use client";

import { useState, useEffect } from "react";
import { DateCalendar, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const Calendar = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center align-middle">
      <h1>Calendar</h1>
      <div className="w-full">
        <DateCalendar />
        <TimePicker />
      </div>
      <button>Sumbit</button>
    </div>
  );
};

export default Calendar;
