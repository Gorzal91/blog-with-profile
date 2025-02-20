const Footer = ({ footerData }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p> {currentYear} {footerData}</p>
        </footer>
    );
}

export default Footer;