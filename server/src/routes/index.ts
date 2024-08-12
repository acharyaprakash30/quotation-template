import express from "express";
import prisma from "../utils/client";
import uploadMiddleware from "../utils/Upload";

const router = express.Router();

router
  .route("/quotation")
  .get( async (req, res) => {
    try {
      let quotations = await prisma.quotation.findFirst({
        include: {
          company: true,
        },
      });
      res.status(200).json({ data: quotations, message: "success" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  })

  .post(
    uploadMiddleware([
        { name: "logo", maxCount: 1 },
        { name: "managerSignature", maxCount: 1 },
      ]),
    async (req:any, res) => {
    try {

      let { name, manager, phoneNumber, ...rest } =req.body;
      let logo =req.files && req.files?.logo ?  req.files?.logo?.[0]?.filename : "";
      let managerSignature = req.files && req.files?.managerSignature ? req.files?.managerSignature?.[0]?.filename : "";
 
      let company = await prisma.company.findFirst();
      let quotation = await prisma.quotation.findFirst();
      let companyData = {
        name,
        logo,
        manager,
        managerSignature,
        phoneNumber,
      };

      if (company && quotation) {
        await prisma.company.update({
          where: {
            id: company.id,
          },
          data: companyData,
        });
        await prisma.quotation.update({
          where: {
            id: quotation.id,
          },
          data: {
            ...rest,
            companyId: company.id,
          },
        });
      } else {
        let newCompany = await prisma.company.create({
          data: {
            name,
            logo,
            manager,
            managerSignature,
            phoneNumber,
          },
        });

        await prisma.quotation.create({
          data: {
            ...rest,
            companyId: newCompany.id,
          },
        });
      }
      res.status(200).json({ data: { ...req.body }, message: "success" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;
