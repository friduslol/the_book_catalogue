import Styles from "../styles/Admin.module.css"
import { useState, useEffect, useRef, useContext } from "react"
import {  BookContext } from "../contexts/BookContext"

const AdminPage = () => {
    const { addBook } = useContext(BookContext)
    const [coverImg, setCoverImg] = useState(null)
    const titleRef = useRef()
    const descRef = useRef()
    const authorRef = useRef()
    const isbnRef = useRef()
    const pubYearRef = useRef()
    const pagesRef = useRef()
    const categoryRef = useRef()

    const uploadImg = () => {
        let ref = document.getElementById('fileUpload')
        ref.click()
    }

   const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setCoverImg(e.target.files[0])
        }

    }
   const handleAddBook = async (e) => {

        e.preventDefault()

        let bookObj = {
            title: titleRef.current.value,
            description: descRef.current.value,
            author: authorRef.current.value,
            isbn: isbnRef.current.value,
            publicationYear: pubYearRef.current.value,
            pages: pagesRef.current.value,
            category: categoryRef.current.value,
            rating: 0,
            coverImg: coverImg ? coverImg : "No cover available",
        }

        console.log("bookObj:", bookObj)

        let addedBookResult = await addBook(bookObj)

        console.log("Res:", addedBookResult);
    }

    return(
        <div className={Styles.adminContainer}>
            <div className={Styles.formsWrapper}>
                <form className={Styles.formWrapper} onSubmit={handleAddBook}>
                    <h1 className={Styles.formHeader}>Add a book</h1>
                    <input className={Styles.input} type="text" placeholder="Title" ref={titleRef} required/>
                    <input className={Styles.input} type="text" placeholder="Author" ref={authorRef} required/>
                    <input className={Styles.input} type="number" placeholder="Publication year" ref={pubYearRef} required/>
                    <input className={Styles.input} type="text" placeholder="Description" ref={descRef} required/>
                    <input className={Styles.input} type="text" placeholder="Category" ref={categoryRef} required/>
                    <input className={Styles.input} type="number" placeholder="Pages" ref={pagesRef} required/>
                    <input className={Styles.input} type="text" placeholder="Isbn" ref={isbnRef} required/>

                    <div className={Styles.uploadImgWrapper}>
                        <input type="button" className={Styles.uploadButton} value="Choose image"  onClick={() => uploadImg()}/>
                        <input type="file" name="upload" accept="image/*" id="fileUpload" className={Styles.fileUpload}  onChange={handleFileChange}/>
                        <div className={Styles.filenameWrapper}>
                            <span id="fileName" className={Styles.fileName}>
                                {
                                    coverImg
                                        ? `${coverImg.name}`
                                        : "..."
                                }
                            </span>
                        </div>

                    </div>

                    <button type="submit" className={Styles.actionBtn}>Add</button>
                </form>

                <form className={Styles.formWrapper}>
                    <h1 className={Styles.formHeader} >Remove a book</h1>
                    <input className={Styles.input} type="number" placeholder="idNumber" />
                    <input className={Styles.input} type="Name" placeholder="Title"/>
                    <button className={Styles.actionBtn}>Remove</button>
                </form>
            </div>
        </div>
    )
}

export default AdminPage;