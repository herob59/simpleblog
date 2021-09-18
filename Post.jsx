import "./post.css"


function Post() {
    return (
        <div className="post">
        <img
        className="postImg"
        src="https://www.ryrob.com/wp-content/uploads/2020/11/55-Best-Affiliate-Programs-for-Bloggers-to-Earn-Affiliate-Income-Blogging.jpg"
        alt=""
        />
        <div className="postInfo" >
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
        
            </div>
            <span className="postTitle">56 Best Affiliate Programs 
            for Bloggers in 2021 (to Earn Income)
            </span>
            <hr/>
            <span className="postDate">UPDATED ON SEPTEMBER 14, 2021 BY RYAN ROBINSON</span>
        </div>
            <p className="postDesc">
            Over the past six years, I’ve gone from learning how to start a blog, 
            to now reaching more than 500,000+ monthly readers and earning upwards 
            of $50,000/mo—mostly from the blogger affiliate programs I’m a member of. 
            Along the way, I’ve learned which affiliate programs are genuinely beneficial 
            to both bloggers and your readers, Let’s talk about blogging for dummies. 
            Have you been thinking about starting a blog… but wondering if you’ve missed your 
            chance? Maybe it seems like big-name bloggers have conquered all the best blogging 
            niches out there
            </p>
        </div>
    )
}

export default Post
