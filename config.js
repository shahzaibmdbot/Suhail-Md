const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="tohidkhan9050482152@gmail.com"
global.location="Haryana,India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Haryana";
global.github=process.env.GITHUB|| "https://github.com/tohidkhan6332/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu";
global.website=process.env.GURL || "https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/042cd0b6121a7923fd5d2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ TOHID²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917849917350";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_57_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMSxcbiAgICAgICAgMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICA1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMeXc4bWNNMjZCWGxkV2NIbTg0eDFNN3dRcmdIamVTNFBPQVZ0YXBTWis0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrZ0hUNWlUSFJ2aVN5azVRTnAzd01nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg0MmZhNDY3LThlNDUtNGQ5Yi05NGNmLWZkZDFiYmNhMTdlM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDEsXG4gICAgICAxMjMsXG4gICAgICAxMDAsXG4gICAgICAxNTIsXG4gICAgICA4MyxcbiAgICAgIDI0NyxcbiAgICAgIDIxNyxcbiAgICAgIDIwOCxcbiAgICAgIDEzMCxcbiAgICAgIDIwMCxcbiAgICAgIDE5MixcbiAgICAgIDM1LFxuICAgICAgMTExLFxuICAgICAgNDcsXG4gICAgICAxNzgsXG4gICAgICA2LFxuICAgICAgMjI0LFxuICAgICAgNDQsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICAyMDgsXG4gICAgICAxNjksXG4gICAgICAxLFxuICAgICAgMjQsXG4gICAgICA1MixcbiAgICAgIDE1NyxcbiAgICAgIDI0MCxcbiAgICAgIDI0LFxuICAgICAgMjUsXG4gICAgICAyMCxcbiAgICAgIDIxLFxuICAgICAgMTU4LFxuICAgICAgMjQ3LFxuICAgICAgMTE2LFxuICAgICAgMTU4LFxuICAgICAgMjA3LFxuICAgICAgMTI5LFxuICAgICAgNzAsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTY3RlIyRjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEzMDQ3Njk3NjozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJhZCBNdW5kYVwiLFxuICAgIFwibGlkXCI6IFwiMjc3NjgyOTU2ODEyMzAzOjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05lbzFKQUJFSkxSc0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOG8za2Q5NTZYbHljdFV0bFEzd1Fnc0I2WENjclNRTHhzdEtTMlVwRlBobz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIreWt5YXRXWDV1SjA4V0w5OUVIaVg4eXFxZElxWmVnRlBZN2RKWlI0T3ROWUg1K0YzUHFHQmZVM0M3RlpBcTU4K2xSalRDRDc2eS80NmRMM05ScVpEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPTHpQeDh5dWd0RVByRFhqalZhc1FNaThtbkN5VnJ5cEhRSGFrMXZJUW9FdWpxOWZtTDhqTHJHMEVPYnA3ckIwRFFrKzZRV0JYVDBsRnZRanlUeXBpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMzA0NzY5NzY6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NjE0NjJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "https://telegra.ph/file/042cd0b6121a7923fd5d2.jpg", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "TOHID-KHAN",
  ownername:process.env.OWNER_NAME|| "MR-TOHID",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
