import ClientSidebar from "./ClientSidebar";

export default function Sidebar({ isOpen, onClose }: any) {
    return <ClientSidebar isOpen={isOpen} onClose={onClose} />;
}
