import React from 'react';

import ProjectDisplay from './ProjectDisplay';

export default function Modal() {
  function dismiss(e) {
    if (this.shim === e.target || this.photoWrap === e.target) {
      if (this.props.onDismiss) {
        this.props.onDismiss();
      }
    }
  }

  return (
    <div ref={el => (this.shim = el)} className="shim" onClick={e => dismiss(e)}>
      <div ref={el => (this.photoWrap = el)} className="photo">
        <ProjectDisplay id={this.props.id} />
      </div>
      <style jsx>
        {`
          .shim {
            position: fixed;
            background: rgba(0, 0, 0, 0.65);
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
          }

          .photo {
            position: absolute;
            top: 50%;
            width: 100%;
            margin-top: -250px;
          }
        `}
      </style>
    </div>
  );
}
