'use client';
import { Toaster } from 'sonner';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ background: '#f0f2f5', minHeight: '100vh' }}>
            <main>{children}</main>
            <Toaster position="top-right" richColors />
        </div>
    );
}
