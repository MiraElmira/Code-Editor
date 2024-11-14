import { configureStore } from '@reduxjs/toolkit'
import SettingReducer from '../features/SettingSlice'

export const store = configureStore({

  reducer: {

    setting: SettingReducer,

  },

})