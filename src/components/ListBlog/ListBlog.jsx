import { React, useEffect, useState } from "react"

import classes from "./styles.module.css"

export const ListBlog = (props) => {
  const { className, data, ...otherProps } = props

  const [show, setShow] = useState(true)

  const handleToggle = (e) => {
    show
      ? (e.target.parentElement.parentElement.parentElement.className = `${classes.active}`)
      : (e.target.parentElement.parentElement.parentElement.className = `${classes.nonactive}`)

    setShow((show) => !show)
  }

  return (
    <>
      {data &&
        data.map((el) => (
          <div
            key={el.id}
            id={el.id}
            className={`${classes.root}${className ? ` ${className}` : ""}`}
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
                <div className={classes.date}>
                  {el.date}
                  <button
                    className={classes.btn}
                    onClick={handleToggle}
                  >
                    Read
                  </button>
                </div>
              </div>
            </div>
            <div className={`${classes.message}`}>{el.message}</div>
          </div>
        ))}
    </>
  )
}
export default ListBlog
