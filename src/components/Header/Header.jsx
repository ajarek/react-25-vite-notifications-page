import React from "react"

import classes from "./styles.module.css"

export const Header = (props) => {
  const { className, ...otherProps } = props

  return (
    <header
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <h3 className={classes.h3}>
        Notifications
        <span className={classes.notifications}>3</span>
      </h3>
      <button className={classes.markBtn}>Mark all as read</button>
    </header>
  )
}
export default Header
