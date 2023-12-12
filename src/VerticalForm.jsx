import { useState } from 'react';
import './VerticalForm.scss';

export default function VerticalForm ({
    isActive
  }) {
    return (
      <>
        {(() => {
          switch (isActive) {
            case 'Content':
              return <div>Component 2A</div>;
            case 'Customize':
              return <div>Component 2B</div>;
          }
        })()}
      </>
    );
  }