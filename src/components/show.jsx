import React from 'react';
import { Row, Col, Card } from 'antd';
import { ShoppingOutlined, HeartOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './show.css';

function Show() {

  const { Meta } = Card;
  const shopTitle = (<><ShoppingOutlined /> Shopping cart</>);
  const wishTtitle = (<><HeartOutlined /> Wish list</>);

  return (
    <div className="Show">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row">
          <Card title={shopTitle}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="1Europe Street beat" description="www.instagram.com" />
              </Card>
              </Col>
              <Col className="gutter-row">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="2Europe Street beat" description="www.instagram.com" />
              </Card>
            </Col>
          </Row>
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card title={wishTtitle}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="3Europe Street beat" description="www.instagram.com" />
              </Card>
              </Col>
              <Col className="gutter-row">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="4Europe Street beat" description="www.instagram.com" />
              </Card>
            </Col>
          </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Show;