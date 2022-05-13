import React from "react";
import Calendar from "react-calendar";
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

export const StyledCalendar = () => {
  return (
    <Calendar
      next2Label={null}
      prev2Label={null}
      navigationLabel={({ date }) => monthNames[date.getMonth()]}
      nextLabel={<ChevronRight />}
      prevLabel={<ChevronLeft />}
    />
  );
};
