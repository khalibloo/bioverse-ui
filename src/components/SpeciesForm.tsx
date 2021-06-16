import React from "react";
import { Form, Button, Input, Select } from "antd";
import useAddSpecies from "@/mutations/useAddSpecies";
import useFamilies from "@/queries/useFamilies";
import { useForm } from "antd/lib/form/Form";

interface Props {
  onSubmit?: () => void;
}
const SpeciesForm: React.FC<Props> = ({ onSubmit }) => {
  const [form] = useForm();
  const { data: families, isLoading: familiesLoading } = useFamilies();
  const addSpecies = useAddSpecies();
  const onFinish = (values: SpeciesInput) => {
    addSpecies.mutate(values);
    form.resetFields();
    onSubmit?.();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter a name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Image URL" name="imageUrl">
        <Input />
      </Form.Item>
      <Form.Item
        label="Family"
        name="familyId"
        rules={[{ required: true, message: "Please select a family" }]}
      >
        <Select loading={familiesLoading}>
          {families?.map((f) => (
            <Select.Option key={f.id} value={f.id}>
              {f.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button loading={addSpecies.isLoading} type="primary" htmlType="submit">
          Save Species
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SpeciesForm;
