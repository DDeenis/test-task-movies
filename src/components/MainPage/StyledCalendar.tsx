import React from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "./styles/calendar.css";
import ChevronLeft from "mdi-react/ChevronLeftIcon";
import ChevronRight from "mdi-react/ChevronRightIcon";

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Сентябрь",
  "Ноябрь",
  "Ноябрь",
];

export const StyledCalendar = (props: CalendarProps) => {
  return (
    <Calendar
      next2Label={null}
      prev2Label={null}
      navigationLabel={({ date }) => monthNames[date.getMonth()]}
      nextLabel={<ChevronRight />}
      prevLabel={<ChevronLeft />}
      {...props}
    />
  );
};
