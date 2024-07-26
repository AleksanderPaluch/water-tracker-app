import css from "./ChooseDate.module.css";

const ChooseDate = () => {
  const currentDate = new Date();

const formatDate = (date) => {

   const day = date.getDate()
   const month = date.toLocaleString("en-Us", {month: "long"})

   return `${day}, ${month}`

}


const  formattedDate = formatDate(currentDate)


  return <p className={css.date}>{formattedDate}</p>;
};

export default ChooseDate;
