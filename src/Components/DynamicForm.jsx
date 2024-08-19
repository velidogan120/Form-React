import React from 'react';
import { Form, Button, Row, Col } from 'antd';
import FormItemRenderer from './FormItemRenderer';
import '../Css/DynamicForm.css';

const DynamicForm = ({ formData, cms }) => {
  const [form] = Form.useForm(); // Use Ant Design Form instance

  const onFinish = (values) => {
    console.log('Form Values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form Submit Failed:', errorInfo);
    // Ant Design will automatically display validation errors under each field
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={24} sm={16} md={12} lg={8}>
        <Form
          form={form}
          layout="vertical"
          className="dynamic-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {formData.Columns.map((field, index) => (
            <FormItemRenderer key={index} field={field} cms={cms} />
          ))}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Gönder
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default DynamicForm;
