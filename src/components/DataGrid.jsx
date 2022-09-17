import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getCryptoData } from '../redux/actions/crypto';
import { useSelector } from 'react-redux';
import { useEffect , useState} from 'react';

const columns= [
  { field: 'rank', headerName: 'j', width: 130 },
  { field: 'symbol', headerName: 'Symbol', width: 130 },
  {
    field: 'name',
    headerName: 'Name',
    width: 90,
  },
  {
    field: 'supply',
    headerName: 'Supply',
    width: 90,
  },
  {
    field: 'maxSupply',
    headerName: 'Max Supply',
    width: 90,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 90,
  },

  
];

export default function DataTable() {
  const limit = 50
  const [offset, setOffset] = useState(0)
  
  useEffect(() => {
    getCryptoData(offset, limit);
  }, [offset])

  const cryptoState = useSelector(
    (state) => state.cryptoState);

  const { isApiLoading, cryptoResult =[] } = cryptoState;

  const handleLoadMore = () => {
    setOffset(prevOffset => prevOffset + 50); 
  }
  
  return (
   <>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={cryptoResult}
        columns={columns}
        pagination={false}
      />
    </div>
    <button onClick={handleLoadMore}>Load More</button></>
  );
}
