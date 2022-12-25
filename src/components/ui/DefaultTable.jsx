import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, tableCellClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react';

const StyledTableContainer = styled("div")(() => ({padding: '20px 0 80px'}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    '&:hover': {
        backgroundColor: "rgb(5, 0, 163, 0.14)",
        transition: "all .2s linear"
    }
}));
export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        width: '150px',
        backgroundColor: "rgb(192, 192, 192)",
        textAlign: 'center'
    },
    [`&.${tableCellClasses.body}`]: {
        width: '150px',
        fontSize: 14,
        textAlign: 'center',
        cursor: 'pointer',
    },
}));

function DefaultTable({data = [], columns}) {
    return (
    <StyledTableContainer>
        <TableContainer
            component={Paper}
        >
            <Table aria-label="demo table">
                <TableHead>
                    <StyledTableRow>
                        {columns.map(({label}, index) => <StyledTableCell key={`${label} ${index}`}>{label}</StyledTableCell>)}
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.map((item, index) => <StyledTableRow key={`${item} ${index}`} onClick={() => console.log(item.firstName)}>
                        {columns.map(({key}, index) => <StyledTableCell key={`${key} ${index}`}>{item[key]}</StyledTableCell>)}
                    </StyledTableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    </StyledTableContainer>
)}

export default observer(DefaultTable);