import * as React from 'react';
import {
  map as _map,
  keys as _keys,
  filter as _filter,
  sortBy as _sortBy,
  isEmpty as _isEmpty
} from 'lodash';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

interface Props {
  head: any[],
  body: any[],
  availableFields: any,
  hiddenFields: any,
  id: any[],
  toggleRightPane: (id: any) => void,
  onClick: (event: any) => void
}

interface State {
  isOptionVisible: boolean
}
export default class TableView extends React.Component<Props, State> {
  state = { isOptionVisible: false }

  private hideOption = () => {
    this.setState({ isOptionVisible: false })
  }

  private charLimit = (value) => {
    let maxLength = 20
    let limitedWords = value.substr(0, maxLength);
    return limitedWords.substr(0, Math.min(limitedWords.length, limitedWords.lastIndexOf(' '))) + '...'
  }

  private toggleOption = () => {
    this.setState({ isOptionVisible: !this.state.isOptionVisible })
  }

  private riskLevelColor = (riskLevel, score) => {
    switch (true) {
      case (riskLevel.severe <= score):
        return 'o-risk-level o-risk-level--severe';
      case (riskLevel.high <= score && riskLevel.severe >= score):
        return 'o-risk-level o-risk-level--high';
      case (riskLevel.elevated <= score && riskLevel.high >= score):
        return 'o-risk-level o-risk-level--elevated';
      case (riskLevel.guarded <= score && riskLevel.elevated >= score):
        return 'o-risk-level o-risk-level--guarded';
      default:
        return 'o-risk-level o-risk-level--low';
    }
  }

  private priorityStatus = (priority) => {
    switch (priority) {
      case 0:
        return 'Low';
      case 1:
        return 'Medium';
      default:
        return 'High';
    }
  }

  render() {
    const { availableFields, body, hiddenFields } = this.props;
    let fieldsToShow = _keys(hiddenFields).sort();
    const headers = _filter(availableFields, { entityId: 11 });
    let allHeaders = _map(headers, each => {
      return { description: each['description'], name: each['name'] };
    })
    allHeaders = _sortBy(allHeaders, ['name']);
    if (_isEmpty(fieldsToShow)) {
      return (
        <div className="no-more-alert">
          No Fields Selected
        </div>)
    }
    let selectedFields = [];
    _map(fieldsToShow, element => {
      _map(allHeaders, item => {
        if (item.name === element) {
          selectedFields.push(item);
        }
      })
    })

    return (
      <table className="c-table js-table" >
        <thead className="c-table__head">
          <tr><th className="c-table__head-data c-table__more-btn-column"></th>
            <th className="c-table__head-data" title="Risk level"><span className="u-visually-hidden">Risk level</span></th>
            {_map(selectedFields, (item, i) => {
              return (
                <th key={i} className={`c-table__head-data c-table__head-data--sortable ${this.props.id[i]}`} id={item.name} onClick={this.props.onClick}>
                  {item.description}
                  <span className="c-table__sort">
                    <svg className="o-icon o-icon--dropdown c-table__sort-icon" role="img" width="100%" height="100%" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg"><title>dropdown</title><use xlinkHref={SvgIconEnum.DROPDOWN.url}></use></svg>
                  </span>
                </th>
              );
            })}
          </tr >
        </thead >
        <tbody>
          {/*  todo: since it is dynamic coulmns these things cannot done. but statically we can do
          1) priority should be low, medium, high instead of 0,1,2
          2) date format should change
          */}
          {_map(body, (each, index) => {
            return (
              <tr key={index}>
                <td className="c-table__data c-table__data--action" data-editable="0">
                  <button className="o-more-btn c-table__more-btn o-more-btn--thin js-popover-trigger" type="button" onClick={() => {
                  }}>
                    <span className="u-visually-hidden">More</span>
                  </button>
                </td>
                <td className="c-table__data c-table__data--risk" data-editable="0">
                  {each.orgUnitObj ? <span className={this.riskLevelColor(each.orgUnitObj.riskLevel, each.score)}><span className="u-visually-hidden">Guarded</span></span>
                    : <span className='o-risk-level o-risk-level--severe'><span className="u-visually-hidden">Guarded</span></span>}
                </td>
                {_map(selectedFields, (item, i) => {
                  return (
                    <td className="c-table__data" data-editable="1" key={i}>
                      {each[item['name']]}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table >
    )
  }
}
