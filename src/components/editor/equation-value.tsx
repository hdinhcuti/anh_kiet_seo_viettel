import { jsx } from '@platejs/test-utils';

jsx;

export const equationValue: any = [
  <h2>
    <span>Equation</span>
  </h2>,
  <p style={{ paddingLeft: '1em', listStyleType: 'decimal' }}>
    <span>
      Equations allow you to express complex mathematical concepts in both
      inline and block formats.
    </span>
  </p>,
  <p
    style={{
      paddingLeft: '1em',
      listStyleType: 'decimal',
      counterReset: 'list-item 1',
    }}
  >
    <span>Key features:</span>
  </p>,
  <p style={{ paddingLeft: '2em', listStyleType: 'disc' }}>
    <span>LaTeX syntax support</span>
  </p>,
  <p style={{ paddingLeft: '2em', listStyleType: 'disc' }}>
    <span>Inline and block equation formats</span>
  </p>,
  <p
    style={{
      paddingLeft: '1em',
      listStyleType: 'decimal',
      counterReset: 'list-item 2',
    }}
  >
    <span>Inline equation example: </span>
    <span>E=mc^2</span>
    <span> (Einstein's famous equation)</span>
  </p>,
  <p
    style={{
      paddingLeft: '1em',
      listStyleType: 'decimal',
      counterReset: 'list-item 3',
    }}
  >
    <span>Block equation examples:</span>
  </p>,
  <div>{"\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"}</div>,
  <p>
    <span>The quadratic formula for solving </span>
    <span>ax^2 + bx + c = 0</span>
    <span>.</span>
  </p>,
  <div>{"\\int_{a}^{b} f(x) \\, dx = F(b) - F(a)"}</div>,
  <p>
    <span>The fundamental theorem of calculus.</span>
  </p>,
  <p
    style={{
      paddingLeft: '1em',
      listStyleType: 'decimal',
      counterReset: 'list-item 4',
    }}
  >
    <span>Try these actions:</span>
  </p>,
  <p style={{ paddingLeft: '2em', listStyleType: 'disc' }}>
    <span>
      Click on any equation to edit it. Press Escape to close the menu without
      editing it.
    </span>
  </p>,
  <p style={{ paddingLeft: '2em', listStyleType: 'disc' }}>
    <span>
      You can navigate through the equation by using the arrow keys
    </span>
  </p>,
  <p style={{ paddingLeft: '2em', listStyleType: 'disc' }}>
    <span>Use the slash command (/equation) to insert a new equation</span>
  </p>,
  <p style={{ paddingLeft: '2em', listStyleType: 'disc' }}>
    <span>
      Use the slash command (/inline equation) for inline equations
    </span>
  </p>,
  <p>
    <span>
      Advanced usage: Combine equations with other elements like tables or
      code blocks for comprehensive scientific documentation. For example:
    </span>
  </p>,
  <p>
    <span>The Schrödinger equation, </span>
    <span>{String.raw`i\hbar\frac{\partial}{\partial t}\Psi = \hat{H}\Psi`}</span>
    <span>, is fundamental in quantum mechanics.</span>
  </p>,
  <p>
    <span>
      Experiment with different equation types and formatting to create rich,
      mathematical content in your documents.
    </span>
  </p>,
];
