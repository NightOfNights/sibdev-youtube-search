import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select } from 'antd';
import PropTypes from 'prop-types';
import NumberSlider from '../numberSlider/numberSlider';
import './favouriteModal.scss';

const formLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const { Option } = Select;

const options = [
  { value: 'searchSortUnspecified', name: 'Без сортировки' },
  { value: 'date', name: 'По дате' },
  { value: 'rating', name: 'По рейтингу' },
  { value: 'relevance', name: 'По релевантности' },
  { value: 'videoCount', name: 'По количеству видео на канале' },
  { value: 'viewCount', name: 'По количеству просмотров' },
  { value: 'title', name: 'По названию' },
];

const FavouriteModal = ({
  isModalVisible,
  editModal,
  handleClickOk: onClickOk,
  handleClickCancel: onClickCancel,
  searchQuery,
}) => {
  const [maxAmountInputValue, setMaxAmountInputValue] = useState(12);

  const selectOptions = options.map((option) => (
    <Option key={option.value}>{option.name}</Option>
  ));

  const handleClickOk = (formData) => {
    const favouriteQuery = {
      ...formData,
      ...{
        'max-amount': maxAmountInputValue,
        'sort-by': undefined ? 'searchSortUnspecified' : formData['sort-by'],
      },
    };

    console.log(favouriteQuery);
    onClickOk(favouriteQuery);
  };

  const handleClickCancel = () => {
    onClickCancel();
  };

  const handleMaxAmountChange = (value) => {
    setMaxAmountInputValue(value);
  };

  return (
    <Modal
      visible={isModalVisible}
      onCancel={handleClickCancel}
      footer={null}
      className="favourite-modal"
    >
      <div className="favourite-modal__header">
        {editModal ? 'Изменить запрос' : 'Сохранить запрос'}
      </div>
      <Form
        {...formLayout}
        onFinish={handleClickOk}
        initialValues={{ query: searchQuery }}
      >
        <Form.Item
          label="Запрос"
          name="query"
          className="favourite-modal__form-item"
        >
          <Input value={searchQuery} readOnly={editModal ? false : true} />
        </Form.Item>
        <Form.Item
          label="Название"
          name="query-name"
          rules={[
            {
              required: true,
              message: 'Название не должно быть пустым!',
            },
          ]}
          className="favourite-modal__form-item"
        >
          <Input placeholder="Укажите название" />
        </Form.Item>
        <Form.Item
          label="Сортировать по"
          name="sort-by"
          className="favourite-modal__form-item"
        >
          <Select placeholder="По релевантности">{selectOptions}</Select>
        </Form.Item>
        <Form.Item
          label="Максимальное количество"
          name="max-amount"
          className="favourite-modal__form-item"
        >
          <NumberSlider
            min={0}
            max={50}
            initialValue={12}
            onSliderValueChange={handleMaxAmountChange}
          />
        </Form.Item>
        <div className="favourite-modal__footer">
          <Button onClick={handleClickCancel}>
            {editModal ? 'Не изменять' : 'Не сохранять'}
          </Button>
          <Button type="primary" htmlType="submit">
            {editModal ? 'Изменить' : 'Сохранить'}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

FavouriteModal.defaultProps = {
  isModalVisible: false,
  editModal: false,
  searchQuery: 'minecraft',
};

FavouriteModal.propTypes = {
  isModalVisible: PropTypes.bool,
  editModal: PropTypes.bool,
  handleClickOk: PropTypes.func.isRequired,
  handleClickCancel: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default FavouriteModal;
