import { createSlateEditor } from 'platejs';
import { serializeHtml } from 'platejs/static'; // Static import
// Import base plugins (NOT from /react paths)
import { BaseHeadingPlugin } from '@platejs/basic-nodes';
// Import your STATIC components for rendering
import { HeadingElementStatic } from '@/components/editor/heading-node-static';
import { ParagraphElementStatic } from '@/components/editor/paragraph-node-static';
// For a styled static output, you might use a wrapper like EditorStatic

// Map plugin keys to their STATIC rendering components
const components = {
    p: ParagraphElementStatic, // 'p' is the default key for paragraphs
    h1: HeadingElementStatic,
    // ... add mappings for all your elements and marks
};

// Create a server-side editor instance with components
const editor = createSlateEditor({
    plugins: [
        BaseHeadingPlugin, // Base plugin for headings
    ],
    components,
});

export async function getMyHtml() {
    // Example: set some content on the server-side editor
    editor.children = [
        { type: 'h1', children: [{ text: 'My Title' }] },
        { type: 'p', children: [{ text: 'My content.' }] },
    ];

    const html = await serializeHtml(editor, {});

    return html;
}
