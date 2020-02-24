import * as React from 'react';
import visibleTabEnum from './../../constants/SidebarEnum';

interface Props {
  visibleTab: visibleTabEnum,
  historyData: Array<History>
}

interface History {
  userName: string,
  auditTimestamp: number,
  auditComment: string
}

export const History: React.SFC<Props> = (props) => {

  return (
    <div className={`c-tabs__item js-tabs-content ${props.visibleTab === visibleTabEnum.HISTORY ? 'is-active' : ''}`}>
      {(props.historyData.length == 0) ? 'No History Found'
        : (props.historyData.map(function (each, key) {
          return (
            <div className='rp-space' key={key}>
              <div className="u-well">
                <div className='rp-font'>
                  {each.userName} <span className='rp-sp'> {' '}  {' '} </span> {new Date(each.auditTimestamp).toLocaleDateString()}
                  {new Date(each.auditTimestamp).toLocaleTimeString()}
                </div>
                <div className='rp-font-comment'>{each.auditComment}</div>
              </div>
              {'  '}
              {' '}
            </div>
          )
        }))}
    </div>
  )
}
