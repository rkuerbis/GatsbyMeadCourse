import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
//import './header.module.scss'
import headerStyles from './header.module.scss'
import Head from '../components/head'

const Header = () => {


    
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return ( 
        <header className={headerStyles.header}>
            <Head />
            <h1> 
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1> 

            {/* 
                {`\u00a9`}
            */}

            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        < Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/" > Home </Link>
                    </li>

                    <li>
                        < Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/about" > About </Link>
                    </li>

                    <li>
                        < Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/blog" > Blog </Link>
                    </li>

                    <li>
                        < Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/blogcontentful" > BlogContentful </Link>
                    </li>

                    <li>
                        < Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/contact" > Contact </Link>
                    </li>

                </ul>

            </nav>

        </header>
    )

}

export default Header