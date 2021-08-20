import PropTypes from 'prop-types'
import classnames from 'classnames'
import { usePagination } from '../../hooks/usePagination'
import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
} from '../Icons'

const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const onLastPage = () => {
    onPageChange(lastPage)
  }

  const onFirstPage = () => {
    onPageChange(1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <>
      <div className="hidden sm:block">
        <ul
          className={classnames('pagination-container justify-center', {
            [className]: className,
          })}
        >
          <li
            className={classnames('pagination-item', {
              disabled: currentPage === 1,
            })}
            onClick={onFirstPage}
          >
            <ChevronDoubleLeftIcon />
          </li>
          <li
            className={classnames('pagination-item', {
              disabled: currentPage === 1,
            })}
            onClick={onPrevious}
          >
            <ChevronLeftIcon />
          </li>
          <li
            className={classnames('pagination-item', {
              disabled: currentPage === lastPage,
            })}
          >
            <span className="text-sm select-none">
              {currentPage} of {lastPage}
            </span>
          </li>
          <li
            className={classnames('pagination-item', {
              disabled: currentPage === lastPage,
            })}
            onClick={onNext}
          >
            <ChevronRightIcon />
          </li>
          <li
            className={classnames('pagination-item', {
              disabled: currentPage === lastPage,
            })}
            onClick={onLastPage}
          >
            <ChevronDoubleRightIcon />
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-3 text-center sm:hidden text-sm items-center pt-4">
        <button
          onClick={onPrevious}
          className={classnames(
            'relative inline-flex  place-content-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50',
            {
              disabled: currentPage === 1,
            }
          )}
        >
          Previous
        </button>
        <span className="select-none">
          {currentPage} of {lastPage}
        </span>
        <button
          onClick={onNext}
          className={classnames(
            'relative inline-flex place-content-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50',
            {
              disabled: currentPage === lastPage,
            }
          )}
        >
          Next
        </button>
      </div>
    </>
  )
}

Pagination.defaultProps = {
  siblingCount: 1,
}

Pagination.propTypes = {
  onPageChange: PropTypes.any.isRequired,
  totalCount: PropTypes.any.isRequired,
  siblingCount: PropTypes.any,
  currentPage: PropTypes.any.isRequired,
  pageSize: PropTypes.any.isRequired,
  className: PropTypes.any.isRequired,
}

export default Pagination
