import {useState, useEffect} from 'react';

const Detail = ({diaryEntry}) => {

    return(
        <>
        <div>
            <h2>Your stats today</h2>
        </div>
            <div class="navbar">
                <ul class="detail-list">
                <li>Date: {diaryEntry[diaryEntry.length -1].date}</li>
                <br/>
                <li>Screen Time: {diaryEntry[diaryEntry.length -1].screenTime.hours} hours</li>
                <br/>
                <li>Water Intake: {diaryEntry[diaryEntry.length -1].waterIntake.litres} litres</li>
                <br/>
                <li>Sleep time: {diaryEntry[diaryEntry.length -1].sleep.hours} hours</li>
                <br/>
                <li>Meditation Time: {diaryEntry[diaryEntry.length -1].meditation.minutes} minutes</li>
                <br/>
                <li>Journal Entry: {diaryEntry[diaryEntry.length -1].journal.journal_entry}</li>
                </ul>
            </div>
        
        </>
    )
};

export default Detail;

// const MapFetchData = diaryEntries.map((diaryEntry) => {
  //   return (
  //     // <diaryEntry diaryEntry={diaryEntry} />
  //     <p>{diaryEntry}</p>
  //   )
  // });