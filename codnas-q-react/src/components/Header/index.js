import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
// Logo CoDNaS-Q
import Logo from '../../assets/img/codnas-q-logo.png'

const navigation = [
  { name: 'Advanced Search', path: '/adv-search' },
  { name: 'Download', path: '/download' },
  { name: 'Statistics', path: '/statistics' },
  { name: 'About', path: '/about' },
  { name: 'Tutorial', path: '/tutorial' },
  { name: 'Contact us', path: '/contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  return (
    <Popover className="bg-primary-dark sticky top-0 py-1 lg:py-3 shadow-lg z-50">
      {({ open }) => (
        <div className="px-4 mx-auto">
          <div className="max-w-full px-1 mx-auto lg:px-4">
            <nav className="relative flex items-center justify-between h-16" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/home">
                    <img className="-mt-1 h-6 sm:h-10" src={Logo} alt="codnas-q-logo" />
                  </Link>
                  <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-3 hover:text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex md:ml-10 md:space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={classNames(
                      'text-white font-medium hover:bg-primary-light',
                      'py-2 px-3 rounded-md nav-link'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
            >
              <div className="rounded-lg shadow-md bg-primary-dark ring-1 ring-white ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/home">
                      <img className="-mt-1 h-6 sm:h-10" src={Logo} alt="codnas-q-logo" />
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="nline-flex items-center justify-center p-2 rounded-md text-gray-3 hover:text-white hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1 ">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={classNames(
                        'text-white hover:bg-primary-light',
                        'block px-3 py-2 rounded-md text-sm nav-link'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  )
}

export default Header
