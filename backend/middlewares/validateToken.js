import jwt from "jsonwebtoken";

export const validateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      const token = authHeader.split(" ")[1];
       const veryfyToken = await jwt.verify(token,process.env.SECRET_KEY,
        (err, decoded) => {
          if (err) {
            return res
              .status(400)
              .json({ sucess: false, message: "Token verification failed" });
          }
          req.user = decoded;
         return next();
        }
      );
      // console.log("verify token",verifyToken)
      // return res.status(200).json({success:true,message:verifyToken})
    } catch (error) {
        console.log(error)
    }
  }
  
};
