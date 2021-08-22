import React, { Fragment } from 'react'
import Team from './Team'

const Contact = () => {
  return (
    <Fragment>
      <div className="pt-6 pb-52">
        <div className="px-2 sm:px-8 md:px-12 lg:px-16 xl:px-40 2xl:px-48">
          <div className="p-5 sm:p-10 space-y-12">
            <div className="border border-gray-200 rounded-xl shadow-md hover:shadow-2xl p-4">
              <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center mb-4">
                Contact Us
              </h1>
              <ul className="list-disc text-sm sm:text-base">
                <li className="mx-4">
                  <span className="text-sm sm:text-base text-justify">
                    For general enquiries, please contact Nicolas Palopoli.
                  </span>{' '}
                  <a href="mailto:npalopoli@unq.edu.ar" target="_blank" rel="noreferrer">
                    <span className="text-primary-light hover:text-primary-dark">
                      npalopoli@unq.edu.ar
                    </span>
                  </a>
                </li>
                <li className="mx-4">
                  <span className="text-sm sm:text-base text-justify">
                    For questions on the database generation, please contact Nahuel Escobedo.
                  </span>{' '}
                  <a href="mailto:nahuelescobedo@gmail.com" target="_blank" rel="noreferrer">
                    <span className="text-primary-light hover:text-primary-dark">
                      nahuelescobedo@gmail.com
                    </span>
                  </a>
                </li>
                <li className="mx-4">
                  <span className="text-sm sm:text-base text-justify">
                    For questions about the website please contact Ronaldo Tunque.
                  </span>{' '}
                  <a href="mailto:ronaldo.tunque@pucp.edu.pe" target="_blank" rel="noreferrer">
                    <span className="text-primary-light hover:text-primary-dark">
                      ronaldo.tunque@pucp.edu.pe
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <Team />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact
