import { useSelector } from "react-redux";

function Watched() {

    const watchedList = useSelector((state) => state.movie.watchedList)
    let isEmpty = true;
    if (watchedList.length < 1) {
        isEmpty = false
    }




    return (
        <div className="watched">

            <h1 style={{ textAlign: "center", fontSize: "30px"  , color:"white"}}>İzlediklerim</h1>
            {isEmpty ? (
                watchedList.map((movie) => {
                    return (
                        <>

                            <div className="cardResult" style={{ marginLeft: "50%", transform: "translate(-50%)" }}>

                                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
                                <div className="cardResultBody">
                                    <div className="bodyDiv">
                                        <h2 style={{ color: "white" }}>{movie.title}</h2>
                                        <h3>Yapım Yılı :  {movie.release_date ? movie.release_date.substring(0, 4) : "Bilgisi Yok"}

                                        </h3>
                                    </div>

                                    <h4>IMBDB : {movie.vote_average.toFixed(1)}</h4>

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

        </div>
    );
}

export default Watched;