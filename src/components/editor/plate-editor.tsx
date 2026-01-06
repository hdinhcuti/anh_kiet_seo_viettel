'use client';

import { Editor, EditorContainer } from '@/components/editor/editor';
import { Plate, PlateEditor as TPlateEditor } from 'platejs/react';

export function PlateEditor({ editor }: { editor: TPlateEditor | null }) {
    if (!editor) {
        return 'Đang loading'; // Or a loading spinner
    }
    return (
        <Plate editor={editor}>
            <EditorContainer>
                <Editor />
            </EditorContainer>
        </Plate>
    );
}
