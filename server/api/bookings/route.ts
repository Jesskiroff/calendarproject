// import { NextResponse } from "next/server";
import { dateCalendarClasses } from "@mui/x-date-pickers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const { date, time } = body;
  console.log(dateCalendarClasses, time);

  const user = await prisma.user.create({
    data: {
      selectedDate: date,
      selectedTime: time,
    },
  });

  return NextResponse.json(user, { status: 200 });
}
