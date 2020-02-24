import * as React from 'react';

import { map as _map, isNaN as _isNaN, slice as _slice } from 'lodash';

import Button from 'src/components/button/Button';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

interface Props {
  maxRecords: number,
  activePage: number,
  recordsPerPage: number,
  onChange: (pageNumber: any)=> void
}
interface State {
  pageNumber: any
}
export default class Pagination extends React.Component<Props, State> {
  state = {
    pageNumber: this.props.activePage + 1
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activePage !== nextProps.activePage) {
      this.setState({ pageNumber: nextProps.activePage + 1 })
    }
  }

  private onChange = (event) => {
    this.setState({ pageNumber: _isNaN(event.target.id) ? 1 : event.target.id },
      () => this.props.onChange(this.state.pageNumber));
  }

  render() {
   
    const { maxRecords, recordsPerPage, activePage } = this.props;
    const { pageNumber } = this.state;
    // Note: You can use the parseInt or parseFloat functions, or simply use the unary + operator:
    const perPage = +recordsPerPage;
    const pages: any[] = Array.apply(null,
      {
        length: Math.ceil(maxRecords / perPage)
      }).map(function(value, index){
        return index + 1;
      });
    const pageShow = _slice(pages,
      activePage > 3 ?activePage - 3 : 0,
      activePage > 3 ? activePage + 2: 5);

    return (
      <div className="c-pagination-wrapper js-pagination-wrapper">
        <div className="c-pagination  js-table-view js-pagination">
          <ul className="c-pagination__list u-text-neutral js-pagination-list">
            <li className="c-pagination__item">
              <Button
                varients='neutral'
                ariaLabel="Previous"
                id={pageNumber - 1}
                onClick={this.onChange}
                disabled={pageNumber <= 1}>
                <svg width="6" height="9" viewBox="0 0 6 9" xmlns="http://www.w3.org/2000/svg"><title>Icon</title><use xlinkHref={SvgIconEnum.CARETLEFTCLOSE.url}></use></svg>
              </Button>
            </li>
            {_map(pageShow, (each, i) => {
              return (
                <div key={i}>
                  <li className="c-pagination__item">
                    <a className={`c-pagination__link js-pagination-link u-link-reset ${activePage + 1 === each ? 'is-active' : ''}`} id={each}
                      onClick={this.onChange}>
                      {each}
                    </a>
                  </li>
                </div>
              )
            }
            )}
            <li className="c-pagination__item">
              <Button
                varients='neutral'
                ariaLabel="Next"
                id={pageNumber + 1}
                onClick={this.onChange}
                disabled={pageNumber === Math.ceil(maxRecords / recordsPerPage)}>
                <svg className='o-icon-rotate180' width="6" height="9" viewBox="0 0 6 9" xmlns="http://www.w3.org/2000/svg"><title>Icon</title><use xlinkHref={SvgIconEnum.CARETLEFTCLOSE.url}></use></svg>
              </Button>
            </li>
          </ul>
          <form className="c-pagination__form">
            <input className="c-pagination__input js-pagination-input" type="number" min="1" max={Math.ceil(maxRecords / recordsPerPage)} disabled value={pageNumber}/>
            <span className="c-pagination__amount">
            /{Math.ceil(maxRecords / recordsPerPage)}
            </span>
          </form>
        </div>
      </div>
    );
  }
}
