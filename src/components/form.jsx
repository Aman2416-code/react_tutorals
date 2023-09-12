import React from 'react'

function Form() {
  return (
    <div>
        <h1 className='form_heading'>Student Details: </h1>
        <form action="index.php">
            <label htmlFor="name">Name: &ensp;&nbsp;</label>
            <input type="text" name="name" id="name" />
            <br /><br />
            <label htmlFor="group">Group: &ensp;&nbsp;</label>
            <input type="text" name="group" id="group" />
            <br /><br />
            <label htmlFor="roll_no">Roll No: </label>
            <input type="number" name="roll_no" id="roll_no" />
            <br /><br />
            <input type="submit" value="Submit" id='submit_btn' />&emsp;
            <input type="reset" value="Reset" id='reset_btn' />
        </form>
    </div>
  )
}

export default Form