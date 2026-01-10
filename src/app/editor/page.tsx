'use client';

import { EditorKit } from '@/components/editor/editor-kit';
import { initialValue } from '@/components/editor/initial-value';
import { PlateEditor } from '@/components/editor/plate-editor';
import { usePlateEditor } from 'platejs/react';
import { Toaster } from 'sonner';

export default function Page() {
    const editor = usePlateEditor({
        plugins: EditorKit,
        value: initialValue,
    });

    return (
        <div className="py-12">
            <div className="mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-md">
                <PlateEditor editor={editor} />
            </div>
            <Toaster />
        </div>
    );
}
