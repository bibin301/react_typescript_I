import * as React from 'react';
import { formatMessage } from './../../../common/translation/Translate';

import { Props, Entity } from './Related';
// import { FormattedMessage } from 'react-intl';

interface buttonProps {
  Count: number,
  List: Array<Entity>,
  FormatText: string,
  toggleRpPopOver: any
}

const GenerateRelatedPanel: React.SFC<buttonProps> = (props) => {
  return (
    <React.Fragment>
    <button className="c-explorer__item js-explorer__item">
      {formatMessage(props.FormatText)} />{'  '}
      <span className='entity'>{props.Count > 0 ? '' : 0}</span>
    </button>
    {(props.List.map(function (each, i) {
      return (
        <div key={i}>
          <div className="relatedbar">
          </div>
          <div className="c-entity">
            <div className="c-entity__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                <title>analysis-icon</title>
                <path d="M15.85 13.24a3 3 0 0 0-.66.08l-.24-.32c-.33-.47-.62-.86-.89-1.22a4.89 4.89 0 0 1-1.39-3.18V5.68a2.92 2.92 0 0 0 2-2.75 3 3 0 0 0-5.91 0 2.92 2.92 0 0 0 1.92 2.73v2.87a3.28 3.28 0 0 1-1.12 3l-3.42 3.79a2.91 2.91 0 1 0 2 2.74 2.87 2.87 0 0 0-.42-1.49l2.83-3.13.58-.7c.26-.31.46-.56.64-.8.22.34.47.67.74 1s.53.71.85 1.16l.19.25a2.88 2.88 0 0 0-.62 1.78 3 3 0 1 0 3-2.92zM5.15 19a.95.95 0 1 1 1-.94 1 1 0 0 1-1 .94zm6.56-17a1 1 0 0 1 1 .95 1 1 0 0 1-2 0 1 1 0 0 1 1-.95zm4.13 15.13a.95.95 0 1 1 1-.95 1 1 0 0 1-.99.93z"></path>
              </svg>
            </div>
            <p className="c-entity__label">
              {each.formattedFullName ? each.formattedFullName : each.name}
            </p>
            <button className="o-more-btn c-entity__more-btn o-more-btn--horizontal" type="button" onClick={props.toggleRpPopOver} >
              <span className="u-visually-hidden">{formatMessage('global.actions')}</span>
            </button>
          </div>
        </div>
      )
    }))}
  </React.Fragment>
  )

}

const dashboard: React.SFC<Props> = (props) => {
  return (
    <React.Fragment>
      <GenerateRelatedPanel
        Count={props.rightPanelData.alertedCount}
        List={props.rightPanelData.alertedList}
        toggleRpPopOver={props.toggleRpPopOver}
        FormatText={'sidebar.alertedEntities'}>
      </GenerateRelatedPanel>
      <GenerateRelatedPanel
        Count={props.rightPanelData.entityCount}
        List={props.rightPanelData.entityList}
        toggleRpPopOver={props.toggleRpPopOver}
        FormatText={'sidebar.entities'}>
      </GenerateRelatedPanel>
      <GenerateRelatedPanel
        Count={props.rightPanelData.eventCount}
        List={props.rightPanelData.eventList}
        toggleRpPopOver={props.toggleRpPopOver}
        FormatText={'sidebar.event'}>
      </GenerateRelatedPanel>
      <GenerateRelatedPanel
        Count={props.rightPanelData.transactionCount}
        List={props.rightPanelData.transactionList}
        toggleRpPopOver={props.toggleRpPopOver}
        FormatText={'sidebar.transaction'}>
      </GenerateRelatedPanel>
      <GenerateRelatedPanel
        Count={props.rightPanelData.documentCount}
        List={props.rightPanelData.documentList}
        toggleRpPopOver={props.toggleRpPopOver}
        FormatText={'sidebar.documents'}>
      </GenerateRelatedPanel>
      <GenerateRelatedPanel
        Count={props.rightPanelData.linkChartCount}
        List={props.rightPanelData.linkChartList}
        toggleRpPopOver={props.toggleRpPopOver}
        FormatText={'sidebar.linkchart'}>
      </GenerateRelatedPanel>
  </React.Fragment>
  )
}

export default dashboard;
