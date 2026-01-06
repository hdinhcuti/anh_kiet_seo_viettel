'use client';

import {
    ArrowUpToLineIcon,
    BaselineIcon,
    BoldIcon,
    Code2Icon,
    HighlighterIcon,
    ItalicIcon,
    PaintBucketIcon,
    StrikethroughIcon,
    UnderlineIcon,
} from 'lucide-react';
import { createSlateEditor, KEYS } from 'platejs';
import { useEditorReadOnly, useEditorRef } from 'platejs/react';
// import { serializeMd } from '@platejs/markdown'; // REMOVED
// import { remark } from 'remark'; // REMOVED
// import remarkHtml from 'remark-html'; // REMOVED
import { toast } from 'sonner';
// import { serializeHtml } from 'platejs/static'; // REMOVED

import { Button } from '@/components/editor/button';

import { Base64 } from 'js-base64';
import { serializeHtml } from 'platejs/static';
import { AlignToolbarButton } from './align-toolbar-button';
import { CommentToolbarButton } from './comment-toolbar-button';
import { BaseEditorKit } from './editor-base-kit';
import { EmojiToolbarButton } from './emoji-toolbar-button';
import { ExportToolbarButton } from './export-toolbar-button';
import { FontColorToolbarButton } from './font-color-toolbar-button';
import { FontSizeToolbarButton } from './font-size-toolbar-button';
import { RedoToolbarButton, UndoToolbarButton } from './history-toolbar-button';
import { ImportToolbarButton } from './import-toolbar-button';
import { IndentToolbarButton, OutdentToolbarButton } from './indent-toolbar-button';
import { InsertToolbarButton } from './insert-toolbar-button';
import { LineHeightToolbarButton } from './line-height-toolbar-button';
import { LinkToolbarButton } from './link-toolbar-button';
import { BulletedListToolbarButton, NumberedListToolbarButton, TodoListToolbarButton } from './list-toolbar-button';
import { MarkToolbarButton } from './mark-toolbar-button';
import { MediaToolbarButton } from './media-toolbar-button';
import { ModeToolbarButton } from './mode-toolbar-button';
import { MoreToolbarButton } from './more-toolbar-button';
import { TableToolbarButton } from './table-toolbar-button';
import { ToggleToolbarButton } from './toggle-toolbar-button';
import { ToolbarGroup } from './toolbar';
import { TurnIntoToolbarButton } from './turn-into-toolbar-button';
export function FixedToolbarButtons() {
    const editor = useEditorRef();
    const readOnly = useEditorReadOnly();

    const handleSave = async () => {
        if (editor) {
            const editSlate = createSlateEditor({
                plugins: BaseEditorKit,
                value: editor.children,
            });

            const parseHtml = await serializeHtml(editSlate);
            console.log(parseHtml);

            const encodeParseHtml = Base64.encode(parseHtml);
            console.log(Base64.decode(encodeParseHtml));

            try {
                const response = await fetch('http://localhost:3001/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content: encodeParseHtml }),
                });

                if (!response.ok) {
                    throw new Error('Failed to save post');
                }

                const result = await response.json();
                toast.success(`Post saved successfully! ID: ${result.id}`);
                console.log('Saved post:', result);
            } catch (error: any) {
                toast.error(`Error saving post: ${error.message}`);
                console.error('Error saving post:', error);
            }
        }
    };

    return (
        <div className="flex w-full">
            {!readOnly && (
                <>
                    <ToolbarGroup>
                        <UndoToolbarButton />
                        <RedoToolbarButton />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <Button onClick={handleSave} className="bg-red-500 text-white font-semibold">
                            Save Post
                        </Button>
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <ExportToolbarButton>
                            <ArrowUpToLineIcon />
                        </ExportToolbarButton>

                        <ImportToolbarButton />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <InsertToolbarButton />
                        <TurnIntoToolbarButton />
                        <FontSizeToolbarButton />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <MarkToolbarButton nodeType={KEYS.bold} tooltip="Bold (⌘+B)">
                            <BoldIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton nodeType={KEYS.italic} tooltip="Italic (⌘+I)">
                            <ItalicIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton nodeType={KEYS.underline} tooltip="Underline (⌘+U)">
                            <UnderlineIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton nodeType={KEYS.strikethrough} tooltip="Strikethrough (⌘+⇧+M)">
                            <StrikethroughIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton nodeType={KEYS.code} tooltip="Code (⌘+E)">
                            <Code2Icon />
                        </MarkToolbarButton>

                        <FontColorToolbarButton nodeType={KEYS.color} tooltip="Text color">
                            <BaselineIcon />
                        </FontColorToolbarButton>

                        <FontColorToolbarButton nodeType={KEYS.backgroundColor} tooltip="Background color">
                            <PaintBucketIcon />
                        </FontColorToolbarButton>
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <AlignToolbarButton />

                        <NumberedListToolbarButton />
                        <BulletedListToolbarButton />
                        <TodoListToolbarButton />
                        <ToggleToolbarButton />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <LinkToolbarButton />
                        <TableToolbarButton />
                        <EmojiToolbarButton />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <MediaToolbarButton nodeType={KEYS.img} />
                        <MediaToolbarButton nodeType={KEYS.video} />
                        <MediaToolbarButton nodeType={KEYS.audio} />
                        <MediaToolbarButton nodeType={KEYS.file} />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <LineHeightToolbarButton />
                        <OutdentToolbarButton />
                        <IndentToolbarButton />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <MoreToolbarButton />
                    </ToolbarGroup>
                </>
            )}

            <div className="grow" />

            <ToolbarGroup>
                <MarkToolbarButton nodeType={KEYS.highlight} tooltip="Highlight">
                    <HighlighterIcon />
                </MarkToolbarButton>
                <CommentToolbarButton />
            </ToolbarGroup>

            <ToolbarGroup>
                <ModeToolbarButton />
            </ToolbarGroup>
        </div>
    );
}
