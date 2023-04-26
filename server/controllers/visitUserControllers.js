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
                "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg";
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
      const profileImageUrl = profileImage ? profileImage.post : "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg";
  
      const coverImage = await Posts.findOne({ userId: userId, cover: true });
      const coverImageUrl = coverImage ? coverImage.post : "https://media.istockphoto.com/id/1315768127/photo/abstract-black-background-empty-black-gradient-room-studio-background-abstract-backgrounds.jpg?b=1&s=170667a&w=0&k=20&c=rrYOb0pJGGjAIu22xkfIfgRZC11jRi39s_AmBMgAah4=";
  
      res.status(200).json({ profileImageUrl, coverImageUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  };  