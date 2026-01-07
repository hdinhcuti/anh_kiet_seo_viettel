import { jsx } from '@platejs/test-utils';

jsx;

export const listValue: any = [
  <h2>List</h2>,

  <p>
    Create indented lists with multiple levels of indentation and customize
    the list style type for each level.
  </p>,
  <ul>
    <li>
      <input type="checkbox" checked /> Todo 1
    </li>
    <li>
      Disc 1
      <ul>
        <li>
          Disc 2
          <ul>
            <li>
              <input type="checkbox" /> Todo 2
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <ol type="I">
      <li>
        Roman 1
        <ol type="1">
          <li>
            Decimal 11
            <ol type="1" start={2}>
              <li>Decimal 111</li>
              <li>Decimal 112</li>
            </ol>
          </li>
          <li value={2}>Decimal 12</li>
          <li value={3}>Decimal 13</li>
        </ol>
      </li>
      <li value={2}>
        Roman 2
        <ol>
          <li>Decimal 11</li>
          <li value={2}>Decimal 12</li>
        </ol>
      </li>
      <li value={3}>Roman 3</li>
      <li value={4}>Roman 4</li>
    </ol>
  </ul>,
];
