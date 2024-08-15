import multer, { FileFilterCallback } from "multer";
import path from "path";
import { Request, Response, NextFunction } from "express";

declare module "express-serve-static-core" {
  interface Request {
    fileError?: string;
  }
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const uploadPath = path.join(__dirname, "../../public/");
    console.log("Upload Path:", uploadPath);
    callback(null, uploadPath);
  },
  filename: (req, file, callback) => {
    console.log("File received:", file.originalname);
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    req.fileError = "Upload image file (jpeg/jpg,pdf, png, or gif)!";
    cb(null, false);
  }
};

const uploadMiddleware = (fields: { name: string; maxCount: number }[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const upload = multer({
        storage: storage,
        limits: {
          fileSize: 1024 * 1024 * 5, // 5MB
        },
        fileFilter: fileFilter,
      }).fields(fields);
  
      upload(req, res, (err: any) => {
        if (err instanceof multer.MulterError) {
          return res.status(500).json({
            success: false,
            error: "Multer error",
          });
        }
        if (req.fileError) {
          return res.status(415).json({
            success: false,
            error: {
              logo: req.fileError,
            },
          });
        } else if (err) {
          console.error(err);
          return res.status(500).json({
            success: false,
            error: "Server Error",
          });
        }
  
        next();
      });
    };
  };
  
  export default uploadMiddleware;
  