
export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer style={{
            padding: '1rem 0',
            fontSize: '0.9rem',
            alignSelf: 'center'
        }}>&copy; {year} ztc.ninja</footer>
    );
}