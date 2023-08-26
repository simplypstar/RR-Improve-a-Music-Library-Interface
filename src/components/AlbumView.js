import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function AlbumView(props) {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])
    const navigate = useNavigate()

    useEffect(() => { 
        const API_URL = `http://localhost:3000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
            fetchData()
            }, [id])

        const navButtons = () => {
            return (
                <div>
                    <button name="back" onClick={() => navigate(-1)}>Back</button>  &nbsp; | &nbsp;
                    <button name="home" onClick={() => navigate('/')}>Home</button>
                </div>
            )
        }

        const justSongs = albumData.filter(entry => entry.kind === 'song')

        const renderSongs = justSongs.map((album, i) => {
            return (
                <div key={i}>
                    <p>{album.trackName}</p>
                </div>
            )
        }
    )
 
    return (
        <div>
            {navButtons()}
            {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <p>Loading ...</p>}
            {renderSongs}
        </div>
    )
}

export default AlbumView