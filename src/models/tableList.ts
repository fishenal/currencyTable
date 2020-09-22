import { Effect, Reducer } from 'umi';
import { getHistory } from '@/services/tableList';
import { getLastDays } from '@/utils/utils';
import { getFields } from '@/pages/Settings';

export interface ITableListModel {
  namespace: 'tableList';

  state: {
    rowData: any[];
    dateKeys: string[];
    cols: any[];
    selectRow: {};
    isShowExchange: boolean;
  }

  effects: {
    [fname: string]: Effect
  }

  reducers: {
    [fname: string]: Reducer
  }
}

const tableListModel: ITableListModel = {
  namespace: 'tableList',

  state: {
    rowData: [],
    dateKeys: [],
    cols: [],
    selectRow: {},
    isShowExchange: false,
  },

  effects: {
    *fetchCurrency(_, { call, put }) {
      const days = getLastDays();
      const { base, symbols } = getFields();
      const res = yield call(getHistory, {
        ...days,
        base,
        symbols: symbols.join(',')
      });
      if (res.rates) {
        yield put({
          type: 'setRates',
          payload: res.rates,
        });
        yield put({
          type: 'setCols',
        });
      }
    },
  },

  reducers: {
    setRates(state, { payload: rates}) {
      const dateKeys = Object.keys(rates).sort()
      const { symbols } = getFields()
      const rowData = symbols.map(currency => {
        const rowObj = {
          currency,
          key: currency,
        }
        dateKeys.forEach(date => {
          rowObj[date] = rates[date][currency]
        })
        return rowObj
      })
      return {
        ...state,
        dateKeys,
        rowData,
      };
    },
    setCols(state) {
      const dateKeysLength = state.dateKeys.length
      // const last5Dayskeys = state.dateKeys.slice(dateKeysLength - 5, dateKeysLength)
      const daysCols = state.dateKeys.map((key: string) => ({
        title: key,
        dataIndex: key,
        key,
      }))
      const staticCols = [
        {
          title: 'Currency',
          dataIndex: 'currency',
          key: 'currency',
        },
      ]
      return {
        ...state,
        cols: [...staticCols, ...daysCols]
      }
    },
    rowSelect(state, { payload: { record } }) {
      return {
        ...state,
        selectRow: record
      }
    },
    toggleExchange(state, { payload }) {
      return {
        ...state,
        isShowExchange: payload
      }
    },
  },
};

export default tableListModel;
