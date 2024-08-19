import React from 'react';
import { Form, Input, Select, DatePicker, Radio, Checkbox } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const FormItemRenderer = ({ field, cms = {} }) => {
  const renderInput = () => <Input />;
  const renderTextarea = () => <TextArea rows={4} />;
  const renderEmail = () => <Input type="email" />;
  const renderDropdown = () => (
    <Select>
      {field.ColEmptyField && <Option value="">{field.ColEmptyFieldText.label}</Option>}
      {field.ColChoice?.map((option, i) => (
        <Option key={i} value={option.value}>{option.label}</Option>
      ))}
    </Select>
  );
  const renderPassword = () => <Input.Password />;
  const renderDate = () => <DatePicker style={{ width: '100%' }} />;
  const renderRadio = () => (
    <Radio.Group>
      {field.ColChoice?.map((option, i) => (
        <Radio key={i} value={option.value}>{option.label}</Radio>
      ))}
    </Radio.Group>
  );
  const renderYesNoRadio = () => (
    <Radio.Group>
      <Radio value="yes">Evet</Radio>
      <Radio value="no">Hayır</Radio>
    </Radio.Group>
  );
  const renderCheckbox = () => (
    <Checkbox.Group>
      {field.ColChoice?.map((option, i) => (
        <Checkbox key={i} value={option.value}>{option.label}</Checkbox>
      ))}
    </Checkbox.Group>
  );
  const renderBirthdate = () => (
    <div>
      <DatePicker picker="year" style={{ width: '32%' }} placeholder="Yıl" />
      <DatePicker picker="month" style={{ width: '32%', margin: '0 2%' }} placeholder="Ay" />
      <DatePicker picker="date" style={{ width: '32%' }} placeholder="Gün" />
    </div>
  );

  const renderTCNumber = () => (
    <Input type="text" maxLength={11} placeholder="TC Kimlik No" />
  );

  const renderPhoneNumber = () => (
    <Input type="tel" placeholder="Telefon Numarası" />
  );

  const renderFormItem = () => {
    switch (field.ColType) {
      case 1: return renderInput();
      case 2: return renderTextarea();
      case 3: return renderEmail();
      case 4: return renderDropdown();
      case 5: return renderPassword();
      case 7: return renderDate();
      case 8: return renderYesNoRadio();
      case 10: return renderPhoneNumber();
      case 11: return renderCheckbox();
      case 14: return renderBirthdate();
      case 12: return renderTCNumber();
      default: return null;
    }
  };

  const getValidationRules = () => {
    const rules = [];
    if (field.ColRequired && cms['message.req']) {
      rules.push({
        required: true,
        message: cms['message.req'].replace('{ColumnTitle}', field.ColTitle),
      });
    }
    if (field.ColType === 3 && cms['message.email']) {
      rules.push({
        type: 'email',
        message: cms['message.email'],
      });
    }
    return rules;
  };

  return (
    <Form.Item
      name={field.ColName}
      label={field.ColTitle}
      className={field.ColTitle}
      rules={getValidationRules()}
      validateTrigger={['onChange', 'onBlur']}
    >
      {renderFormItem()}
    </Form.Item>
  );
};

export default FormItemRenderer;
