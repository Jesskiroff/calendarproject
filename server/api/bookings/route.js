// import { NextResponse } from "next/server";
// // import { dateCalendarClasses } from "@mui/x-date-pickers";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function POST(req, res) {
// console.log("*********Here******");
//   const body = await req.json();
//   console.log(body);
//   const { date, time } = body;
// console.log(dateCalendarClasses, time);

// const user = await prisma.user.create({
//   data: {
//     selectedDate: date,
//     selectedTime: time,
//   },
// });

// return NextResponse.json(user, { status: 200 });
// }

const router = require("express").Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  console.log("Here");
});
