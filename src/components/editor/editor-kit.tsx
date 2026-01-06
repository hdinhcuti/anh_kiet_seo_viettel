'use client';

import { type Value, TrailingBlockPlugin } from 'platejs';
import { type TPlateEditor, useEditorRef } from 'platejs/react';

import { AlignKit } from '@/components/editor/plugins/align-kit';
import { AutoformatKit } from '@/components/editor/plugins/autoformat-kit';
import { BasicBlocksKit } from '@/components/editor/plugins/basic-blocks-kit';
import { BasicMarksKit } from '@/components/editor/plugins/basic-marks-kit';
import { BlockMenuKit } from '@/components/editor/plugins/block-menu-kit';
import { BlockPlaceholderKit } from '@/components/editor/plugins/block-placeholder-kit';
import { CalloutKit } from '@/components/editor/plugins/callout-kit';
import { CodeBlockKit } from '@/components/editor/plugins/code-block-kit';
import { ColumnKit } from '@/components/editor/plugins/column-kit';
import { CommentKit } from '@/components/editor/plugins/comment-kit';

import { CursorOverlayKit } from '@/components/editor/plugins/cursor-overlay-kit';
import { DateKit } from '@/components/editor/plugins/date-kit';
import { DiscussionKit } from '@/components/editor/plugins/discussion-kit';
import { DndKit } from '@/components/editor/plugins/dnd-kit';
import { DocxKit } from '@/components/editor/plugins/docx-kit';
import { EmojiKit } from '@/components/editor/plugins/emoji-kit';
import { ExitBreakKit } from '@/components/editor/plugins/exit-break-kit';
import { FixedToolbarKit } from '@/components/editor/plugins/fixed-toolbar-kit';
import { FloatingToolbarKit } from '@/components/editor/plugins/floating-toolbar-kit';
import { FontKit } from '@/components/editor/plugins/font-kit';
import { LineHeightKit } from '@/components/editor/plugins/line-height-kit';
import { LinkKit } from '@/components/editor/plugins/link-kit';
import { ListKit } from '@/components/editor/plugins/list-kit';
import { MarkdownKit } from '@/components/editor/plugins/markdown-kit';
import { MathKit } from '@/components/editor/plugins/math-kit';
import { MediaKit } from '@/components/editor/plugins/media-kit';
import { MentionKit } from '@/components/editor/plugins/mention-kit';
import { SlashKit } from '@/components/editor/plugins/slash-kit';
import { SuggestionKit } from '@/components/editor/plugins/suggestion-kit';
import { TableKit } from '@/components/editor/plugins/table-kit';
import { TocKit } from '@/components/editor/plugins/toc-kit';
import { ToggleKit } from '@/components/editor/plugins/toggle-kit';
import { BaseAlignKit } from './plugins/align-base-kit';
import { BaseBasicBlocksKit } from './plugins/basic-blocks-base-kit';
import { BaseBasicMarksKit } from './plugins/basic-marks-base-kit';
import { BaseCalloutKit } from './plugins/callout-base-kit';
import { BaseCodeBlockKit } from './plugins/code-block-base-kit';
import { BaseColumnKit } from './plugins/column-base-kit';
import { BaseCommentKit } from './plugins/comment-base-kit';
import { BaseDateKit } from './plugins/date-base-kit';
import { BaseFontKit } from './plugins/font-base-kit';
import { BaseLineHeightKit } from './plugins/line-height-base-kit';
import { BaseLinkKit } from './plugins/link-base-kit';
import { BaseListKit } from './plugins/list-base-kit';
import { BaseMathKit } from './plugins/math-base-kit';
import { BaseMediaKit } from './plugins/media-base-kit';
import { BaseMentionKit } from './plugins/mention-base-kit';
import { BaseSuggestionKit } from './plugins/suggestion-base-kit';
import { BaseTableKit } from './plugins/table-base-kit';
import { BaseTocKit } from './plugins/toc-base-kit';
import { BaseToggleKit } from './plugins/toggle-base-kit';
export const EditorKit = [
    ...BaseBasicBlocksKit,
    ...BaseCodeBlockKit,
    ...BaseTableKit,
    ...BaseToggleKit,
    ...BaseTocKit,
    ...BaseMediaKit,
    ...BaseCalloutKit,
    ...BaseColumnKit,
    ...BaseMathKit,
    ...BaseDateKit,
    ...BaseLinkKit,
    ...BaseMentionKit,
    ...BaseBasicMarksKit,
    ...BaseFontKit,
    ...BaseListKit,
    ...BaseAlignKit,
    ...BaseLineHeightKit,
    ...BaseCommentKit,
    ...BaseSuggestionKit,
    ...MarkdownKit,
    // Elements
    ...BasicBlocksKit,
    ...CodeBlockKit,
    ...TableKit,
    ...ToggleKit,
    ...TocKit,
    ...MediaKit,
    ...CalloutKit,
    ...ColumnKit,
    ...MathKit,
    ...DateKit,
    ...LinkKit,
    ...MentionKit,

    // Marks
    ...BasicMarksKit,
    ...FontKit,

    // Block Style
    ...ListKit,
    ...AlignKit,
    ...LineHeightKit,

    // Collaboration
    ...DiscussionKit,
    ...CommentKit,
    ...SuggestionKit,

    // Editing
    ...SlashKit,
    ...AutoformatKit,
    ...CursorOverlayKit,
    ...BlockMenuKit,
    ...DndKit,
    ...EmojiKit,
    ...ExitBreakKit,
    TrailingBlockPlugin,

    // Parsers
    ...DocxKit,
    ...MarkdownKit,

    // UI
    ...BlockPlaceholderKit,
    ...FixedToolbarKit,
    ...FloatingToolbarKit,
];

export type MyEditor = TPlateEditor<Value, (typeof EditorKit)[number]>;

export const useEditor = () => useEditorRef<MyEditor>();
