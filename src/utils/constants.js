export const NEWS_FEED_META = {
  newsOrg: {
    name: 'News API Org',
    url: `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEWS_ORG_KEY}`,
    filters: {
      searchQ: '&q=searchQ',
      date: '&from=date',
      page: '&page=1'
    },
    siteImageUrl: '', // requires when image url doesn't come with domain url
    responseDataHierarchy: 'articles',
    responseDataMapping: {
      content: 'content',
      publishedDate: 'publishedAt',
      title: 'title',
      imageUrl: 'urlToImage',
      webUrl: 'url'

    }
  },
  nyTimes: {
    name: 'New York Times',
    filters: {
      searchQ: '&q=searchQ',
      date: '&begin_date=date',
      page: 'page='
    },
    siteImageUrl: 'https://www.nytimes.com/',
    responseDataMapping: {
      content: 'abstract',
      publishedDate: 'publishedAt',
      title: ['headline', 'main'],
      webUrl: 'web_url',
      imageUrl: ['multimedia', 0, 'url']
    },
    responseDataHierarchy: ['response', 'docs'],
    url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=TpcNyDOWRGR097xvA0IvdOwOf1X5eJtL'
  }
}
