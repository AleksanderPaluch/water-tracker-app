import css from "./Calendar.module.css"
import PropTypes from "prop-types";
import CalendarItem from "../CalendarItem/CalendarItem"

const Calendar = ({daysArray, handleDayClick}) => {

  
  const today = new Date().getDate();
  

  return (
    <div>
     <ul className={css.calendarList}>
      {daysArray.map((day) => (
      <CalendarItem day={day} key={day} isToday={day === today} handleDayClick={handleDayClick} />
      ))}
     </ul>
    </div>
  )
}

export default Calendar



Calendar.propTypes = {
  daysArray: PropTypes.array
};