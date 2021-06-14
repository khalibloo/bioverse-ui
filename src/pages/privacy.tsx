import React from "react";
import { NextPage } from "next";
import { Col, Row, Typography } from "antd";
import BasicLayout from "@/layouts/BasicLayout";

interface Props {}

const PrivacyPolicyPage: NextPage<Props> = () => {
  return (
    <BasicLayout pageTitle="Privacy Policy">
      <Row justify="center" className="text-center">
        <Col md={16}>
          <Typography.Title level={1}>Privacy Policy</Typography.Title>
          <Typography.Paragraph>
            We do not collect any personal data. Feel free to play with our
            critters to your heart's content.
          </Typography.Paragraph>
        </Col>
      </Row>
    </BasicLayout>
  );
};

export default PrivacyPolicyPage;
