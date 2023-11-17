import React from "react"
import { project } from "../data/dummydata"
import CountUp from "react-countup"
import { Hero } from "../home/Hero"

//yarn or npm add react-countup
export const Counter = () => {
  return (
    <div className='hero counter'>
        <div className='container grid3 grid4'>
          {project.map((item, index) => (
            <div className='box' data-aos='zoom-in' key={item[index]}>
              <i>{item.icon}</i>
              <h1 className='heading'>
                <CountUp enableScrollSpy duration={2} end={item.num} />
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
  )
}
