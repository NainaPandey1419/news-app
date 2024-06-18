import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? 'page-item active' : 'page-item'}
          >
            <button className="page-link" onClick={() => handlePageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;