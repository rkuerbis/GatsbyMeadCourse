import React from "react"
//import {Link} from "gatsby"
import {graphql, useStaticQuery} from "gatsby"
import footerStyles from './footer.module.scss'



const Footer = () => {
    const datafooter = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return(
        <footer className={footerStyles.footer}>

            <p>

 {/* 
                {`\u00a9`}
 */}
                Created by:  myworkoncall  © Copyright 2019 by {datafooter.site.siteMetadata.author}.  All rights reserved. 
                <br/>

            </p>
        </footer>
    )

} 

export default Footer
