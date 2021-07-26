import { Fragment } from 'react'
import SmoothScroll from 'smooth-scroll'
import Information from './Information'
import Menu from './Menu'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const Tutorial = () => {
  return (
    <Fragment>
      <div className="pt-6 pb-52">
        <div className="px-4 sm:px-16 md:px-24 lg:px-32 xl:px-48">
          <div className="p-5 sm:p-10 space-y-4">
            <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center">
              How to explore CoDNaS-Q
            </h1>
            <div className="pt-5">
              <Menu />
              <Information />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Tutorial
