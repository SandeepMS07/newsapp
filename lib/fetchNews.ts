import { categories } from './../constants/constants'
import { gql } from 'graphql-request'
import sortNewsByImage from './sortNewsByImage'

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean,
) => {
  //graphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          title
          source
          url
        }
        pagination {
          offset
          limit
          count
          total
        }
      }
    }
  `

  // Fetch functions with Next.js 13 caching ...
//   const res = await fetch(
//     'https://eitorf.stepzen.net/api/idolized-oyster/__graphql',
//     {
//       method: 'POST',
//       cache: isDynamic ? 'no-cache' : 'default',
//       next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
//       },
//       body: JSON.stringify({
//         query,
//         variables: {
//           access_key: process.env.MEDIASTACK_API_KEY,
//           categories: category,
//           keywords: keywords,
//         },
//       }),
//     },
// //   )

//   console.log('LOADING NEW DATA FROM API for category >>>', category, keywords)

// //   const newsResponse = await res.json()
//   // Sort function by images vs not images present

//   const news = sortNewsByImage(newsResponse.data.myQuery)

  //return res
//   return news
}

export default fetchNews

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=8e914ebc7c4407a948f6d7e770dfea85&sources=business,sports"
