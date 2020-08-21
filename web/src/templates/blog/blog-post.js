import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BlockContent from "../../components/block-content"

import SmallPersonCard from "../../components/small-person-card"
import Chip from "../../components/chip"

import { useCurrentPage } from "../../hooks/current-page"

const BlogPost = ({ data, pageContext }) => {
  const { post } = data
  const { _id, title, image, authors, category, publishDate, content } = post
  const { subNavigationItems } = pageContext
  const { locale, setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(_id)
  })

  return (
    <Layout page={post} subNavItems={subNavigationItems}>
      <SEO title={title} />
      {image?.asset && (
        <S.Img fluid={image?.asset.fluid} alt={image.alt[locale]} />
      )}
      <BlogMeta
        authors={authors}
        category={category}
        publishDate={publishDate}
      />
      <S.Content blocks={content} />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityBlogPost(_id: { eq: $id }) {
      _id
      _type
      title
      image {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
        alt {
          __typename
          fi
          en
        }
      }
      authors {
        _id
        name
        image {
          asset {
            _id
          }
        }
      }
      category {
        title {
          __typename
          fi
          en
        }
        color {
          hex
        }
      }
      publishDate
      content: _rawContent(resolveReferences: { maxDepth: 8 })
    }
  }
`

const S = {}

S.Content = styled(BlockContent)`
  margin: 3rem 0;
`

S.Img = styled(Img)`
  margin: 3rem 0;
  border-radius: 0.625rem;
  max-height: 30vh;
`

S.Meta = styled.div`
  margin: 3rem 0;
`

S.Authors = styled.div`
  --grid-columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 2rem;
  margin: 1rem 0;

  @media (min-width: 768px) {
    --grid-columns: 2;
  }
`

S.Author = styled(SmallPersonCard)``

const BlogMeta = ({ authors, category, publishDate }) => {
  const { locale } = useCurrentPage()

  const formattedDate = new Date(publishDate).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <S.Meta>
      <h4>{formattedDate}</h4>
      <Chip color={category.color.hex}>{category?.title[locale]}</Chip>
      <S.Authors>
        {authors.map((author) => (
          <S.Author key={author._id} person={author} />
        ))}
      </S.Authors>
    </S.Meta>
  )
}
