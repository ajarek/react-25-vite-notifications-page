import {React, useState} from "react"

import classes from "./styles.module.css"


export const ListBlog = (props) => {
  const { className, data, ...otherProps } = props
  const [show, setShow]=useState(false)

  const handleToggle=(e)=>{
    
     console.log(e);
    setShow(!show)

  }
  return (
    <>
      {data &&
        data.notifications.map((el) => (
          <div
            key={el.id}
            id={el.id}
            className={`${classes.root}${className ? ` ${className}` : ""}`}
            onClick={handleToggle}
            {...otherProps}
          >
            <div className={classes.wrapper}>
              <div className={classes.wrapper1}>
                <img
                  className={classes.img}
                  src={el.src}
                  alt="user"
                />
              </div>
              <div className={classes.wrapper2}>
                <div className={classes.wrapper3}>
                  <div className={classes.name}>{el.name}</div>
                  <div className={classes.text}>{el.text}</div>
                </div>
                <div className={classes.date}>{el.date}</div>
              </div>


            </div>
            <div
           className={show?classes.message:null} 
            >
              {el.message}
            </div>
          </div>
        ))}
    </>
  )
}
export default ListBlog
