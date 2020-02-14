import React, { Component } from "react";

class ProductSearchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      showSearchInfo: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.keyword) {
      this.setState({
        keyword: nextProps.keyword,
        showSearchInfo: true
      });
    }
  }

  onHandleChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };

  onSearch = e => {
    e.preventDefault();
    this.props.onSearch(this.state.keyword);
  };

  onClearSearch = () => {
    this.props.onSearch("");
    this.setState({
      keyword: "",
      showSearchInfo: false
    });
  };

  render() {
    return (
      <div className="col-xs-12 box_search">
        <form onSubmit={this.onSearch}>
          <div className="search_wrp mb-15">
            <div className="input-group">
              <input
                type="text"
                name="keyword"
                className="form-control"
                placeholder="Phone Name"
                value={this.state.keyword}
                onChange={this.onHandleChange}
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={this.onSearch}
                >
                  <i className="fa fa-search mr-5" />
                  검색
                </button>
              </span>
            </div>
            <button
              type="button"
              className="btn btn-default btn_clear"
              onClick={this.onClearSearch}
            >
              <i className="fa fa-close" />
            </button>
          </div>
          <div className={!this.state.showSearchInfo ? "hidden" : ""}>
            검색중: "<strong>{this.state.keyword}</strong>"
          </div>
        </form>
      </div>
    );
  }
}

export default ProductSearchControl;
