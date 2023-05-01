import User from "../model/authModel.js";
import Post from "../model/postModel.js";

export const getPopularProfiles = async (req, res) => {
  try {
    const users = await User.aggregate([
        { 
          $project: { 
            _id: 1, 
            firstName: 1, 
            lastName: 1,
            followersCount: { $size: "$followers" },
          } 
        },
        { $sort: { followersCount: -1 } },
        { $limit: 10 },
      ]);

    const updatedUsers = await Promise.all(
      users.map(async (user) => {
        const post = await Post.findOne({ userId: user._id, profile: true });
        if (post) {
          return {
            ...user,
            profileImage: post.post,
          };
        } else {
          return {
            ...user,
            profileImage: "https://res.cloudinary.com/dlqau5qcx/image/upload/v1682907755/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s_xqt6cg.png",
          };
        }
      })
    );
    res.json(updatedUsers);

  } catch (err) {
    console.log(err);
    res.json("Server error");
  }
};
