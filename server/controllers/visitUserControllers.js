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
            const profilePost = await Posts.findOne({userId: id , profile: true})
            let profileImageUrl;
            if (profilePost) {
              profileImageUrl = profilePost.post;
            } else {
              profileImageUrl =
              "https://res.cloudinary.com/dlqau5qcx/image/upload/v1682847664/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s_iqbtql.webp";
            }
            for (const post of posts) {
              postUserVisit.push({
                post: post.post,
                data: post.data,
                profileImageUrl: profileImageUrl,
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

export const getUserProfileCover = async (req, res) => {
    try {
      const userId = req.params.id;
  
      const profileImage = await Posts.findOne({ userId: userId, profile: true });
      const profileImageUrl = profileImage ? profileImage.post : "https://res.cloudinary.com/dlqau5qcx/image/upload/v1682847664/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s_iqbtql.webp";
  
      const coverImage = await Posts.findOne({ userId: userId, cover: true });
      const coverImageUrl = coverImage ? coverImage.post :"https://img.freepik.com/free-vector/blank-meadow-landscape-scene_1308-59927.jpg?w=2000";
  
      res.status(200).json({ profileImageUrl, coverImageUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  };