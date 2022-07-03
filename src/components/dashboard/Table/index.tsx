import { useTable,useSortBy } from 'react-table';
import Sort from "../../../assets/sort.svg"
import PayCode from "../../../assets/pay-code-one.svg"
import Copy from "../../../assets/icon-park-outline_copy.svg"
import { ActionButtons, ContainerTable,TableData } from './styles';



interface TableProps {
    columns: any;
    data: any;
 }

const Table = ({ columns, data }:TableProps) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow
	} = useTable({
		columns,
        data,
    },
    useSortBy
    );

	return (
		<ContainerTable>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map(
						(headerGroup, bodyKeyStaticElements) => (
							<tr {...headerGroup.getHeaderGroupProps()} key={bodyKeyStaticElements}>
                                {headerGroup.headers.map((column, bodyKeyMainElements) => (
                                    // @ts-expect-error getSortByToggleProps
									<th {...column.getHeaderProps(column.getSortByToggleProps())} key={bodyKeyMainElements}>
										{column.render('Header')}
										<span style={{ marginLeft: 7 }}>
											 { column.Header!=='' && <img src={Sort}   />}
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
										<TableData {...cell.getCellProps()} key={bodyKeyMainElements}>
											<>
												{console.log(cell)}
												{cell.column.Header === '' ?
													<ActionButtons>
                                                     <img src={Copy} alt="Copy" />
                                                     <img src={PayCode} alt="Pay Code" />
													</ActionButtons>
													: 
													<div>
														{cell.render('Cell')}
													</div>
												}
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
	);
};

export default Table;


