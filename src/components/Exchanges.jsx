import React, { useState } from "react";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

// import { useGetCryptosQuery } from "../services/cryptoApi";
// import { useGetCryptoExcangesQuery } from "../services/cryptoApi";

const { Panel } = Collapse;
const { Text } = Typography;

const Exchanges = () => {
  // const { data, isFetching } = useGetCryptosQuery(100)
  // const {data} = useGetCryptoExcangesQuery()
  // console.log(data);
  // const coins = data?.data?.coins


  // console.log(coins);

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Value</Col>
        <Col span={6}>MArkets</Col>
        <Col span={6}>Changes</Col>
      </Row>
      {/* {exchanges.map(())} */}
      <Collapse accordion>
        
      </Collapse>
    </>
  );
};

export default Exchanges;
