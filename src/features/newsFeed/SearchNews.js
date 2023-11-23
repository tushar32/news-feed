import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { NEWS_FEED_META } from '../../utils/constants';

const SearchNews = ({handleFilters}) => {

  const getNewsFeedSources = () => {
    const newsFeedSources = Object.keys(NEWS_FEED_META).map(news=> {
      return (
        <option value={news} key={news}>{NEWS_FEED_META[news]['name']}</option>
      )
    })

    return newsFeedSources
  }

    return(
       <Row>
         <Col>
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                Search
              </Button>
            <Form.Control aria-label="Search your products" onChange={e=> handleFilters({searchQ: e.target.value })}/>
          </InputGroup>
        </Col>
         <Col>
            <Form.Control
              type="date"
              aria-describedby="date"
              onChange={e=> handleFilters({date: e.target.value })}
            />
         </Col>
        <Col>
          <Form.Select aria-label="Default select example" onChange={(e) => handleFilters({ currentNFSource: e.target.value })}>
              {getNewsFeedSources()}
          </Form.Select>
        </Col>
      </Row>
    )

}

 export default SearchNews