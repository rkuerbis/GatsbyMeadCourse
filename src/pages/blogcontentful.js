import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

//import Footer from "../components/footer"
//import Header from "../components/header"
import Layout from "../components/layout"
import blogStyles from './blog.module.scss'
import Head from '../components/head'


const BlogPageContentful = () => {

    const datacontentful = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                })
            {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)


//console.log(datacontentful)


    const listItems = datacontentful.allContentfulBlogPost.edges.map((edge) => {
        return (
            <li key={edge.node.title} className={blogStyles.post}>

                <Link to={`/blogcontentful/${edge.node.slug}`}>

                <h2>
                    {edge.node.title}
                </h2>
                
                <p>
                    {edge.node.publishedDate}
                </p>

                </Link> 

            </li>
        );
    })  


    return(
        <Layout>     
            <Head title="BlogContentful"/>
     
            <h1>Contentful Blog Page</h1>
        
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


export default BlogPageContentful

