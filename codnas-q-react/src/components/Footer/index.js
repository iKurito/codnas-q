import React from 'react'
import SbgLogo from '../../assets/img/sbg-logo.png'

const Footer = () => {
  return (
    <div className="bottom-0 min-w-full absolute">
      <div className="bg-gray-100 py-6">
        <div className="px-4 mx-auto">
          <div className="max-w-full px-1 mx-auto lg:px-4">
            <div className="flex justify-between">
              <div className="space-x-2">
                <a href="http://ufq.unq.edu.ar/sbg" target="_blank" rel="noreferrer">
                  <img className="image-footer inline-block" src={SbgLogo} alt="sbg-logo" />
                </a>
                <a href="http://ufq.unq.edu.ar/sbg" target="_blank" rel="noreferrer">
                  <img className="image-footer inline-block" src={SbgLogo} alt="sbg-logo" />
                </a>
              </div>
              <div className="space-x-2">
                <a href="http://ufq.unq.edu.ar/sbg" target="_blank" rel="noreferrer">
                  <img className="image-footer inline-block" src={SbgLogo} alt="sbg-logo" />
                </a>
                <a href="http://ufq.unq.edu.ar/sbg" target="_blank" rel="noreferrer">
                  <img className="image-footer inline-block" src={SbgLogo} alt="sbg-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-primary-dark py-12">
        <div className="px-4 mx-auto">
          <div className="max-w-full px-1 mx-auto lg:px-4">
            <div className="flex text-center justify-center items-center">
              <p className="text-white font-medium block">
                CoDNaS-Q is developed and maintained by the{' '}
                <a href="http://ufq.unq.edu.ar/sbg" target="_blank" rel="noreferrer">
                  <span className="text-primary-light hover:text-secondary-original">
                    Structural Bioinformatics Group
                  </span>
                </a>{' '}
                at{' '}
                <a href="http://www.unq.edu.ar" target="_blank" rel="noreferrer">
                  <span className="text-primary-light hover:text-secondary-original">
                    National University of Quilmes
                  </span>
                </a>{' '}
                in Bernal, Buenos Aires, Argentina.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
