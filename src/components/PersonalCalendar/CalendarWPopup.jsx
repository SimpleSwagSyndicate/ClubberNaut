import React, { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { Indicator } from '@mantine/core';
import { useEffect } from 'react';
import Popup from './Popup'; // Assuming you have a Popup component
import classes from './PersonalCalendar.module.css';
import { createClient } from '@supabase/supabase-js'; // Import createClient directly
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);

export const CalendarWithPopup = (props) => {
  const [clubEvents, setClubEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const clubs = props.clubs;

  useEffect(() => {
    const fetchClubEvents = async () => {
      const events = await Promise.all(clubs.map(clubName => getClubEvents(clubName)));
      setClubEvents(events.flat());
    };

    fetchClubEvents();
  }, [clubs]); // Re-run effect whenever clubs change

  const dayRenderer = (date) => {
    const day = date.getDate()
    date = extractDate(date)
    // console.log()
    const events = clubEvents.map(club => findEvents(club.recent_update[0], date)).flat();
    // console.log(date)
    // console.log(events)
    

    return (
      <Indicator size={8} color="red" offset={-10} disabled={events.length === 0}>
        <div>{day}</div>
      </Indicator>
    )
  };

  const getClubEvents = async (clubName) => {
    const { data: events, error } = await supabase
      .from('Club Profile')
      .select('recent_update')
      .eq('name', clubName);
  
    return events;
  };

  const extractDate = (date) =>{
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month.toString().length === 1)
      month = '0' + month;
    if (day.toString().length === 1)
      day = '0' + day;
    date = month + "/" + day + "/" + (date.getYear() + 1900);
    return date
  }

  const handleDateSelect = async date => {
    date = extractDate(date)

    let events = [];
    if (clubEvents.length > 0) {
      events = clubEvents.map(club => findEvents(club.recent_update[0], date)).flat();
    }
    // console.log(events)
    // console.log(clubEvents)
    if (events.length > 0) {
      setSelectedDate(events);
    } else {
      setSelectedDate(null);
    }
  };

  const findEvents = (club, date) => {
    let updateNum = 1;
    let events = [];
    if(club !== undefined){
    while (club["Update " + updateNum] !== undefined) {
      if (club["Update " + updateNum]["date"] === date)
        events.push(club["Update " + updateNum]);
      updateNum++;
    }
  }

    return events;
  };

  return (
    <div>
      <DatePicker
        className={classes.calendar}
        size="xl"
        styles={theme => ({
          cell: {
            border: `1px solid ${theme.colors.dark[4]}`,
          },
          day: { borderRadius: 5, width: 153, height: 125, fontSize: theme.fontSizes.lg },
          weekday: { fontSize: theme.fontSizes.lg },
          weekdayCell: {
            fontSize: theme.fontSizes.lg,
            backgroundColor: theme.colors.dark[5],
            border: `1px solid ${theme.colors.dark[4]}`,
            height: 70,
          },
        })}
        onChange={handleDateSelect}
        renderDay={dayRenderer}
      />
      {selectedDate && (
        <Popup
          events={selectedDate}
          onClose={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
};