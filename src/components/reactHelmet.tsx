import React from "react"
import { Helmet } from "react-helmet-async";



type SEOProps = {
    title: string;
    description: string;
    canonical: string;
    twitter_image: string,
    og_image: string
}


const SEO:  React.FC<SEOProps> = ({title, description, canonical, twitter_image, og_image}: SEOProps) => {

    return (

        <Helmet>

            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph for Facebook, LinkedIn */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={og_image} />

            {/* Twitter Card */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twitter_image} />

        </Helmet>

    )

}

export default SEO