import { NextResponse } from "next/server";

export async function POST() {
  const applicationId =
    "KM26-" + Math.random().toString(36).slice(2, 8).toUpperCase();
  return NextResponse.json({ ok: true, applicationId });
}

