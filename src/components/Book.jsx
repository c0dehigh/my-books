import {useParams , useNavigate , useLocation} from "react-router-dom";
import {getBook , deleteBook} from "../data/data";

const Book = () => {
    const params = useParams()
    const location = useLocation()
    const book = getBook(parseInt(params.bookId))
    const navigate = useNavigate()

    if(book){
        return(
            <div>
                <p>Book name : {book.name} </p>
                <p>Book number : {book.number} </p>
                <p>Book date : {book.due} </p>
                <p>Book price : {book.amount} </p>
                <button onClick={()=>{
                    deleteBook(book.number)
                    navigate("/books" + location.search)
                }}>Delete Book</button>
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