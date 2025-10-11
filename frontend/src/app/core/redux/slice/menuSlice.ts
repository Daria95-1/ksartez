import { createSlice } from '@reduxjs/toolkit'

interface MenuState {
  selectNav: string | null
}

const initialState: MenuState = {
  selectNav: null,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    selectNav(state, action) {
      state.selectNav = action.payload
    },
  },
})

export const { selectNav } = menuSlice.actions
export default menuSlice.reducer
