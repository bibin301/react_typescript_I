
import * as React from 'react';
import Grid from './../../../components/Grid/Grid';
import { getAdminLogsByCatagory } from './../../../service/admin/action'

interface Props {
  logs: any,
  logFor: string,
  logsCount: number,
}
interface States {
  isRightPaneActive: boolean,
  activePage: number, 
  maxRecordPerPage: number
}

class Logs extends React.Component<Props, States> {
  state ={
    isRightPaneActive: false,
    activePage: 0, 
    maxRecordPerPage: 20
  }

  private toggleRightPane = () => {
  }
  private closeRightPane = () => {
  }
  private onPageChange = (pageNumber, maxRecordPerPage) => {
    getAdminLogsByCatagory(this.props.logFor, pageNumber);
    this.setState({ activePage : pageNumber });
  }
  private displayUserPreference = () => {
    return (<div/>);
  }
  private sortPopOver = () => {
    return (<div/>);
  }
  private filterPopOver = () => {
    return (<div/>)
  }
  public render(){ 
    const { logs, logsCount, logFor } = this.props;
    const { isRightPaneActive, activePage, maxRecordPerPage } = this.state;

    return (
      <Grid
        recordsMetaInfo={gridMetaInfo[logFor]}
        records={logs}
        maxRecords={logsCount}
        maxRecordPerPage={maxRecordPerPage}
        activePage={activePage}
        onPageChange={this.onPageChange}
        toggleRightPane={this.toggleRightPane}
        filterPopover={this.filterPopOver}
        sortPopover={this.sortPopOver}
        displayPopover={this.displayUserPreference}
        isRightPaneActive={isRightPaneActive}
        closeRightPane={this.closeRightPane}
      />
    );
  }
}

export default Logs;
const gridMetaInfo = {
  USERACTION: {
    selectionMadeBy: 'id',
    badge: {
      name: 'succeeded',
      getName: (val) => val ? 'Succeeded' : 'failed'
    },
    records: [
      {
        name: 'userId',
        type: 'string',
      },
      {
        name: 'userName',
        type: 'string',
      },
      {
        name: 'action',
        type: 'string',
      },
      {
        name: 'tabIndex',
        type: 'string',
      },
      {
        name: 'auditComment',
        type: 'string',
      },
      {
        name: 'auditTimestamp',
        type: 'date',
        availableFormat: 'timestamp',
        expectedFormat: 'ddd MMM YY HH:mm:ss'
      },
    ],
  },
  APPLICATION: {
    selectionMadeBy: 'id',
    badge: {
      name: 'succeeded',
      getName: (val) => val ? 'Succeeded' : 'failed'
    },
    records: [
      {
        name: 'userName',
        type: 'string',
      },
      {
        name: 'userId',
        type: 'string',
      },
      {
        name: 'action',
        type: 'string',
      },
      {
        name: 'tabIndex',
        type: 'string',
      },
      {
        name: 'auditComment',
        type: 'string',
      },
      {
        name: 'auditTimestamp',
        type: 'date',
        availableFormat: 'timestamp',
        expectedFormat: 'ddd MMM YY HH:mm:ss'
      },
    ],
  },
  GENERAL: {
    selectionMadeBy: 'id',
    badge: {
      name: 'succeeded',
      getName: (val) => val ? 'Succeeded' : 'failed'
    },
    records: [
      {
        name: 'userId',
        type: 'string',
      },
      {
        name: 'userName',
        type: 'string',
      },
      {
        name: 'action',
        type: 'string',
      },
      {
        name: 'auditComment',
        type: 'string',
      },
      {
        name: 'auditTimestamp',
        type: 'date',
        availableFormat: 'timestamp',
        expectedFormat: 'ddd MMM YY HH:mm:ss'
      },
    ],
  },
  REALTIME: {
    selectionMadeBy: 'id',
    badge: {
      name: 'succeeded',
      getName: (val) => val ? 'Succeeded' : 'failed'
    },
    records: [
      {
        name: 'userId',
        type: 'string',
      },
      {
        name: 'action',
        type: 'string',
      },
      {
        name: 'auditComment',
        type: 'string',
      },
      {
        name: 'auditTimestamp',
        type: 'date',
        availableFormat: 'timestamp',
        expectedFormat: 'ddd MMM YY HH:mm:ss'
      },
    ],
  },
  SECURITY: {
    selectionMadeBy: 'id',
    badge: {
      name: 'succeeded',
      getName: (val) => val ? 'Succeeded' : 'Failed',
      getStyle: (val) => val ? 'o-badge u-positive' : 'o-badge u-negative'
   
    },
    records: [
      {
        name: 'userId',
        type: 'string',
      },
      {
        name: 'userName',
        type: 'string',
      },
      {
        name: 'action',
        type: 'string',
      },
      {
        name: 'auditTimestamp',
        type: 'date',
        availableFormat: 'timestamp',
        expectedFormat: 'ddd MMM YY HH:mm:ss'
      },
    ],
  },
  CRAWLER: {
    selectionMadeBy: 'id',
    badge: {
      name: 'succeeded',
      getName: (val) => val ? 'Succeeded' : 'failed'
    },
    records: [
      {
        name: 'userId',
        type: 'string',
      },
      {
        name: 'userName',
        type: 'string',
      },
      {
        name: 'action',
        type: 'string',
      },
      {
        name: 'auditComment',
        type: 'string',
      },
      {
        name: 'auditTimestamp',
        type: 'date',
        availableFormat: 'timestamp',
        expectedFormat: 'ddd MMM YY HH:mm:ss'
      },
    ],
  },
  
  /* Todo: Data set is empty we need check that meta data with Log management Document */ 
  SWIFT: {
    selectionMadeBy: 'id',
    badge: {
      name: 'succeeded',
      getName: (val) => val ? 'Succeeded' : 'failed'
    },
    records: [
      {
        name: 'trxnBIC',
        type: 'string',
      },
      {
        name: 'trxnReference',
        type: 'string',
      },
      {
        name: 'referenceId',
        type: 'string',
      },
      {
        name: 'action',
        type: 'string',
      },
      {
        name: 'direction',
        type: 'string',
      },
      {
        name: 'auditComment',
        type: 'string',
      },
      {
        name: 'auditTimestamp',
        type: 'date',
        availableFormat: 'timestamp',
        expectedFormat: 'ddd MMM YY HH:mm:ss'
      },
    ],
  }
}

