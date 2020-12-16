
import {useState} from 'react';
import {Slider, Typography} from '@material-ui/core';
import axios from 'axios';

const Sleep = ({diary, handleUpdate}) => {

    const [sleep, setSleep] = useState(0)
   

    const handleChange = (event, value) => {
        setSleep(value);
        };
    

    const submitForm = (event) => {
        event.preventDefault();
        const data = {
                hours: sleep
          };
        axios({
          method: "post",
          url: `http://localhost:8080/sleep`,
          data
        })
        .then(
            res => {
                handleUpdate("sleep", res.data)           
                // axios({
                //     method: "put",
                //     url: `http://localhost:8080/diaryentry/${diary}`, 
                //     diary
                // })
            }
        )
        .catch(err => {
            console.log(err);
          });
        };

            
                return (
                    <div>
                        <Typography id="discrete-slider" gutterBottom>
                        Sleepytime
                        </Typography>
                        <Slider
                            defaultValue={sleep}
                            // getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={0}
                            max={10}
                            onChange={handleChange}
                        />
                    <form onSubmit={submitForm} >
                    <button type="submit">Submit Sleep</button>
                    </form>        
                    </div>
                );
                };

export default Sleep;