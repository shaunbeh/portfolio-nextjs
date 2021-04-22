import {Component} from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

export class Header extends Component {
    render() {
        const title = this.props.title;
        return (
         <>
                <p>{ title }</p>
                <Link href="/" >
                    <a style={{'fontSize': '20px'}}>Home </a>
                </Link>
                <Link href="/blogs" >
                    <a className="customClassFromFile">Blog </a>
                </Link>
                <Link href="/portfolios" >
                    <a>Portfolio </a>
                </Link>
                <Link href="/about" >
                    <a>About </a>
                </Link>
                <Link href="/cv" >
                    <a>CV </a>
                </Link>
         </>
        )
    }
}

export default Header
