import { jsx } from '@platejs/test-utils';

jsx;

export const createTable = (spanning?: boolean): any => (
  <table style={{ marginLeft: 20 }}>
    <colgroup>
      <col style={{ width: 100 }} />
      <col style={{ width: 100 }} />
      <col style={{ width: 100 }} />
      <col style={{ width: 100 }} />
    </colgroup>
    {spanning ? (
      <tr>
        <th colSpan={4}>
          <p>
            <strong>Plugin</strong>
          </p>
        </th>
      </tr>
    ) : (
      <tr>
        <th>
          <p>
            <strong>Plugin</strong>
          </p>
        </th>
        <th>
          <p>
            <strong>Element</strong>
          </p>
        </th>
        <th>
          <p>
            <strong>Inline</strong>
          </p>
        </th>
        <th>
          <p>
            <strong>Void</strong>
          </p>
        </th>
      </tr>
    )}

    <tr>
      <td>
        <p>
          <strong>Heading</strong>
        </p>
      </td>
      <td>
        <p />
      </td>
      <td>
        <p />
      </td>
      <td>
        <p>No</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <strong>Image</strong>
        </p>
      </td>
      <td>
        <p>Yes</p>
      </td>
      <td>
        <p>No</p>
      </td>
      <td>
        <p>Yes</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <strong>Mention</strong>
        </p>
      </td>
      <td>
        <p>Yes</p>
      </td>
      <td>
        <p>Yes</p>
      </td>
      <td>
        <p>Yes</p>
      </td>
    </tr>
  </table>
);

export const tableValue: any = [
  <h2>Table</h2>,
  <p>
    Create customizable tables with resizable columns and rows, allowing you
    to design structured layouts.
  </p>,
  createTable(),
];

export const tableMergeValue: any = [
  <h3>Table Merge</h3>,
  <p>
    You can disable merging using <code>disableMerge: true</code> option. Try
    it out:
  </p>,
  createTable(true),
];
