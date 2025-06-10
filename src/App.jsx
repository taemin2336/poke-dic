import { useState, useRef, useCallback, useMemo } from 'react'
import Up from './components/Up.jsx'
import Middle from './components/middle.jsx'
import Input from './components/Input.jsx'

function App() {
   const [mons, setMons] = useState([
      {
         id: 1,
         text: '꼬부기',
         color: true,
      },
      {
         id: 2,
         text: '어니부기',
         color: true,
      },
      {
         id: 3,
         text: '거북왕',
         color: true,
      },
   ])
   const monster = useMemo(() => ['거북왕', '꼬부기', '단데기', '리자드', '리자몽', '버터플', '어니부기', '이상해꽃', '이상해씨', '이상해풀', '캐터피', '파이리'], [])

   const nextId = useRef(4)

   const onInsert = useCallback(
      (text) => {
         const mon = {
            id: nextId.current,
            text,
            color: true,
         }
         let k = 0
         monster.filter((e) => {
            if (e == text) {
               setMons(mons.concat(mon))
               nextId.current += 1
            } else {
               k++
               if (k == 12) alert(`${text}는 없다.`)
            }
         })
      },
      [mons, monster]
   )

   const changeColor = useCallback(
      (id) => {
         setMons(
            mons.map((mon) =>
               mon.id === id
                  ? {
                       ...mon,
                       color: !mon.color,
                    }
                  : mon
            )
         )
      },
      [mons]
   )

   /* 배열에 text1이런식으로 진화하려고 하니 새로 추가된 데이터가 적용이 안되고 
   이미지를 꼬부기2, 꼬부기3 이런식으로 하려고 하니 텍스트도 꼬부기2 이런식으로 나와서 안되고
   처음부터 3개 랜더링하고 2개 가리고 하나만 보여주려니 너무 어려워서 못했습니다.
   */
   const changeEvol = useCallback(
      (id) => {
         setMons(
            mons.map((mon) =>
               mon.id === id
                  ? {
                       ...mon,
                       text: mon.text,
                    }
                  : mon
            )
         )
      },
      [mons]
   )

   const onDel = useCallback(
      (id) => {
         const delMon = mons.filter((e) => e.id != id)
         setMons(delMon)
      },
      [mons]
   )

   return (
      <Up>
         <Input onInsert={onInsert} />
         <Middle mons={mons} onDel={onDel} changeColor={changeColor} changeEvol={changeEvol} />
      </Up>
   )
}

export default App
