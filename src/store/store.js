
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../reducers/authReducer'
import { calendarReducer } from '../reducers/calendarReducer'
import { uiReducer } from '../reducers/uiReducer'

export default configureStore({
    reducer: {
        ui: uiReducer,
        calendar: calendarReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }), 
})