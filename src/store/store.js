
import { configureStore } from '@reduxjs/toolkit'
import { calendarReducer } from '../reducers/calendarReducer'
import { uiReducer } from '../reducers/uiReducer'

export default configureStore({
    reducer: {
        ui: uiReducer,
        calendar: calendarReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }), 
})