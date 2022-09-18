import * as React from 'react';
import { getCryptoData } from '../redux/actions/crypto';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { DataGrid } from './DataGrid';
import { columns } from './Columns';
import { Button } from '@mui/material';

export default function HomePage() {
    const limit = 50
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        getCryptoData(offset, limit);
    }, [offset])

    const cryptoState = useSelector(
        (state) => state.cryptoState);

    const { isApiLoading, cryptoResult = [] } = cryptoState;

    const handleLoadMore = () => {
        setOffset(prevOffset => prevOffset + 50);
    }

    return (
        <div id='divTableContainer'>
            <DataGrid columns={columns} data={cryptoResult} />
            <Button variant="contained" color="success" onClick={handleLoadMore}>Load More</Button>
        </div>
    )
}
