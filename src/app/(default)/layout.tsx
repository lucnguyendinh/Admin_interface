import Header from '@/components/Header';
import Nav from '@/components/Nav';

export default function Default({ children }: { children: React.ReactNode }) {
    return (
        <div className="wrapper">
            <Header />
            <div style={{ display: 'flex' }} className="main">
                <Nav />
                <div style={{ flex: '1' }}>{children}</div>
            </div>
        </div>
    );
}
