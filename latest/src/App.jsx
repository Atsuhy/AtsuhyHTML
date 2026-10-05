import Kartya from './components/Kartya'
const favorites=[
        {
          id:1,
          emoji:"🎷",
          cim:"Music",
          leiras:"Chillin around"
        },
        {
          id:2,
          emoji:"🎸",
          cim:"Frequencies",
          leiras:"Vibing"
        },
        {
          id:3,
          emoji:"🔊",
          cim:"Cool",
          leiras:"Aestethic"
        }
    ]


function App(){
  return(
    <>
      <h1>Kedvenceim</h1>
      <div className="cards">
        {favorites.map(favorite=> {
          return(
            <Kartya key={favorite.id} emoji={favorite.emoji} cim={favorite.cim} leiras={favorite.leiras} /> 
          )
        })}
      </div>
    </>
  )
  
}
export default App;