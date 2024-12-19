const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
    <footer className="footer">
        <p> &copy; {currentYear} WDD430-Group 8.</p>
    </footer>
    );
};

export default Footer;
