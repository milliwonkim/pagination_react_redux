import React, { Component } from "react";
import PropTypes from "prop-types";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: "",
      pageLimit: "",
      totalPages: "",
      currentPage: "",
      initialPage: "",
      pagesToShow: ""
    };
  }

/**
 * totalRecords: 모든 게시물 갯수
 * pageLimit: 한번에 몇개의 개시물을 보여줄건지
 * totalPages: 총 페이지 수
 * currentPage: 현재 페이지
 * initialPage: 첫 페이지
 * pagesToShow: 페이지네이션에 몇개의 페이지 수 보여줄건지
 */

  componentDidMount() {
    // 첫 렌더링 끝나고
    this.setState({
      totalRecords: this.props.totalRecords,
      pageLimit: this.props.pageLimit || 10,
      totalPages: Math.ceil(this.props.totalRecords / this.props.pageLimit),
      pagesToShow: this.props.pagesToShow || 5,
      currentPage: this.props.initialPage || 1
    });
  }

  componentWillReceiveProps(nextProps) {
    // component가 새로 prop을 받았을 때 실행됨
    this.setState({
      totalRecords: nextProps.totalRecords,
      pageLimit: nextProps.pageLimit || 10,
      totalPages: Math.ceil(nextProps.totalRecords / nextProps.pageLimit),
      pagesToShow: nextProps.pagesToShow || 5
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // render()를 호출하고 난 다음에 발생
    if (
      this.state.totalRecords !== prevState.totalRecords ||
      this.state.pageLimit !== prevState.pageLimit
    ) {
      this.setPage(this.state.currentPage);
    }
  }

  setPage(page) {
    var { totalRecords, pageLimit, totalPages } = this.state;

    /**1. page가 1개밖에 없으면 page = 1
     * 2. page > 총 페이지수 => page = totalPages
     * [그리고 현재페이지를 page로 바꿈 => currentPage: page]
     */

    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }

    this.setState({
      currentPage: page
    });

    /**startIndex와 endIndex는 [] 안에서 움직일 것이라서
     * 0부터 시작한다는 점을 이용해서
     * -1을 빼줌
     *
     * 1. startIndex는 (현재페이지 - 1) * 페이지 내의 게시물의 수
     * 2. endIndex는 최소값[(startIndex + 페이지 내의 게시물 수 - 1) or (총 게시물 수 - 1)]
     */

    var startIndex = (page - 1) * pageLimit;
    var endIndex = Math.min(startIndex + pageLimit - 1, totalRecords - 1);

    this.props.onChangePage({
      pageLimit,
      totalPages,
      page,
      startIndex,
      endIndex
    });
  }

  getPager() {
    var { pagesToShow, currentPage, totalPages } = this.state;
    var pages = [],
      startFromNumber;

    if (totalPages <= pagesToShow) {
      startFromNumber = 1;
      pagesToShow = totalPages;
    } else {
      if (currentPage <= Math.ceil(pagesToShow / 2)) {
        startFromNumber = 1;
      } else if (
        currentPage + Math.floor((pagesToShow - 1) / 2) >=
        totalPages
      ) {
        startFromNumber = totalPages - (pagesToShow - 1);
      } else {
        startFromNumber = currentPage - Math.floor(pagesToShow / 2);
      }
    }

    for (let i = 1; i <= pagesToShow; i++) {
      pages.push(startFromNumber++);
    }

    return {
      currentPage,
      totalPages,
      pages
    };
  }

  render() {
    // console.log(this.state);
    if (!this.state.totalRecords || this.state.totalPages === 1) return null;

    var pager = this.getPager();
    // console.log(pager);

    return (
      <ul className="pagination">
        <li>
          <button
            disabled={pager.currentPage === 1 ? true : false}
            onClick={() => this.setPage(1)}
          >
            맨앞으로
          </button>
        </li>
        <li>
          <button
            disabled={pager.currentPage === 1 ? true : false}
            onClick={() => this.setPage(pager.currentPage - 1)}
          >
            앞으로
          </button>
        </li>
        {pager.pages.map((page, index) => (
          <li key={index}>
            <button
              className={pager.currentPage === page ? "active" : ""}
              onClick={() => this.setPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={pager.currentPage === pager.totalPages ? true : false}
            onClick={() => this.setPage(pager.currentPage + 1)}
          >
            뒤로
          </button>
        </li>
        <li>
          <button
            disabled={pager.currentPage === pager.totalPages ? true : false}
            onClick={() => this.setPage(pager.totalPages)}
          >
            맨뒤로
          </button>
        </li>
      </ul>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  initialPage: PropTypes.number,
  pagesToShow: PropTypes.number,
  onChangePage: PropTypes.func
};

export default Pagination;

// //===>example pagesToShow=5
// if (totalPages <= 5) {
// 	// less than 5 total pages so show all
// 	startPage = 1;
// } else {
// 	// more than 5 total pages so calculate start and end pages
// 	if (currentPage <= 3) {
// 		startPage = 1;
// 	} else if (currentPage + 2 >= totalPages) {
// 		startPage = totalPages - 4;
// 	} else {
// 		startPage = currentPage - 2;
// 	}
// }

// //===>example pagesToShow=6
// // console.log(totalPages);
// if (totalPages <= 6) {
// 	// less than 6 total pages so show all
// 	startPage = 1;
// } else {
// 	// more than 5 total pages so calculate start and end pages
// 	if (currentPage <= 3) {
// 		startPage = 1;
// 	} else if (currentPage + 2 >= totalPages) {
// 		startPage = totalPages - 5;
// 	} else {
// 		startPage = currentPage - 3;
// 	}
// }
