export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ background: '#f0f2f5', minHeight: '100vh' }}>
            <main>{children}</main>
        </div>
    );
}
