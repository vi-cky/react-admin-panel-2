import { InboxOutlined } from "@ant-design/icons";
import { Col, Input, Row, Select, message, Upload } from "antd";
import React from "react";
const { Option } = Select;
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

  onChange(info) {
    const { status } = info.file;

    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
export default function StudentsTable() {
  return (
    <>
      <Row
        style={{
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#f0f2f5",
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
          O'quvchini Qo'shish
        </h2>
      </Row>
      <Row
        gutter={{ xs: 24 }}
        style={{
          padding: "10px 10px 10px 10px",
          justifyContent: "space-between",
        }}
      >
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            Metrika/Pasport Raqami
          </span>
          <Input size="large" />
        </Col>
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            Qabul qilingan sana
          </span>
          <Input size="large" />
        </Col>
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Filial*</span>
          <Select
            labelInValue
            defaultValue={{
              value: "asosiy filial",
              label: "Asosiy Filial",
            }}
            size="large"
            style={{
              width: "100%",
            }}
            // onChange={handleChange}
          >
            <Option value="jack">Asosiy Filial</Option>
            <Option value="lucy">Lucy (101)</Option>
          </Select>
        </Col>
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Guruh</span>
          <Input size="large" />
        </Col>
      </Row>
      <Row
        gutter={{ xs: 24 }}
        style={{
          padding: "10px 10px 10px 10px",
          justifyContent: "space-between",
        }}
      >
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Familiya</span>
          <Input size="large" />
        </Col>
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Ism</span>
          <Input size="large" />
        </Col>
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Jinsi</span>
          <Select
            labelInValue
            defaultValue={{
              value: "asosiy filial",
              label: "Asosiy Filial",
            }}
            size="large"
            style={{
              width: "100%",
            }}
            // onChange={handleChange}
          >
            <Option value="jack">Asosiy Filial</Option>
            <Option value="lucy">Lucy (101)</Option>
          </Select>
        </Col>
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            Tug'ilgan kuni
          </span>
          <Input size="large" />
        </Col>
      </Row>
      <Row
        gutter={{ xs: 24 }}
        style={{
          padding: "10px 10px 10px 10px",
          justifyContent: "space-between",
        }}
      >
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            O'quvchi rasmi
          </span>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
        </Col>
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            Mobil raqam
          </span>
          <Input size="large" />
        </Col>
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Email</span>
          <Select
            labelInValue
            defaultValue={{
              value: "asosiy filial",
              label: "Asosiy Filial",
            }}
            size="large"
            style={{
              width: "100%",
            }}
            // onChange={handleChange}
          >
            <Option value="jack">Asosiy Filial</Option>
            <Option value="lucy">Lucy (101)</Option>
          </Select>
        </Col>
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            O'quvchi statusi
          </span>
          <Input size="large" />
        </Col>
      </Row>
      <Row
        gutter={{ xs: 24, lg: 12 }}
        style={{
          padding: "10px 10px 10px 10px",
          justifyContent: "left",
        }}
      >
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            Shartnoma raqami
          </span>
          <Input size="large" />
        </Col>
      </Row>
    </>
  );
}
