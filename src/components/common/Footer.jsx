import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <footer>
        {social.map((item, index) => (
          <i data-aos='zoom-in' key={item[index]}>{item.icon}</i>
        ))}
        <p data-aos='zoom-in'>All Right Resceved 2018</p>
      </footer>
  )
}

export default Footer
