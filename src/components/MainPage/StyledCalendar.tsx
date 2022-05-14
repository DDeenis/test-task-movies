import React from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "./styles/calendar.css";
import ChevronLeft from "mdi-react/ChevronLeftIcon";
import ChevronRight from "mdi-react/ChevronRightIcon";
import { formatCalendarLabel } from "../../helpers/dates";

export const StyledCalendar = (props: CalendarProps) => {
  return (
    <Calendar
      next2Label={null}
      prev2Label={null}
      navigationLabel={({ date }) => formatCalendarLabel(date)}
      nextLabel={<ChevronRight />}
      prevLabel={<ChevronLeft />}
      {...props}
    />
  );
};
