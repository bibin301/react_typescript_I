import * as React from 'react';
import { map as _map, noop as _noop } from 'lodash';
import * as Popover from 'react-popover';

import { formatMessage } from './../../common/translation/Translate';

interface treeProps {
  list: any[],
  itemAction:  (id: number | string) => void
};
export const TreeView: React.SFC<treeProps> = (props) => {
  return (
    <ul className="c-tree-view overflow-hidden">
      {_map(props.list,
        (item, i) => {
          return (
            <TreeNode key={item.id}
              id={item.id}
              label={item.label}
              count={item.childrenFiles}
              child={item.children}
              action={props.itemAction} />
          )
        }
      )}
    </ul>
  );
}

interface treeNodeProps {
  label: string,
  count: number,
  child: any[],
  id: string,
  action: (id: number | string) => void
}

interface treeNodeState {
  isOptionVisible: boolean, 
  isExpand: boolean
}
class TreeNode extends React.Component<treeNodeProps, treeNodeState> {

  state = { isOptionVisible: false, isExpand: false };

  private toggleExpand = () => {
    this.setState({ isExpand: !this.state.isExpand })
  }
  private handleAction = () => {
    this.props.action(this.props.id);
  }
  private hideOption = () => {
    this.setState({ isOptionVisible: false });
  }
  private toggleVisibility = () => {
    this.setState({ isOptionVisible: !this.state.isOptionVisible })
  }

  renderList = () => {
    return (
      <div className="c-tree-view__btn  c-tree-view__btn--more-btn">
        <span className="c-tree-view__content">
          {this.props.child.length
            ? <svg className={`o-icon o-icon--folder c-tree-view__icon ${this.state.isExpand ? '' : 'o-icon-rotate270'}`}
              width="9" height="6" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg"
              onClick={this.toggleExpand}>
              <title>Icon</title>
              <path d="M4.5 3.771L7.478.657l1.012.968-3.255 3.404a1.017 1.017 0 0 1-1.438.032l-.032-.032L.51 1.625 1.522.657 4.5 3.771z" />
            </svg> : null}
          <svg className="o-icon o-icon--folder c-tree-view__icon" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <title>Page 1</title>
            <path d="M5.05 1.4H2.154a.754.754 0 0 0-.754.754v9.692c0 .416.338.754.754.754h9.693a.753.753 0 0 0 .753-.754v-7.33a.752.752 0 0 0-.753-.753H7a.7.7 0 0 1-.582-.312L5.05 1.4zm2.325.963h4.472c1.19 0 2.153.963 2.153 2.153v7.33c0 1.19-.963 2.154-2.153 2.154H2.154A2.154 2.154 0 0 1 0 11.846V2.154C0 .964.964 0 2.154 0h3.271a.7.7 0 0 1 .582.312l1.368 2.051z" />
          </svg>
          <span onClick={this.handleAction}>
            {this.props.label}
          </span>
        </span>
        <span className="c-tree-view__number">
          {this.props.count}
        </span>
        <Popover
          isOpen={this.state.isOptionVisible}
          tipSize={0.01}
          place='right'
          className={'ow-popoverIndex'}
          onOuterAction={this.hideOption}
          enterExitTransitionDurationMs={10}
          body={
            <div className="c-popover js-popover" >
              <div className="c-popover__body">
                <div className="c-actions-list">
                  <ul className="c-actions-list__list">
                    <li className="c-actions-list__item">
                      <span className="o-btn o-btn--inline js-row-card-switch">
                        {formatMessage('global.rename')}
                      </span>
                    </li>
                    <li className="c-actions-list__item">
                      <span className="o-btn o-btn--inline js-row-card-switch">
                        {formatMessage('global.duplicate')}  
                      </span>
                    </li>
                    <li className="c-actions-list__item">
                      <span className="o-btn o-btn--inline js-row-card-switch">
                        {formatMessage('global.delete')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>}>
          <span className="o-more-btn c-tree-view__more-btn o-more-btn--horizontal o-more-btn--thin"
            // type="button"
            onBlur={this.hideOption}
            onClick={this.toggleVisibility} >
            <span className="u-visually-hidden">More</span>
          </span>
        </Popover>
      </div>
    );
  }

  render() {
    return (this.props.child.length
      ? <React.Fragment>
        <li className="c-tree-view__item">
          {this.renderList()}
        </li>
        {this.state.isExpand && <ul className="c-tree-view__item c-tree-view__item">
          {_map(this.props.child,
            (item, i) => (
              <TreeNode key={item.id}
                id={item.id}
                label={item.label}
                count={item.childrenFiles}
                action={this.props.action}
                child={item.children} />
            )
          )}
        </ul>}
      </React.Fragment>
      : <li className="c-tree-view__item">
        {this.renderList()}
      </li>
    );
  }
} 
