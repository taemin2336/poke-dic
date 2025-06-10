import '../css/middle.css'

function Middle({ mons, onDel, changeColor, changeEvol }) {
   const push = () => {
      return mons.map((mon) => (
         <div
            className="card"
            key={mon.id}
            style={{ backgroundColor: mon.color ? 'white' : 'black' }}
            onDoubleClick={() => {
               changeColor(mon.id)
            }}
         >
            <button className="del_button" onClick={() => onDel(mon.id)}>
               삭제
            </button>
            <img src={`${mon.text}.png`} alt={mon.text} />
            <p
               className="poke_name"
               style={{ color: mon.color ? 'black' : 'gray' }}
               onDoubleClick={() => {
                  changeColor(mon.id)
               }}
            >
               {mon.text}
            </p>
            <button
               className="level_button"
               onClick={() => {
                  changeEvol(mon.id)
               }}
            >
               진화
            </button>
         </div>
      ))
   }

   return <div className="middle">{push()}</div>
}

export default Middle
