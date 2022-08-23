import { Col, Input, Row, Button, Space, Table, Select } from "antd";
import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
// import "./content.css";
const { Option } = Select;

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

export default function StudentsTable() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
  ];
  return (
    <>
      <Row
        style={{
          padding: "10px",
          backgroundColor: "#f0f2f5",
          marginBottom: 20,
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
          O'quvchilar Ro'yxati
        </h2>
      </Row>
      <Row
        gutter={{ xs: 24 }}
        style={{ marginBottom: 10, padding: "10px 10px 15px 10px" }}
      >
        <Col
          xs={24}
          style={{
            marginBottom: 10,
            borderBottom: "1px solid #f3f3f9",
            paddingBottom: "10px",
          }}
        >
          <Button type="primary" danger style={{ float: "left" }}>
            Import Student
          </Button>
          <Button type="primary" style={{ float: "right" }}>
            Add Student
          </Button>
        </Col>
      </Row>
      <Row
        gutter={{ xs: 24 }}
        style={{ marginBottom: 30, padding: "10px 10px 15px 10px", justifyContent: "space-between" }}
      >
        <Col xs={24} lg={5}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Filial*</span>
          <Select
            labelInValue
            defaultValue={{
              value: "Asosiy Filial",
              label: "Asosiy Filial",
            }}
            style={{
              width: "100%",
            }}
            // onChange={handleChange}
          >
            <Option value="jack">Asosiy Filial</Option>
            <Option value="lucy">Lucy (101)</Option>
          </Select>
          <Button
            style={{ float: "right", marginTop: "10px" }}
            type="primary"
            icon={<SearchOutlined />}
          >
            Search
          </Button>
        </Col>
        <Col xs={24} lg={3}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Filial*</span>
          <Select
            labelInValue
            defaultValue={{
              value: "Mirobod",
              label: "Mirobod",
            }}
            style={{
              width: "100%",
            }}
            // onChange={handleChange}
          >
            <Option value="jack">Mirobod</Option>
            <Option value="lucy">Lucy (101)</Option>
          </Select>
        </Col>
        <Col xs={24} lg={3}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Guruh*</span>
          <Select
            labelInValue
            defaultValue={{
              value: "Tanlash",
              label: "Tanlash",
            }}
            style={{
              width: "100%",
            }}
            // onChange={handleChange}
          >
            <Option value="jack">Tanlash</Option>
            <Option value="lucy">Lucy (101)</Option>
          </Select>
          <Button
            style={{ float: "right", marginTop: "10px" }}
            type="primary"
            icon={<SearchOutlined />}
          >
            Search
          </Button>
        </Col>
        <Col xs={24} lg={10}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            Kalit so'zlar bo'yicha izlash*
          </span>
          <Select
            labelInValue
            defaultValue={{
              value: "O'quvchi ismi bo'yicha yozish",
              label: "O'quvchi ismi bo'yicha yozish",
            }}
            style={{
              width: "100%",
            }}
            // onChange={handleChange}
          >
            <Option value="jack">O'quvchi ismi bo'yicha yozish</Option>
            <Option value="lucy">Lucy (101)</Option>
          </Select>
          <Button
            style={{ float: "right", marginTop: "10px" }}
            type="primary"
            icon={<SearchOutlined />}
          >
            Search
          </Button>
        </Col>
      </Row>
      <Row gutter={{ xs: 24 }}>
        <Col className="gutter-row" span={24}>
          <Table
            style={{ overflow: "scroll" }}
            columns={columns}
            dataSource={data}
          />
        </Col>
      </Row>
    </>
  );
}
