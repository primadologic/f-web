import React from "react"
import { Helmet } from "react-helmet-async";



type SEOProps = {
    title: string;
    description: string;
    canonical: string;
    twitter_image: string;
    og_image: string;
    og_url?: string
}


const SEO:  React.FC<SEOProps> = ({title, description, canonical, twitter_image, og_image, og_url}: SEOProps) => {

    return (

        <Helmet>

            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />

            {/* Open Graph for Facebook, LinkedIn */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={og_image} />
            <meta property="og:url" content={og_url}></meta>
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />


            {/* Twitter Card */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twitter_image} />
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="657"/>

        </Helmet>

    )

}

export default SEO