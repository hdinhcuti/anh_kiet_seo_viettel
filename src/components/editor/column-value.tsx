import { jsx } from '@platejs/test-utils';

jsx;

export const columnValue: any = [
  <h2>Column</h2>,
  <p>Create column and the border will hidden when viewing</p>,
  <div style={{ display: 'flex' }}>
    <div style={{ width: '50%' }}>
      <p>left 1</p>
      <p>left 2</p>
    </div>
    <div style={{ width: '50%' }}>
      <p>right 1</p>
      <p>right 2</p>
    </div>
  </div>,
];
