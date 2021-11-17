import React from "react";
import Table from "react-bootstrap/Table";

const TableData = () => {
  return (
    <div className="my-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Icon</th>
            <th>File Name</th>
            <th>Description</th>
            <th>Author</th>
            <th>Date created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
