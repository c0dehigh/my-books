import {useParams} from "react-router-dom";

const Book = () => {
    const bookId = useParams()
    return(
        <div>
            <p>Book id : {bookId.bookId} </p>
        </div>
    )
}

export default Book