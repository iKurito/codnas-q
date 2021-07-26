const Menu = () => {
  return (
    <aside className="fixed w-64 hidden md:block">
      <div className="space-y-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-700">Tutorial Index</h1>
        <ul className="list-disc space-y-2 list-inside">
          <li>
            <a className="text-sm sm:text-base font-normal hover:text-primary-dark" href="#">
              <span>How to use CoDNaS-Q</span>
            </a>
          </li>
          <li>
            <a className="text-sm sm:text-base font-normal hover:text-primary-dark" href="#search">
              <span>Search Results</span>
            </a>
          </li>
          <li>
            <a
              className="text-sm sm:text-base font-normal hover:text-primary-dark"
              href="#clusters"
            >
              <span>Clusters in CoDNaS-Q</span>
            </a>
          </li>
          <li>
            <a
              className="text-sm sm:text-base font-normal hover:text-primary-dark"
              href="#conformers"
            >
              <span>Conformers entries</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Menu
