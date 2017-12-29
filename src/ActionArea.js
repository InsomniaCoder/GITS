import React, { Component } from 'react';
import InvoiceDetailTab from './InvoiceDetailTab';
import AttachmentsTab from './AttachmentsTab';
import RemarksTab from './RemarksTab';
import WorkflowTab from './WorkflowTab';

class ActionArea extends Component {
  render() {
    return (
      <div className="action-area-tab">
          <InvoiceDetailTab/>
          <AttachmentsTab/>
          <RemarksTab/>
          <WorkflowTab/>
      </div>
    );
  }
}

export default ActionArea;
