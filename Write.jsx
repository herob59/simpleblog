import './write.css'

function Write() {
    return (
        <div className="write">
        <img 
        className="writeImg"
        src="https://www.ryrob.com/wp-content/uploads/2020/11/55-Best-Affiliate-Programs-for-Bloggers-to-Earn-Affiliate-Income-Blogging.jpg"
        alt=""
        />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                <input type="file"  id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell Your story...."
                    type="text"
                    className="writeInput writeText">
                    </textarea>
                    <button className="writeSubmit">Publish</button>
                </div>
            </form>
            
        </div>
    )
}

export default Write
