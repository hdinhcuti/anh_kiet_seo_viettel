export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ background: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
            <header style={{ background: 'white', padding: '10px 20px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h2>Admin Panel</h2>
            </header>
            <main>{children}</main>
        </div>
    );
}
