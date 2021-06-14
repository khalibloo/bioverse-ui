import React from "react";
import { NextPage } from "next";
import { Col, Row, Typography } from "antd";
import BasicLayout from "@/layouts/BasicLayout";

interface Props {}

const TermsOfServicePage: NextPage<Props> = () => {
  return (
    <BasicLayout pageTitle="Terms Of Service">
      <Row justify="center" className="text-center">
        <Col md={16}>
          <Typography.Title level={1}>Terms Of Service</Typography.Title>
          <Typography.Paragraph>
            No cats or monkeys were harmed in the making of this app.
          </Typography.Paragraph>

          <Typography.Paragraph>Have fun!</Typography.Paragraph>
        </Col>
      </Row>
    </BasicLayout>
  );
};

export default TermsOfServicePage;
