import React, { useState } from 'react';
import { Space, Modal } from 'antd';
import { ExclamationCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import DataProducts from '../Data/DataProducts';
import DataTable from "../Data/dataTable";

const { confirm } = Modal;

const Products = () => {
  const [deleteProductId, setDeleteProductId] = useState(null);

  const handleConfirmDelete = () => {
    if (deleteProductId) {
      // Implement logic to delete the product with the given productId
      console.log('Delete product with id:', deleteProductId);
      // Reset deleteProductId after successful deletion
      setDeleteProductId(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteProductId(null);
  };

  const showDeleteConfirm = (product) => {
    confirm({
      title: `Hapus item ${product.name}?`,
      icon: <ExclamationCircleOutlined />,
      okText: 'Hapus',
      okType: 'danger',
      cancelText: 'Batal',
      onOk: handleConfirmDelete,
      onCancel: handleCancelDelete,
    });
  };

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, product) => (
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Product Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Expiry Date',
      dataIndex: 'expiryDate',
      key: 'expiryDate',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, product) => (
        <Space size="middle">
          <DeleteOutlined onClick={() => showDeleteConfirm(product)} />
        </Space>
      ),
    },
  ];

  return <DataTable columns={columns} items={DataProducts} />;
};

export default Products;