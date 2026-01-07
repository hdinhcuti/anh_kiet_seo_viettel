'use client';

import dynamic from 'next/dynamic';
import { type Value } from 'platejs';

import {
  ExportHtmlButton,
  HtmlIframe,
} from '@/components/editor/slate-to-html';

const EditorClient = dynamic(
  async () =>
    (await import('@/components/editor/slate-to-html')).EditorClient,
  { ssr: false }
);
const EditorViewClient = dynamic(
  async () =>
    (await import('@/components/editor/slate-to-html')).EditorViewClient,
  { ssr: false }
);

export function HtmlPageClient({
  value,
  html,
  serverTheme,
}: {
  value: Value;
  html: string;
  serverTheme?: string;
}) {
  return (
    <div className="grid grid-cols-3 px-4">
      <div className="p-2">
        <h3 className="group mt-8 scroll-m-20 font-heading font-semibold text-xl tracking-tight">
          Editor
        </h3>
        <EditorClient value={value} />
      </div>

      <div className="p-2">
        <h3 className="group mt-8 scroll-m-20 font-heading font-semibold text-xl tracking-tight">
          EditorView
        </h3>
        <EditorViewClient value={value} />
      </div>

      <div className="relative p-2">
        <h3 className="group mt-8 scroll-m-20 font-heading font-semibold text-xl tracking-tight">
          HTML Iframe
        </h3>
        <ExportHtmlButton
          className="absolute top-10 right-0"
          html={html}
          serverTheme={serverTheme}
        />
        <HtmlIframe
          className="h-[7500px] w-full"
          html={html}
          serverTheme={serverTheme}
        />
      </div>
    </div>
  );
}
