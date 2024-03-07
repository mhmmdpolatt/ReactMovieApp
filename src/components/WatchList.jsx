import { useSelector, useDispatch } from "react-redux";
import { deletedMovie } from "../store/slice";
function WatchList() {
  const watchList = useSelector((state) => state.movie.watchList)
  const dispatch = useDispatch()



  let isEmpty = true
  if (watchList.length < 1) {
    isEmpty = false
  }
  return (
    <>

      <div>
        <h1 style={{ textAlign: "center", fontSize: "30px", color:"white" }}>İzleyeceklerim</h1>
      </div>
      {isEmpty ? (
        watchList.map((movie) => {
          return (
            <>

              <div className="cardResult" style={{marginLeft:"50%", transform:"translate(-50%)"}}>

                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
                <div className="cardResultBody">
                  <div className="bodyDiv">
                    <h2 style={{ color: "white" }}>{movie.title}</h2>
                    <h3>Yapım Yılı :  {movie.release_date ? movie.release_date.substring(0, 4) : "Bilgisi Yok"}

                    </h3>
                  </div>

                  <h4>IMBDB : {movie.vote_average.toFixed(1)}</h4>
                  <button onClick={() => { dispatch(deletedMovie(movie.id)) }}>Sil</button>
                </div>
                
                 
                

              </div>

            </>
          )
        })
      ) : (
        <div>
          <h1 style={{ textAlign: "center", color: "white" }}>LİSTEM BOŞ</h1>
        </div>
      )


      }


    </>
  );
}

export default WatchList;