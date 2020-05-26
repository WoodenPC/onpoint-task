import React from 'react';
import { cn } from '@bem-react/classname';

const classes = cn('Description');

const Description = React.memo(() => {
  return (
    <div>
      <p>1. Defronzo RA. Diabetes. 2009 Apr;58(4):773-95</p>
      <p>2. Inzucchi SE, Sherwin RS in: Cecil Medicine 2011</p>
      <p>3. Stanley S. Schwartz, Solomon Epstein,Barbara E. Corkey, Struan F.A. Grant,James R. Gavin III, and Richard B. Aguilar The Time Is Right</p>
      <p>for a New Classification System for Diabetes: Rationale and Implications of the b-Cell–Centric Classification Schema Diabetes Care 2016; 39:179–186 | DOI: 10.2337/dc15-1585</p>
    </div>
  )
});

export { Description };