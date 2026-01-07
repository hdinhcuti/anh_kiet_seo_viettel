import { jsx } from '@platejs/test-utils';

jsx;

export const basicMarksValue: any = [
  <h2>Text Formatting</h2>,
  <p>
    Add style and emphasis to your text using various formatting options.
  </p>,
  <p>
    Make text <strong>bold</strong>, <em>italic</em>,{' '}
    <u>underlined</u>, or apply a{' '}
    <strong>
      <em>
        <u>combination</u>
      </em>
    </strong>{' '}
    of these styles for emphasis.
  </p>,
  <p>
    Add <s>strikethrough</s> to indicate deleted
    content, use <code>inline code</code> for technical terms, or{' '}
    <mark>highlight</mark> important information.
  </p>,
  <p>
    Format mathematical expressions with <sub>subscript</sub>{' '}
    and <sup>superscript</sup> text.
  </p>,
  <p>
    Show keyboard shortcuts like <kbd>⌘ + B</kbd> for bold or{' '}
    <kbd>⌘ + I</kbd> for italic formatting.
  </p>,
];
