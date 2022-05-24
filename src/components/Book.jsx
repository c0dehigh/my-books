import {useParams } from "react-router-dom";
import {getBook} from "../data/data";

const Book = () => {
    const params = useParams()
    const book = getBook(parseInt(params.bookId))

    if(book){
        return(
            <div>
                <p>Book name : {book.name} </p>
                <p>Book number : {book.number} </p>
                <p>Book date : {book.due} </p>
                <p>Book price : {book.amount} </p>
                <button>Delete Book</button>
            </div>
        )
    } else {
        return (
            <div>
                <h2>This book not found</h2>
            </div>
        )
    }

}

export default Book