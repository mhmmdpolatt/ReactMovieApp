import React from "react";
import { addWatchList, addWatchedList } from "../store/slice";
import { useSelector, useDispatch } from "react-redux";
function ResultCard({ movie }) {





    const dispatch = useDispatch();

    function handleClick() {
        dispatch(addWatchedList(movie))
    }

    function handle2Click() {
        dispatch(addWatchList(movie))

    }
    return (
        <>
            <div className="cardResult">

                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
                <div className="cardResultBody">
                    <div className="bodyDiv">
                        <h2 style={{ color: "white" }}>{movie.title}</h2>
                        <h3>Yapım Yılı :  {movie.release_date ? movie.release_date.substring(0, 4) : "Bilgisi Yok"}

                        </h3>
                    </div>

                    <h4>IMBDB : {movie.vote_average.toFixed(1)}</h4>
                    <div className="cardResultButton">
                        <button onClick={handleClick}>İzlediklerime Ekle</button>
                        <button onClick={handle2Click}>İzleyeceklerime Ekle</button>
                    </div>

                </div>

            </div>

        </>
    );
}

export default ResultCard;