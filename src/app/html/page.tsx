import * as React from 'react';

import fs from 'node:fs/promises';
import path from 'node:path';
import { type Value, normalizeNodeId } from 'platejs';

import { createHtmlDocument } from '@/lib/create-html-document';
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

    return <HtmlPageClient value={createValue()} html={html} serverTheme={theme} />;
}
