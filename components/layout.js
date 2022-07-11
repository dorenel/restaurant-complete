import { Nav, NavItem, Container } from 'reactstrap';
import Head from 'next/head';
import Link from 'next/link';

const Layout = (props) => {
    return (
        <>
        <Head>
            <title>Restaurant App</title>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
            />
        </Head>
        <header>
            <style jsx>
                {`a {
                    color: white;
                }`}
            </style>
            <Nav className="navbar navbar-dark bg-dark">
                <NavItem>
                    <Link href="/">
                        <a className="navbar-brand">Home</a>
                    </Link>
                </NavItem>
                <NavItem className="ml-auto">
                    <Link href="/login">
                        <a className="navbar-link">Login {" "}</a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/signup">
                        <a className="navbar-link">Sign Up</a>
                    </Link>
                </NavItem>
            </Nav>
        </header>
        <Container>{props.children}</Container>
        </>
    );
};

export default Layout;