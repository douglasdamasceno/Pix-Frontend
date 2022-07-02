import { useTable,useSortBy } from 'react-table';
import Sort from "../../../assets/sort.svg"
import Date from "../../../assets/calendar.svg"
import PayCode from "../../../assets/pay-code-one.svg"
import Copy from "../../../assets/copy.svg"
import InputWithIcon from '../../ui/InputWithIcon';
import { ContainerStyles,TableData } from './styles';
import Button from '../../ui/Button';


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
		<ContainerStyles>
			<div style={{display:'flex'}}>
				<InputWithIcon />
				<InputWithIcon icon={Date} placeholder="Pesquisar data" />

				 <Button
                   width="162px"
                   height="48px"
                   primary
                   onClick={() => console.log(`ddd`)}
                  >
                 Adicionar saldo
                </Button>
			</div>
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
													<div>
                                                     <img src={Copy} alt="Copy" />
                                                     <img src={PayCode} alt="Pay Code" />
													</div>
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
		</ContainerStyles>
	);
};

export default Table;


