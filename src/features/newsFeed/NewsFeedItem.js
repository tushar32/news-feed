/* eslint-disable react/prop-types */
/* eslint-disable dot-notation */
import React, { memo } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { NEWS_FEED_META } from '../../utils/constants'
import { travereseNestedObject } from '../../utils/utils'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewsFeedItem = ({ article, currentNFSource }) => {
  const mapperObj = NEWS_FEED_META[currentNFSource]['responseDataMapping']
  const siteImageUrl = NEWS_FEED_META[currentNFSource]['siteImageUrl']
  const imageToUrl = Array.isArray(mapperObj['imageUrl'])
    ? travereseNestedObject(article, mapperObj['imageUrl'])
    : article[mapperObj['imageUrl']]
  const title = Array.isArray(mapperObj['title']) ? travereseNestedObject(article, mapperObj['title']) : article[mapperObj['title']]

  return (
        <Col sm className="news_feed">
            <Card>
                <Card.Img variant="top" src={siteImageUrl + imageToUrl} height="300" className="news_feed__image"/>
                <Card.Body>
                    <Card.Title>{title.substring(0, 40)}...</Card.Title>
                    <Card.Text>
                        {article[mapperObj['content']].substring(0, 80)}...
                    </Card.Text>

                    <Link to={ article[mapperObj['webUrl']]} target="_blank" >
                        <Button variant="primary">Read More </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
  )
}

export default memo(NewsFeedItem)
