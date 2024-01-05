import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from 'src/components/InetShop/types';
import { RootState } from './index';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: [] as ProductItem[],
  reducers: {
    add: (state, action: PayloadAction<ProductItem>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<{ productId: string }>) => {
      const index = state.findIndex((p) => p.id === action.payload.productId);
      state.splice(index, 1);
    },
  },
});

export const basketActions = basketSlice.actions;

export const basketSelectors = {
  get: (state: RootState): RootState['basket'] => state.basket,
};

export const basket = basketSlice.reducer;
