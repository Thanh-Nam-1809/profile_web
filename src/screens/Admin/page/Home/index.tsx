import { Button, Form, Input, Modal, UploadFile, UploadProps } from 'antd';
import Upload, { RcFile } from 'antd/es/upload';
import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const HomePage = () => {
    const [form] = Form.useForm();

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <div>
            <StyledAdmim>

                <div className='container'>
                    <h1>Header</h1>
                    <Form form={form}>
                        <Form.Item name='title_header' label='Title header'>
                            <Input placeholder='Enter title header' />
                        </Form.Item>
                        <Button>Save</Button>
                    </Form>
                </div>
                <div className='container'>
                    <h1>Footer</h1>
                    <Form form={form}>
                        <Form.Item name='title_footer' label='Title footer'>
                            <Input placeholder='Enter title footer' />
                        </Form.Item>
                        <Form.Item name='address_footer' label='Address footer'>
                            <Input placeholder='Enter address footer' />
                        </Form.Item>
                        <Form.Item name='email_footer' label='Email footer'>
                            <Input placeholder='Enter email footer' />
                        </Form.Item>
                        <Form.Item name='phone_footer' label='Phone footer'>
                            <Input placeholder='Enter phone footer' />
                        </Form.Item>
                        <Button>Save</Button>
                    </Form>
                </div>
                <div className='container'>
                    <h1>Home</h1>
                    <Form form={form}>
                        <Form.Item name='title_home' label='Title'>
                            <Input placeholder='Enter title' />
                        </Form.Item>
                        <Form.Item name='content_home' label='Content'>
                            <Input placeholder='Enter content' />
                        </Form.Item>
                        <Button>Save</Button>
                    </Form>
                </div>
                <div className='container'>
                    <h1>Infomation</h1>
                    <Form form={form}>
                        <Form.Item name='title_information' label='Title infomation'>
                            <Input placeholder='Enter title infomation' />
                        </Form.Item>
                        <Form.Item name='address_content_1' label='Content'>
                            <Input placeholder='Enter Content' />
                        </Form.Item>
                        <Form.Item name='img' label='Image content'>
                            <Upload
                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                listType="picture-circle"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </Form.Item>
                        <Button>Save</Button>
                    </Form>
                </div>
                <div className='container'>
                    <h1>Product</h1>
                    <Form form={form}>
                        <Form.Item name='title_product' label='Title product'>
                            <Input placeholder='Enter title product' />
                        </Form.Item>
                        <Form.Item name='address_content' label='Content'>
                            <Input placeholder='Enter Content' />
                        </Form.Item>
                        <Form.Item name='img' label='Image product'>
                            <Upload
                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                listType="picture-circle"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </Form.Item>
                        <Button>Save</Button>
                    </Form>
                </div>
            </StyledAdmim>
        </div>
    );
};

export default HomePage;

const StyledAdmim = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: space-between;
padding: 0 80px;
.container {
    width: 40%;
    padding: 20px;
    border: 1px solid #000000;
    border-radius: 8px;
}
.ant-row {
    display: grid;
}
.ant-form-item-label {
    text-align: start;
    & > label {
        font-size: 18px;
        font-weight: 600;
    }
}
input {
    height: 50px;
    font-size: 18px;
    color: #000000;
}
button {
    width: 200px;
    height: 50px;
    background: #909090;
    border: 1px solid #909090;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    &:hover {
        opacity: 50%;
        color: #000000 !important;
        border-color: #000000 !important;
    }
}
`;