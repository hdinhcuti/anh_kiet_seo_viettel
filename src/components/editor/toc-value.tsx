import { jsx } from '@platejs/test-utils';

jsx;

export const tocValue: any = [
  <h1>
    <span>Table of Contents</span>
  </h1>,
  <p>
    <span>
      The Table of Contents (TOC) feature allows you to create an
      automatically updated overview of your document's structure.
    </span>
  </p>,
  <p>How to use the Table of Contents:</p>,
  <ul>
    <li>
      <span>Type "/toc" and press Enter to create the TOC.</span>
    </li>
    <li>
      <span>
        The TOC updates automatically when you modify headings in the document.
      </span>
    </li>
  </ul>,
  <div>
    <span></span>
  </div>,
  <h2>Example Content</h2>,
  <p>
    <span>
      This is an example of content that would be reflected in the Table of
      Contents.
    </span>
  </p>,
  <h3>Subsection</h3>,
  <p>
    <span>
      Adding or modifying headings in your document will automatically update
      the TOC.
    </span>
  </p>,
  <h2>Benefits of Using TOC</h2>,
  <p>
    <span>
      A Table of Contents improves document navigation and provides a quick
      overview of your content structure.
    </span>
  </p>,
];

export const tocPlaygroundValue: any = [
  <div>
    <span></span>
  </div>,
  <p>
    <span>
      Click on any heading in the table of contents to smoothly scroll to that
      section.
    </span>
  </p>,
];
