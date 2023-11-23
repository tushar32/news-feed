import React, { memo } from "react"
import Col from "react-bootstrap/esm/Col"
import Card from 'react-bootstrap/Card';
import { NEWS_FEED_META } from "../../utils/constants";
import { travereseNestedObject } from "../../utils/utils";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const NewsFeedItem = ({article, currentNFSource}) => {

    const mapperObj = NEWS_FEED_META[currentNFSource]['responseDataMapping']
    const siteImageUrl = NEWS_FEED_META[currentNFSource]['siteImageUrl']
    let imageToUrl = Array.isArray(mapperObj['imageUrl']) ? 
            travereseNestedObject(article, mapperObj['imageUrl']) : article[mapperObj['imageUrl']]
    let title = Array.isArray(mapperObj['title']) ? travereseNestedObject(article, mapperObj['title']) : article[mapperObj['title']]
    
    return (
        <Col sm>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={siteImageUrl+imageToUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {article[mapperObj['content']]}
                    </Card.Text>
                    
                    <Link to={ article[mapperObj['webUrl']]} target="_blank" >
                        <Button variant="primary">Read More </Button>
                    </Link>                    
                </Card.Body>
            </Card>
        </Col>
    )
    
}

export default  memo(NewsFeedItem)