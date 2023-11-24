import React, { useCallback, useState } from 'react'
import { Stack, Row, Col } from 'react-bootstrap'
import FallbackLoader from '../../components/fallBackLoader'
import NewsFeedItem from './NewsFeedItem'
import SearchNews from './SearchNews'
import UseNewsFeed from './UseNewsFeed'
import { NEWS_FEED_META } from '../../utils/constants'
import { v4 as uuidv4 } from 'uuid'

const NewsFeed = () => {
  const [filters, setFilters] = useState({ searchQ: '', date: null, currentNFSource: Object.keys(NEWS_FEED_META)[0] })
  const { list, loading } = UseNewsFeed(filters)

  /* only  render news feed list when actaual api calls */
  const renderProducts = useCallback(() => (
        <>
            { list.length > 0
              ? <Row xs={1} md={4} className='g-4'>
                    { list.map(article => {
                      return (
                            <NewsFeedItem article={article} key={uuidv4() } currentNFSource={filters.currentNFSource} />
                      )
                    })
                    }
                </Row>
              : <Row xs={1} md={1}>
                <Col className='container-center'>
                    <h2> Please type in search to get the articles</h2>
                </Col>
               </Row>
            }
        </>
  ), [loading])

  const handleFilters = (currentFilter) => {
    setFilters({ ...filters, ...currentFilter })
  }

  return (
        <Row>
            <Stack direction='horizontal' gap={3}>
                <SearchNews handleFilters={handleFilters}/>
            </Stack>
            { loading
              ? <FallbackLoader animation='border' role='status' />
              : renderProducts()
            }
        </Row>
  )
}

export default NewsFeed
