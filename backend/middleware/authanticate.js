import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ success: false, message: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res.status(401).json({ success: false, message: "Unauthorized" });
    req.userId = decoded.userID;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ success: false, message: "Token expired" });
    }
    console.log("Error in authenticating", error);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
