import React from 'react'
import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(10)

    const { feedbackEdit } = useContext(FeedbackContext)

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

  return (
    <ul className='rating'>
        <li>
            <input 
            type='radio'
            id='num1'
            name='rating'
            value='1'
            onChange={handleChange}
            checked={selected === 1} />
            <label for='num1'>1</label>
        </li>
        <li>
            <input 
            type='radio'
            id='num2'
            name='rating'
            value='2'
            onChange={handleChange}
            checked={selected === 2} />
            <label for='num2'>2</label>
        </li>
        <li>
            <input 
            type='radio'
            id='num3'
            name='rating'
            value='3'
            onChange={handleChange}
            checked={selected === 3} />
            <label for='num3'>3</label>
        </li>
        <li>
            <input 
            type='radio'
            id='num4'
            name='rating'
            value='4'
            onChange={handleChange}
            checked={selected === 4} />
            <label for='num4'>4</label>
        </li>
        <li>
            <input 
            type='radio'
            id='num5'
            name='rating'
            value='5'
            onChange={handleChange}
            checked={selected === 5} />
            <label for='num5'>5</label>
        </li>
        <li>
            <input 
            type='radio'
            id='num6'
            name='rating'
            value='6'
            onChange={handleChange}
            checked={selected === 6} />
            <label for='num6'>6</label>
        </li>
        <li>
            <input 
            type='radio'
            id='num7'
            name='rating'
            value='7'
            onChange={handleChange}
            checked={selected === 7} />
            <label for='num7'>7</label>
        </li>
        <li>
            <input 
            type='radio'
            id='num8'
            name='rating'
            value='8'
            onChange={handleChange}
            checked={selected === 8} />
            <label for='num8'>8</label>
        </li>
        <li>
            <input 
            type='radio'
            id='num9'
            name='rating'
            value='9'
            onChange={handleChange}
            checked={selected === 9} />
            <label for='num9'>9</label>
        </li>
        <li>
            <input 
            type='radio'
            id='num10'
            name='rating'
            value='10'
            onChange={handleChange}
            checked={selected === 10} />
            <label for='num10'>10</label>
        </li>
    </ul>
  )
}

export default RatingSelect
