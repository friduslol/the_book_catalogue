import Styles from "../styles/Admin.module.css"
import { useState, useEffect } from "react";

const AdminPage = () => {
    const [input, setInput] = useState('')

    const uploadImg = () => {
       let ref = document.getElementById('fileUpload')
       ref.click()
       console.log(ref)
    }

   useEffect(() => {
       if(input.length) {
            let imageName = input.slice(12)
            if(imageName.length < 16) {
                document.getElementById('fileName').innerHTML = imageName
            } else {
                document.getElementById('fileName').innerHTML = imageName.slice(0, 13) + "..."
            }
       } else {
           return;
       }
   }, [input])

    return(
        <div className={Styles.adminContainer}>
            <div className={Styles.formsWrapper}>
                <form className={Styles.formWrapper}>
                    <h1 className={Styles.formHeader} >Add a book</h1>
                    <input className={Styles.input} type="number" placeholder="idNumber" />
                    <input className={Styles.input} type="Name" placeholder="Title"/>

                    <div className={Styles.uploadImgWrapper}>
                        <input type="button" className={Styles.uploadButton} value="Choose image" onClick={() => uploadImg()} />
                        <input type="file" name="upload" accept="image/*" id="fileUpload" value={input} onInput={e => setInput(e.target.value)} className={Styles.fileUpload} />
                        <div className={Styles.filenameWrapper}>
                            <span id="fileName" className={Styles.fileName}>...</span>
                        </div>

                    </div>

                    <button className={Styles.actionBtn}>Add</button>
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