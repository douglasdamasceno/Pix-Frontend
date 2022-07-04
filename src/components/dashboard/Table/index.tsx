import { useTable, useSortBy, useGlobalFilter } from "react-table";
import IconSort from "../../../assets/sort.svg";
import IconPreviewPage from "../../../assets/Pagination-left.svg";
import IconNextPage from "../../../assets/Pagination-right.svg";
import PayCode from "../../../assets/pay-code-one.svg";
import Copy from "../../../assets/icon-park-outline_copy.svg";
import {
  ActionButtons,
  Container,
  ContainerPagination,
  ContainerTable,
  NextPage,
  Page,
  PreviewPage,
  TableData,
} from "./styles";
import NavBar from "./NavBar";

interface TableProps {
  columns: any;
  data: any;
  search:string;
  onClick: () => void;
}

const Table = ({ columns, data, onClick }: TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
      {
        columns,
        data,
		
      },
      useGlobalFilter,
      useSortBy,
    );

  return (
    <Container>
      <NavBar onChangeSearch={setGlobalFilter} onClick={onClick} />
      <ContainerTable>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, bodyKeyStaticElements) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={bodyKeyStaticElements}
              >
                {headerGroup.headers.map((column, bodyKeyMainElements) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={bodyKeyMainElements}
                  >
                    {column.render("Header")}
                    <span style={{ marginLeft: 7 }}>
                      {column.Header !== "" && <img src={IconSort} />}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, bodyKeyStaticElements) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={bodyKeyStaticElements}>
                  {row.cells.map((cell, bodyKeyMainElements) => {
                    return (
                      <TableData
                        {...cell.getCellProps()}
                        key={bodyKeyMainElements}
                      >
                        <>
                          {cell.column.Header === "" ? (
                            <ActionButtons>
                              <img src={Copy} alt="Copy" />
                              <img src={PayCode} alt="Pay Code" />
                            </ActionButtons>
                          ) : (
                            <div>{cell.render("Cell")}</div>
                          )}
                        </>
                      </TableData>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </ContainerTable>
      <ContainerPagination>
        <PreviewPage src={IconPreviewPage} /> <Page selected>1</Page>
        <Page>2</Page>
        <NextPage src={IconNextPage} />
      </ContainerPagination>
    </Container>
  );
};

export default Table;
