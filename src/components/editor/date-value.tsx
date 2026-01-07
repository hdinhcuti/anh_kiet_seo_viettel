import { jsx } from '@platejs/test-utils';

jsx;

const today = new Date().toISOString().split('T')[0];

export const dateValue: any = [
  <h2>Date</h2>,
  <p>
    Insert and display dates within your text using inline date elements.
    These dates can be easily selected and modified using a calendar
    interface.
  </p>,
  <p>
    Try selecting <span>2024-01-01</span> or <span>{today}</span>.
  </p>,
];
