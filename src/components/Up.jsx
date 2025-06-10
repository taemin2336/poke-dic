import '../css/up.css'

function Up({ children }) {
   return (
      <div className="wrap">
         <div className="up">
            <img src="pokemon.png" alt="포켓몬" />
         </div>

         <div>{children}</div>
         <div className="low">
            <p>'거북왕', '꼬부기', '단데기', '리자드', '리자몽', '버터플', '어니부기', '이상해꽃', '이상해씨', '이상해풀', '캐터피', '파이리'을 추가할 수 있습니다.</p>
         </div>
      </div>
   )
}

export default Up
