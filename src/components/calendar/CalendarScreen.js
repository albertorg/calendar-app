import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

import { Navbar } from '../ui/Navbar'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'
import { eventCleanActiveNote, eventSetActive } from '../../actions/events'
import { AddNewFab } from '../ui/AddNewFab'
import { DeleteEventFab } from '../ui/DeleteEventFab'


const localizer = momentLocalizer(moment) // or globalizeLocalizer

// const events = [
//   {
//     title: 'Cumpleanos del jefe - ',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     bgcolor: '#fafafa',
//     notes: 'Buy cake',
//     user: {
//       _id: '123',
//       name: 'Alberto'
//     }
//   }
// ]

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

  const dispatch = useDispatch()

  // Read events from store
  const { events, activeEvent } = useSelector(state => state.calendar)
  

  const onDoubleClick = (e) => { 
    // dispatch(eventSetActive(e))
    dispatch(uiOpenModal())

  }

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e))
  }

  const onViewChange = (e) => {
    setLastView(e)
    localStorage.setItem('lastView', e)
  }

  const onSelectSlot = (e) => {
    dispatch(eventCleanActiveNote)
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    
    const style = {
      backgroundColor: '#367cf7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }
    
    return {
      style
    }
  }


  return (
    
    <div className='calendar-screen'>
      <Navbar />
      
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectSlot}
        selectable={true}
        view={lastView}
        components={{
          event: CalendarEvent
        }}
      />

      <AddNewFab /> 

      {activeEvent && <DeleteEventFab /> } 

      <CalendarModal/>

    </div>
  )
}
