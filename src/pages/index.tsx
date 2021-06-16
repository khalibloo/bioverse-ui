import React from "react";
import { NextPage } from "next";
import {
  Button,
  Card,
  Col,
  Input,
  List,
  Modal,
  Row,
  Space,
  Typography,
} from "antd";
import { connect } from "react-redux";
import { RootState } from "@/utils/store";

import BasicLayout from "@/layouts/BasicLayout";
import Link from "next/link";
import useSpecies from "@/queries/useSpecies";
import {
  LikeOutlined,
  MessageOutlined,
  PlusOutlined,
  StarOutlined,
} from "@ant-design/icons";
import SpeciesForm from "@/components/SpeciesForm";
import { useBoolean } from "ahooks";

interface Props {
  authenticated: RootState["auth"]["authenticated"];
}
const mapState = (state: RootState) => ({
  authenticated: state.auth.authenticated,
});

const Home: NextPage<Props> = () => {
  const [
    speciesModalOpen,
    { setFalse: closeSpeciesModal, setTrue: openSpeciesModal },
  ] = useBoolean();
  const { data, isLoading } = useSpecies();
  return (
    <BasicLayout pageTitle="Home">
      <Modal
        title="Add New Species"
        footer={null}
        onCancel={closeSpeciesModal}
        visible={speciesModalOpen}
      >
        <SpeciesForm onSubmit={closeSpeciesModal} />
      </Modal>
      <Row justify="center" className="mb-9">
        <Col span={16}>
          <Input.Search className="w-full" size="large" />
        </Col>
      </Row>
      <Row justify="center" className="mt-16">
        <Col span={16} xs={22} sm={22} md={20} lg={16}>
          <Row justify="end">
            <Button
              icon={<PlusOutlined />}
              onClick={openSpeciesModal}
              type="primary"
            >
              Add Species
            </Button>
          </Row>
          <div className="h-4" />
          <List
            dataSource={data}
            loading={isLoading}
            itemLayout="vertical"
            size="large"
            renderItem={(species) => (
              <List.Item
                className="px-0"
                key={species.id}
                actions={[
                  <Button type="text" icon={<StarOutlined key="star" />}>
                    123
                  </Button>,
                  <Button type="text" icon={<LikeOutlined key="like" />}>
                    123
                  </Button>,
                  <Button type="text" icon={<MessageOutlined key="msg" />}>
                    123
                  </Button>,
                ]}
                extra={
                  <img
                    width={272}
                    alt="species image"
                    src={species.imageUrl}
                  />
                }
              >
                <List.Item.Meta title={species.name} />
                {species.description}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </BasicLayout>
  );
};

export default connect(mapState)(Home);
