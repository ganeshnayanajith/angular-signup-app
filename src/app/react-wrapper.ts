import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import BugRecorder from '@efutures/bug-recorder';
import Modal from 'react-modal';

@Component({
  selector: 'app-bug-recorder',
  standalone: true,
  template: '<div id="bug-recorder-root"></div>',
})
export class BugRecorderWrapper implements OnInit, OnDestroy {
  private root: ReactDOM.Root | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log("Mounting React Component... 🚀");
    // Configure react-modal to use the app-root element instead of #root
    Modal.setAppElement('app-root');

    const container = this.el.nativeElement.querySelector("#bug-recorder-root");
    if (container) {
      this.root = ReactDOM.createRoot(container);
      this.root.render(React.createElement(BugRecorder));
    } else {
      console.error("BugRecorder root container not found!");
    }
  }

  ngOnDestroy(): void {
    if (this.root) {
      console.log("Unmounting React Component... ❌");
      this.root.unmount();
    }
  }
}
