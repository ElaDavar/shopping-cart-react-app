import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import {
  PlusCircleOutlined,
  ShoppingOutlined,
  HeartOutlined,
  DeleteOutlined,
  ShoppingFilled,
  HeartFilled } from '@ant-design/icons';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import 'antd/dist/antd.css';
import './show.css';

function Show() {

  const { Meta } = Card;
  const shopTitle = (<><ShoppingFilled /> Shopping cart</>);
  const wishTtitle = (<><HeartFilled /> Wish list</>);

  return (
    <div className="Show">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <Card title={shopTitle} extra={<Button shape="round">Checkout</Button>}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product1}  style={{ height: 240 }}/>}
                actions={[
                  <PlusCircleOutlined key="add" />,
                  <DeleteOutlined key="delete" />,
                  <HeartOutlined key="wish" />,
                ]}
              >
                <Meta title="title" description="description" />
              </Card>
              </Col>
              <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product2}  style={{ height: 240 }}/>}
                actions={[
                  <PlusCircleOutlined key="add" />,
                  <DeleteOutlined key="delete" />,
                  <HeartOutlined key="wish" />,
                ]}
              >
                <Meta title="title" description="description" />
              </Card>
            </Col>
          </Row>
          </Card>
        </Col>
        <Col>
          <Card title={wishTtitle}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product3}  style={{ height: 240 }}/>}
                actions={[
                  <PlusCircleOutlined key="add" />,
                  <DeleteOutlined key="delete" />,
                  <ShoppingOutlined key="shop" />,
                ]}
              >
                <Meta title="title" description="description" />
              </Card>
              </Col>
              <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product4}  style={{ height: 240 }}/>}
                actions={[
                  <PlusCircleOutlined key="add" />,
                  <DeleteOutlined key="delete" />,
                  <ShoppingOutlined key="shop" />,
                ]}
              >
                <Meta title="title" description="description" />
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