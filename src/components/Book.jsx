import {useParams } from "react-router-dom";
import {getBook} from "../data/data";

const Book = () => {
    const params = useParams()
    const book = getBook(parseInt(params.bookId))
    return(
        <div>
            <p>Book name : {book.name} </p>
            <p>Book number : {book.number} </p>
            <p>Book date : {book.due} </p>
            <p>Book price : {book.amount} </p>
            <button>Delete Book</button>
        </div>
    )
}

export default Book