import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

//import Footer from "../components/footer"
//import Header from "../components/header"
import Layout from "../components/layout"
import blogStyles from './blog.module.scss'
import Head from '../components/head'


const BlogPage = () => {



    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        html
                        excerpt
                        fields {
                            slug
                        }                  
                    }
                }
            }
        }
    `)


    //console.log(data)

    const listItems = data.allMarkdownRemark.edges.map((edge) => {
        return (
            <li key={edge.node.frontmatter.title} className={blogStyles.post}>

                <Link to={`/blog/${edge.node.fields.slug}`}>

                <h2>
                    {edge.node.frontmatter.title}
                </h2>
                
                <p>
                    {edge.node.frontmatter.date}
                </p>

                </Link> 

            </li>
        );
    })  

    return(
        <Layout>    
            <Head title="Blog"/>


            <h1>Blog Page</h1>
        
            {/* Posts will show up here later on. */}
            <br/>
            <ol className={blogStyles.posts}>
                {listItems}
            </ol>
            <br/>
            <br/>
            <p>
                Link to home page: <Link to="/">home.</Link>

            </p> 
            
            <br/>
            <br/>
            <br/>
        
        </Layout>

    )

}


export default BlogPage
