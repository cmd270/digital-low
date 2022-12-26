import React from 'react';
import s55 from "../img/phones/s55.jpg"
import cx70 from "../img/phones/cx70.jpg"
import cx75 from "../img/phones/cx75.jpg"
const Models = () =>{
  return(
    <div className="models">
        <p><b>Siemens S55 + QuickPic Camera IQP-500</b></p>
        <p>Телефон 2002 года с внешней камерой для него кол-во мегапикселей 0,3.</p>
        <img src={s55} className="s55pic"/>
        <p><b>Siemens CX70</b></p>
        <p>Телефон 2004 года выпуска с камерой 0,3 мегапикселя.</p>
        <img src={cx70}/>
        <p><b>Siemens CX75</b></p>
        <p>Телефон 2005 года выпуска с камерой 1,3 мегапикселя.</p>
      <img src={cx75}/>
    </div>
  )
}
export default Models
