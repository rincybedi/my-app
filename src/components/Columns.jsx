import { formatChangePercentage, formatCurrency } from "../utils/util";

export const columns = [
  { accessor: 'rank', Header: 'Rank' },
  {
    accessor: 'name',
    Header: 'Name',
    width: '150px',
    Cell: (props) => {
      const row = props.row.original
      return <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <div>
          <img height={30} width={30}
            src={`https://assets.coincap.io/assets/icons/${row.symbol.toLowerCase()}@2x.png`} />
        </div>
        <div>
          <div>{row.name}</div>
          <div>{row.symbol}</div></div>
      </div>
    }
  },
  {
    accessor: 'priceUsd',
    Header: 'Price',
    Cell: (props) => {
      const row = props.row.original
      return <div>
        {formatCurrency(row.priceUsd)}
      </div>
    }
  },
  {
    accessor: 'marketCapUsd',
    Header: 'Market Cap',
    Cell: (props) => {
      const row = props.row.original
      return <div>
        {formatCurrency(row.marketCapUsd)}
      </div>
    }
  },
  {
    accessor: 'vwap24Hr ',
    Header: 'VWAP (24Hr)',
    Cell: (props) => {
      const row = props.row.original
      return <div>
        {formatCurrency(row.vwap24Hr)}
      </div>
    }
  },
  {
    accessor: 'supply',
    Header: 'Supply',
    Cell: (props) => {
      const row = props.row.original
      return <div>
        {formatCurrency(row.supply)}
      </div>
    }
  },
  {
    accessor: 'volumeUsd24Hr',
    Header: 'Volume (24Hr)',
    Cell: (props) => {
      const row = props.row.original
      return <div>
        {formatCurrency(row.volumeUsd24Hr)}
      </div>
    }
  },
  {
    accessor: 'changePercent24Hr',
    Header: 'Change (24Hr)',
    Cell: (props) => {
      const row = props.row.original
      let className = row.changePercent24Hr > 0 ? 'success' : 'danger'
      return <div className={className}>
        {formatChangePercentage(row.changePercent24Hr)}
      </div>
    }
  },
];