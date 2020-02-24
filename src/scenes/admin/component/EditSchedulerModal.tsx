import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { assign as _assign, map as _map, includes as _includes } from 'lodash';
import * as moment from 'moment';

import { updateScheduleInformation } from './../../../service/admin/action';
import { formatMessage } from './../../../common/translation/Translate';

const tabName = {
  GENERAL: 'general',
  PARAMETERS: 'parameters',
  SECURITY: 'Security',
  HISTORY: 'history',
  TIME: 'time',
  DAYS: 'days'
}

interface IntProps {
  user: any,
  userUpdateHistory: any,
  onHide: () => any,
  general: any
}

interface IntState {
  activeTab: string,
  scheduledTab: string,
  isAddCorn: boolean,
  isInternal: boolean,
  schedulerData: Array<number>,
  selectedData: Array<number>,
  selectedHours: Array<number>,
  scheduledHours: Array<number>,
}

class EditScheduledModal extends React.Component<InjectedFormProps<any, IntProps> & IntProps, IntState> {

  state = {
    activeTab: tabName.GENERAL,
    scheduledTab: tabName.TIME,
    isInternal: false,
    isAddCorn: false,
    selectedData: [],
    selectedHours: [],
    schedulerData: Array.apply(null,
      {
        length: 60
      }).map(function (value, index) {
        return index++;
      }),
    scheduledHours: Array.apply(null,
      {
        length: 24
      }).map(function (value, index) {
        return index++;
      })

  }


  componentDidMount() {
    this.handleFormInitialValues();
  }

  private handleFormInitialValues = () => {
    const { general } = this.props;
    console.log("edit schedule model", general)

    this.props.initialize({

      //----------test // on server issue
      name: general.name,
      cronExpression: general.cronExpression,
      description: general.description,
      serverName: general.serverName,
      activated: general.activated,
      createdBy: general.createdBy,
      jobtype: general.job.name,
      createdDate: moment(general.createdDate).format('DD-MM-YYYY hh:mm:ss a'),
      updatedBy: general.updatedBy,
      updatedOn: moment(general.updatedOn).format('DD-MM-YYYY hh:mm:ss a'),
      createdOn: moment(general.createdOn).format('DD-MM-YYYY hh:mm:ss a'),
    });
  }
  private changeTab = (event: any) => {
    this.setState({ activeTab: event.target.name });
  }

  private changeScheduleTab = (event: any) => {
    this.setState({ scheduledTab: event.target.name });
  }
  private editUserSubmit = (formValues) => {

    const { general, user } = this.props;
    const userDTO = _assign({}, general, formValues)

    updateScheduleInformation(userDTO, user);
    this.props.onHide();
  }

  public openCronExpression = () => {
    this.setState({ isAddCorn: true }, () => console.log('corn', this.state.isAddCorn));
  }

  public openInternalJobType = () => {

    this.setState({ isInternal: true }, () => console.log('corn', this.state.isInternal));
  }

  public closeInternalJobType = () => {
    this.setState({ isInternal: false }, () => console.log('corn', this.state.isInternal));
  }
  public closeCronExpression = () => {
    this.setState({ isAddCorn: false }, () => console.log('corn', this.state.isAddCorn));
  }


  public getOneHour = (e) => {
    e.preventDefault();
    this.setState({ selectedHours: [0] })
  }

  public getEach = (e) => {
    e.preventDefault();
    this.setState({ selectedHours: this.state.scheduledHours })
  }

  public getOneMinute = (e) => {
    e.preventDefault();
    this.setState({ selectedData: [0] })

  }

  public getSelectedData = (e) => {
    e.preventDefault();

    this.setState({ selectedData: this.state.schedulerData })
  }

  public getFiveMinute = (e) => {
    e.preventDefault();
    const eachFive = _map(this.state.schedulerData, val => {
      return val % 5 === 0 && val
    })

    this.setState({ selectedData: eachFive });
  }

  public getFifteenMinute = (e) => {
    e.preventDefault();
    const eachFifteen = _map(this.state.schedulerData, val => {
      return val % 15 === 0 && val
    })

    this.setState({ selectedData: eachFifteen });
  }

  public getThirtyMinute = (e) => {
    e.preventDefault();
    const eachThirty = _map(this.state.schedulerData, val => {
      return val % 30 === 0 && val
    })

    this.setState({ selectedData: eachThirty });
  }

  public getSeconds = (e) => {
    e.preventDefault();
    this.setState({ selectedData: this.state.schedulerData })

  }


  private renderContent = () => {
    const { activeTab } = this.state;

    switch (activeTab) {
      case tabName.GENERAL:
        return (<React.Fragment>
          <div className="c-form__field ">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Name
            </label>
            <Field
              name='name'
              type="input"
              component="input"
              style={{ maxWidth: 'none' }}
              className="o-input c-form__input" />
          </div>
          <div className="c-form__field ">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Description
            </label>
            <Field
              name='description'
              type="input"
              component="textarea"
              style={{ maxWidth: 'none' }}
              className="o-input c-form__input" />
          </div>


          <div className="c-form__field " >
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Internal Job type
            </label>

            <button className="o-btn o-btn--text-lookalike" type="button">
              <Field
                name='jobtype'
                type="input"
                component="input"
                style={{ maxWidth: 'none', border: 'none' }}
                className="" />   <span className="o-btn__secondary-text own-o-btn__secondary-text" onClick={this.openInternalJobType}>Add</span>
            </button>
          </div>
          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Active
            </label>
            <Field
              name='activated'
              type="checkbox"
              component="input"
              style={{ maxWidth: 'none', marginTop: '9px', marginRight: '334px' }} />
          </div>

          <div className="c-form__field ">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Server Name
            </label>
            <Field
              name='serverName'
              type="input"
              component="input"
              style={{ maxWidth: 'none' }}
              className="o-input c-form__input" />
          </div>
          <div className="c-form__field " >
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Corn Expression
            </label>

            <button className="o-btn o-btn--text-lookalike" type="button" >
              <Field
                name='cronExpression'
                type="input"
                component="input"
                style={{ maxWidth: 'none', border: 'none' }}

                className="" />   <span className="o-btn__secondary-text own-o-btn__secondary-text" onClick={this.openCronExpression} >Add</span>

            </button>
          </div>

          <div className="c-form__field c-form__field--inline" style={{ background: '#dddddd' }}>
            <label className="o-label c-form__label" style={{ marginTop: '6px', paddingLeft: '8px' }}>
              Created by
            </label>
            <Field
              name='createdBy'
              type="input"
              placeholder="Created by"
              component="input" disabled="true"
              style={{ maxWidth: 'none', width: '70%', border: 'none', background: '#dddddd' }}
              className="o-input c-form__input" />
          </div>
          <div className="c-form__field c-form__field--inline" style={{ background: '#dddddd' }}>
            <label className="o-label c-form__label" style={{ marginTop: '6px', paddingLeft: '8px' }}>
              Creation date
            </label>
            <Field
              name='createdDate'
              type="input"
              placeholder="Creation date"
              component="input" disabled="true"
              style={{ maxWidth: 'none', width: '70%', border: 'none', background: '#dddddd' }}
              className="o-input c-form__input" />
          </div>

          <div className="c-form__field c-form__field--inline " style={{ background: '#dddddd' }}>
            <label className="o-label c-form__label" style={{ marginTop: '6px', paddingLeft: '8px' }}>
              Updated by
            </label>
            <Field
              name='updatedBy'
              type="input"
              placeholder="Updated by"
              component="input" disabled="true"
              style={{ maxWidth: 'none', width: '70%', border: 'none', background: '#dddddd' }}
              className="o-input c-form__input" />
          </div>
          <div className="c-form__field c-form__field--inline " style={{ background: '#dddddd' }}>
            <label className="o-label c-form__label" style={{ marginTop: '6px', paddingLeft: '8px' }}>
              Last updated
            </label>
            <Field
              name='updatedOn'
              type="input" disabled="true"
              component="input"
              placeholder="Last updated"
              style={{ maxWidth: 'none', width: '70%', border: 'none', background: '#dddddd' }}
              className="o-input c-form__input" />
          </div>
        </React.Fragment>);
      case tabName.PARAMETERS:
        return (<React.Fragment>
          <div className="c-form__field ">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              OPS data to index
            </label>
            <Field
              name='adminGroup'
              type="input"
              component="input"
              style={{ maxWidth: 'none' }}
              className="o-input c-form__input" />
          </div>


          <div className="c-form__field ">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              DOI data to index
            </label>
            <Field
              name='email'
              type="input"
              component="input"
              style={{ maxWidth: 'none' }}
              className="o-input c-form__input" />
          </div>
          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Indexing MAG with OPS
            </label>
            <Field
              name='active'
              type="checkbox"
              component="input"
              style={{ maxWidth: 'none', marginTop: '9px', marginRight: '260px' }} />
          </div>

          <div className="c-form__field ">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              ExecuteAs
            </label>
            <Field
              name='email'
              type="input"
              component="input"
              style={{ maxWidth: 'none' }}
              className="o-input c-form__input" />
          </div>

          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Create Notification
            </label>
            <Field
              name='active'
              type="checkbox"
              component="input"
              style={{ maxWidth: 'none', marginTop: '9px', marginRight: '260px' }} />
          </div>

          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Updated since
            </label>
            <Field
              name='active'
              type="checkbox"
              component="input"
              style={{ maxWidth: 'none', marginTop: '9px', marginRight: '260px' }} />
          </div>
        </React.Fragment>);
      case tabName.SECURITY:
        return (<React.Fragment>
          security to be integrate here aaa
        </React.Fragment>);
      case tabName.HISTORY:
        return (<React.Fragment>
          {_map(this.props.userUpdateHistory, (each, key) => (
            <div className='rp-space' key={key}>
              <div className="u-well">
                <div className='rp-font'>
                  {each.userName} <span className='rp-sp'> {' '}  {' '} </span>
                  {new Date(each.auditTimestamp).toLocaleDateString()}
                  {new Date(each.auditTimestamp).toLocaleTimeString()}
                </div>
                <div className='rp-font-comment'>
                  {each.auditComment}
                </div>
              </div>
              {'  '}
              {' '}
            </div>
          )
          )}
        </React.Fragment>);
    }


  }

  private scheduleRenderContent = () => {
    const { scheduledTab, schedulerData, scheduledHours } = this.state;

    switch (scheduledTab) {
      case tabName.TIME:
        return (<React.Fragment>

          <div>
            Seconds

            <div className="c-scheduler js-scheduler">
              <div className="c-scheduler__number-wrapper">
                {_map(schedulerData, (each, key) => (

                  <span className="c-scheduler__number js-scheduler-number">
                    <input className="o-checkbox--hidden js-scheduler-checkbox" checked={_includes(this.state.selectedData, each)} onChange={this.getSelectedData} type="checkbox" id="secondview0" value="0" />
                    <label className="c-scheduler__label">
                      {each}
                    </label>
                  </span>

                ))}
              </div>

              <ul className="c-scheduler__controls">
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" onClick={this.getOneMinute} data-amount="0">On minute</button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" onClick={this.getFiveMinute} data-amount="5">Each 5</button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" data-amount="15" onClick={this.getFifteenMinute}>Each 15</button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" data-amount="30" onClick={this.getThirtyMinute} >Each 30</button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" data-amount="1" onClick={this.getSeconds} >Each sec</button>
                </li>
              </ul>
            </div>
            <br />
            Minutes

            <div className="c-scheduler js-scheduler">
              <div className="c-scheduler__number-wrapper">
                {_map(schedulerData, (each, key) => (

                  <span className="c-scheduler__number js-scheduler-number">
                    <input className="o-checkbox--hidden js-scheduler-checkbox" checked={_includes(this.state.selectedData, each)} onChange={this.getSelectedData} type="checkbox" id="secondview0" value="0" />
                    <label className="c-scheduler__label">
                      {each}
                    </label>
                  </span>

                ))}
              </div>

              <ul className="c-scheduler__controls">
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount"  data-amount="0">On minute</button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount"  data-amount="5">Each 5</button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" data-amount="15" >Each 15</button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" data-amount="30"  >Each 30</button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" data-amount="1"  >Each sec</button>
                </li>
              </ul>
            </div>
            <br />
            Hours

            <div className="c-scheduler js-scheduler">
              <div className="c-scheduler__number-wrapper">
                {_map(scheduledHours, (each, key) => (

                  <span className="c-scheduler__number js-scheduler-number">
                    <input className="o-checkbox--hidden js-scheduler-checkbox" checked={_includes(this.state.selectedHours, each)} onChange={this.getSelectedData} type="checkbox" id="secondview0" value="0" />
                    <label className="c-scheduler__label">
                      {each}
                    </label>
                  </span>

                ))}
              </div>

              <ul className="c-scheduler__controls">
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" onClick={this.getOneHour} data-amount="0">On hour</button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" onClick={this.getEach} data-amount="5">Each </button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" data-amount="15" >Each 2</button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" data-amount="30"  >Each 3</button>
                </li>
                <li className="c-scheduler__control">
                  <button className="c-scheduler__btn js-scheduler-amount" data-amount="1"  >Each 6</button>
                </li>
              </ul>
            </div>

          </div>

        </React.Fragment>);
      case tabName.DAYS:
        return (<React.Fragment>
          days has to do
       </React.Fragment>);
    }

  }
  public render() {
    const { activeTab, isAddCorn, schedulerData, isInternal, scheduledTab } = this.state;
    const { handleSubmit, submitting, general, userUpdateHistory } = this.props;


    return (
      <div>
        <div className="c-modal scheduler-own-model" style={{ maxHeight: '90%' }}>
          <div className="c-modal__view">
            <div className="c-modal__head">
              <legend className="c-modal__title">
                {/* Edit User: {general.name} */}
              </legend>
            </div>
            <div className="c-modal__body">
              <div className="c-tabs js-tabs">
                <nav className="c-tabs__nav">
                  <ul className="c-tabs__list">
                    <li className="c-tabs__title">
                      <button className={`c-tabs__link u-text-medium js-tabs-link ${activeTab === tabName.GENERAL && 'is-active'}`}
                        name={tabName.GENERAL} onClick={this.changeTab}>
                        {formatMessage('admin.general')}
                      </button>
                    </li>

                    <li className="c-tabs__title">
                      <button className={`c-tabs__link u-text-medium js-tabs-link ${activeTab === tabName.PARAMETERS && 'is-active'}`}
                        name={tabName.PARAMETERS} onClick={this.changeTab}>
                        {formatMessage('admin.parameters')}
                      </button>
                    </li>

                    <li className="c-tabs__title">
                      <button className={`c-tabs__link u-text-medium js-tabs-link ${activeTab === tabName.SECURITY && 'is-active'}`}
                        name={tabName.SECURITY} onClick={this.changeTab}>
                        {formatMessage('admin.security')}
                      </button>
                    </li>

                    <li className="c-tabs__title">
                      <button className={`c-tabs__link u-text-medium js-tabs-link ${activeTab === tabName.HISTORY && 'is-active'}`}
                        name={tabName.HISTORY} onClick={this.changeTab}>
                        {formatMessage('admin.history')}

                      </button>
                    </li>
                  </ul>
                </nav>
                <form onSubmit={handleSubmit(this.editUserSubmit)}>
                  <div className="c-tabs__content" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <div className="c-tabs__item js-tabs-content is-active">
                      <div className="c-modal__body">
                        {this.renderContent()}
                      </div>
                    </div>
                  </div>
                  <div className="c-modal__foot">
                    <div className="c-modal__actions c-modal__actions--secondary">
                      <button className="o-btn u-accent-color" type="button" onClick={this.props.onHide}>
                        {formatMessage('global.cancel')}
                      </button>
                    </div>
                    <div className="c-modal__actions">
                      <button className="o-btn o-btn--primary" disabled={submitting} type="submit">
                        {formatMessage('global.save')}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>


        </div>
        {isAddCorn && <div className="own-c-modal" style={{ maxHeight: '90%' }}>

          <div className="c-modal__view"  >
            <div className="c-modal__head">
              <legend className="c-modal__title">
                Corn Helper
            </legend>
            </div>
            <div className="c-modal__body">
              <div className="c-tabs js-tabs">
                <nav className="c-tabs__nav">
                  <ul className="c-tabs__list">
                    <li className="c-tabs__title">
                      <button className={`c-tabs__link u-text-medium js-tabs-link ${scheduledTab === tabName.TIME && 'is-active'}`}
                        name={tabName.TIME} onClick={this.changeScheduleTab}>
                        Time
                      </button>
                    </li>

                    <li className="c-tabs__title">
                      <button className={`c-tabs__link u-text-medium js-tabs-link ${scheduledTab === tabName.DAYS && 'is-active'}`}
                        name={tabName.DAYS} onClick={this.changeScheduleTab}>
                        Days
                      </button>
                    </li>


                  </ul>
                </nav>
                <form >
                  <div className="c-tabs__content" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <div className="c-tabs__item js-tabs-content is-active">
                      <div className="c-modal__body">
                        {this.scheduleRenderContent()}
                      </div>
                    </div>
                  </div>
                  <div className="c-modal__foot">
                    <div className="c-modal__actions c-modal__actions--secondary">
                      <button className="o-btn u-accent-color" type="button" onClick={this.closeCronExpression}>
                        {formatMessage('global.cancel')}
                      </button>
                    </div>
                    <div className="c-modal__actions">
                      <button className="o-btn o-btn--primary" type="submit">
                        {formatMessage('global.save')}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
        }

        {isInternal && <div className="own-c-modal" style={{ maxHeight: '90%' }}>

          <div className="c-modal__view"  >
            <div className="c-modal__head">
              <legend className="c-modal__title">
                Internal Job Type
            </legend>
            </div>
            <div className="c-modal__body">
              <form >
                Internal job type
                <div className="c-modal__foot">
                  <div className="c-modal__actions c-modal__actions--secondary">
                    <button className="o-btn u-accent-color" type="button" onClick={this.closeInternalJobType} >
                      {formatMessage('global.cancel')}
                    </button>
                  </div>
                  <div className="c-modal__actions">
                    <button className="o-btn o-btn--primary" type="submit">
                      {/* {formatMessage('global.save')} */}
                      Apply
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
        }
      </div>
    );
  }
}

const editScheduledModalValidate = (formProps: any) => {
  // todo: validation
  const errors: any = {}
  return errors
};

export default reduxForm<any, IntProps> ({
  form: 'editGroupsModal',
  validate: editScheduledModalValidate
})(EditScheduledModal);

