import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    let token;
    if (req.headers.token) {
      token = req.headers.token;
    } else if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(404).json({
        success: false,
        message: "User not authorized for this.",
      });
    }
    const token_decode = jwt.decode(token);
    req.clerkId = token_decode.clerkId;
    next();
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
    console.log("Error in authentication of a user:", error.message);
  }
};

export default authUser;
