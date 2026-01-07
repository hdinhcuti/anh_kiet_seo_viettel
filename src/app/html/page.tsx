import * as React from 'react';

import fs from 'node:fs/promises';
import path from 'node:path';
import { type Value, normalizeNodeId } from 'platejs';
import { createStaticEditor, serializeHtml } from 'platejs/static';

import { BaseEditorKit } from '@/components/editor/editor-base-kit';
import { alignValue } from '@/components/editor/align-value';
import { basicBlocksValue } from '@/components/editor/basic-blocks-value';
import { basicMarksValue } from '@/components/editor/basic-marks-value';
import { columnValue } from '@/components/editor/column-value';
import { dateValue } from '@/components/editor/date-value';
import { discussionValue } from '@/components/editor/discussion-value';
import { equationValue } from '@/components/editor/equation-value';
import { fontValue } from '@/components/editor/font-value';
import { indentValue } from '@/components/editor/indent-value';
import { lineHeightValue } from '@/components/editor/line-height-value';
import { linkValue } from '@/components/editor/link-value';
import { listValue } from '@/components/editor/list-value';
import { mediaValue } from '@/components/editor/media-value';
import { mentionValue } from '@/components/editor/mention-value';
import { tableValue } from '@/components/editor/table-value';
import { tocPlaygroundValue } from '@/components/editor/toc-value';
import { createHtmlDocument } from '@/lib/create-html-document';
import { EditorStatic } from '@/components/editor/editor-static';
import { HtmlPageClient } from './HtmlPageClient';

const getCachedTailwindCss = React.cache(async () => {
  const cssPath = path.join(process.cwd(), 'public', 'tailwind.css');

  return await fs.readFile(cssPath, 'utf8');
});

export default async function SlateToHtmlBlock() {
  const createValue = (): Value => normalizeNodeId([]);

  const tailwindCss = await getCachedTailwindCss();
  const katexCDN = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.18/dist/katex.css" integrity="sha384-9PvLvaiSKCPkFKB1ZsEoTjgnJn+O3KvEwtsz37/XrkYft3DTk2gHdYvd9oWgW3tV" crossorigin="anonymous">`;

  // const cookieStore = await cookies();
  // const theme = cookieStore.get('theme')?.value;
  const theme = 'light';

  // Get the editor content HTML using EditorStatic
  const editorHtml = '<div><p>Dummy HTML Content</p></div>';

  // Create the full HTML document
  const html = createHtmlDocument({
    editorHtml,
    katexCDN,
    tailwindCss,
    theme,
  });

  return (
    <HtmlPageClient value={createValue()} html={html} serverTheme={theme} />
  );
}
