import { useCallback, useState } from 'react'
import '../css/input.css'

function Input({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = useCallback((e) => {
      setValue(e.target.value)
   }, [])

   const onClick = useCallback(() => {
      setValue(value.concat(onInsert(value)))
      setValue('')
   }, [value, onInsert])

   const onKeyDown = useCallback(
      (e) => {
         if (e.key === 'Enter') {
            onClick()
         }
      },
      [onClick]
   )

   return (
      <div className="input">
         <input type="text" onChange={onChange} value={value} onKeyDown={onKeyDown} />
         <button onClick={onClick}>등록</button>
      </div>
   )
}

export default Input
