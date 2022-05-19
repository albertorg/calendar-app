
import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from '../reducers/uiReducer'

export default configureStore({
    reducer: {
        ui: uiReducer,
    },
})