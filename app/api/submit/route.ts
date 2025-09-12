import { google } from "googleapis";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return Response.json({ status: "error", message: "Email is required" }, { status: 400 });
        }
        // console.log("Service account email:", process.env.GOOGLE_CLIENT_EMAIL);
        // console.log("Sheet ID:", process.env.SHEET_ID);

        const auth = new google.auth.JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        try {
            await sheets.spreadsheets.values.get({
                spreadsheetId: process.env.SHEET_ID,
                range: "Sheet1!A1:A1",
            });
            console.log("Read permission verified");
        } catch (readError) {
            console.error("Cannot read sheet:", readError);
            return Response.json({
                status: "error",
                message: "Sheet access denied. Check sharing permissions."
            }, { status: 403 });
        }


        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: "Sheet1!A:A",
            valueInputOption: "RAW",
            requestBody: {
                values: [[email]],
            },
        });

        return Response.json({ status: "ok" }, { status: 200 });
    } catch (err: any) {
        console.error("Error appending to sheet:", err);
        return Response.json({
            status: "error",
            message: "Failed to save email. Please try again."
        }, { status: 500 });
    }
}