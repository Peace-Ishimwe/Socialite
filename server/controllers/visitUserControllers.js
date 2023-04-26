import User from "../model/authModel.js"
import Posts from "../model/postModel.js"
import AboutUser from "../model/aboutModel.js"

export const getUserInfoVisit = async (req , res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)
        res.json({firstName:user.firstName, lastName:user.lastName , email:user.email , gender:user.gender , telephone:user.telephone , followers:user.followers , followings:user.followings})
    } catch (err) {
        console.log(err)
    }
}

export const getUserAboutVisit = async (req , res) => {
    const id = req.params.id
    try {
        const about = await AboutUser.findOne({userId: id})
        res.json(about.about)
    } catch (err) {
        console.log(err)
    }
}

export const getUserPostsVisit = async (req , res) => {
    const id = req.params.id
    try {
        const postUserVisit = []
        const userInfo = await User.findById(id)
        const posts = await Posts.find({userId: id})

        if (posts.length > 0) {
            for (const post of posts) {
              postUserVisit.push({
                post: post.post,
                data: post.data,
                date: post.date,
                id: post._id,
                likes: post.likes,
                comments: post.comments.reverse(),
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
              });
            }
            res.json(postUserVisit.reverse());
          } else {
            res.json({ message: "You don't have any posts" });
          }


        // res.json(posts.reverse())
    } catch (err) {
        console.log(err)
    }
}