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
  queryName,
  sortBy,
  maxAmount,
}) => {
  const [maxAmountInputValue, setMaxAmountInputValue] = useState(
    maxAmount || 12
  );

  React.useEffect(() => {
    setMaxAmountInputValue(maxAmount);
  }, [maxAmount]);

  console.log(maxAmount);

  const handleClickOk = (formData) => {
    const favouriteQuery = {
      ...formData,
      'max-amount': maxAmountInputValue,
      'sort-by': formData['sort-by'] ? formData['sort-by'] : 'relevance',
    };
    console.log(maxAmountInputValue);
    console.log(favouriteQuery);
    onClickOk(favouriteQuery, queryName);
  };

  const handleClickCancel = () => {
    onClickCancel();
  };

  const handleMaxAmountChange = (value) => {
    setMaxAmountInputValue(value);
  };

  const selectOptions = options.map((option) => (
    <Option key={option.value} className="form__select-option">
      {option.name}
    </Option>
  ));

  return (
    <Modal
      visible={isModalVisible}
      onCancel={handleClickCancel}
      destroyOnClose
      footer={null}
      className="favourite-modal"
    >
      <div className="favourite-modal__header">
        {editModal ? 'Изменить запрос' : 'Сохранить запрос'}
      </div>
      <Form
        {...formLayout}
        onFinish={handleClickOk}
        initialValues={{
          query: searchQuery,
          'query-name': queryName,
          'sort-by': sortBy,
        }}
        className="favourite-modal__form form"
      >
        <Form.Item label="Запрос" name="query" className="form__item">
          <Input
            value={searchQuery}
            disabled={editModal ? false : true}
            className="form__input"
          />
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
          className="form__item"
        >
          <Input placeholder="Укажите название" className="form__input" />
        </Form.Item>
        <Form.Item label="Сортировать по" name="sort-by" className="form__item">
          <Select placeholder="По релевантности" className="form__select">
            {selectOptions}
          </Select>
        </Form.Item>
        <Form.Item
          label="Максимальное количество"
          name="max-amount"
          className="form__item"
        >
          <NumberSlider
            min={0}
            max={50}
            initialValue={maxAmount}
            onSliderValueChange={handleMaxAmountChange}
            className="form__number-slider"
          />
        </Form.Item>
        <div className="form__footer">
          <Button onClick={handleClickCancel} className="form__submit-btn">
            {editModal ? 'Не изменять' : 'Не сохранять'}
          </Button>
          <Button type="primary" htmlType="submit" className="form__cancel-btn">
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
  queryName: undefined,
  sortBy: undefined,
};

FavouriteModal.propTypes = {
  isModalVisible: PropTypes.bool,
  editModal: PropTypes.bool,
  handleClickOk: PropTypes.func.isRequired,
  handleClickCancel: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  queryName: PropTypes.string,
  sortBy: PropTypes.string,
  maxAmount: PropTypes.number,
};

export default FavouriteModal;
