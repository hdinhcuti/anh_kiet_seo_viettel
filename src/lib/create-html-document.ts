export function createHtmlDocument({
    editorHtml,
    katexCDN,
    tailwindCss,
    theme,
}: {
    editorHtml: string;
    tailwindCss: string;
    katexCDN?: string;
    theme?: string;
}): string {
    return `${editorHtml}`;
}
