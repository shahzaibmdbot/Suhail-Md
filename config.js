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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_32_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMzLFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICA1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICA1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2LFxuICAgICAgICA3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICA0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlc4Tmc0TXhER2FlT3VBSnU4VEg1eC9FM3ZJdG1sT1kwZW5JbU9XL2xoTms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjEyOTEzMzczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGM0M4MTdEQkVBNjVCOEFFM0QwNjc0MEJFODAwNjczN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2NTUxMzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM3RBdjlJa2NTeGlMb2ZLX2VNX3UtUVwiLFxuICBcInBob25lSWRcIjogXCJlOGNkNmQ3Yy1lZDAxLTQxODQtYjUzNC03ZDNmMTNiODA0NTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDE0OSxcbiAgICAgIDEyLFxuICAgICAgMTM0LFxuICAgICAgNDIsXG4gICAgICA1NSxcbiAgICAgIDcsXG4gICAgICAwLFxuICAgICAgMTAwLFxuICAgICAgNCxcbiAgICAgIDM0LFxuICAgICAgNjUsXG4gICAgICAyMjAsXG4gICAgICAyNDYsXG4gICAgICAyMTUsXG4gICAgICAyNTQsXG4gICAgICAzOSxcbiAgICAgIDIsXG4gICAgICA1MSxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NixcbiAgICAgIDQsXG4gICAgICAxNzEsXG4gICAgICAyMzksXG4gICAgICAzNCxcbiAgICAgIDExOCxcbiAgICAgIDE2MyxcbiAgICAgIDExNixcbiAgICAgIDE3MyxcbiAgICAgIDE1OSxcbiAgICAgIDEzMixcbiAgICAgIDIwNixcbiAgICAgIDE5OCxcbiAgICAgIDIwNyxcbiAgICAgIDI0OSxcbiAgICAgIDkyLFxuICAgICAgMjQ1LFxuICAgICAgNDUsXG4gICAgICAyMyxcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOQTIzRzRDVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjEyOTEzMzczOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NjM5MDE1OTg5NjY5MDo0MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJIYWZpeiBTaGFoemFpYlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2UTJSNFEwNzc1dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV0c4YmFVajZIUjQ5cWxVNVQ0UWorZE5qSDUwVWpuSWRxSUxPdk5xa3FCOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLVzhURlp3UzVjT0dlMzF1T3hrcEtsSk9LcHJoekhteitTZzVUT0cwUVZFUHpFbWZrUDhIbjBITjV1SXJERzhVSjhaamJzaGxBcXVTdW1TRmhoSlBCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzdll1MVo2aE54eEdRN21nSkM3OWNzNDlIN25BZVVjVWFweVRsK3BYejdPeXJBVlVFREswZHFwZThEOTB5N3dHMnJjZmwwS1RqY2lrc2tlNUtUckNnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMTI5MTMzNzM6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NTUxMjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOSzhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5LOC5qc29uIjogIntcImtleURhdGFcIjpcIlhzTGp6dTRvVGgyNmFSN1UvMUgycG5HOE9naE1neExYeXBHcmorbVRDZzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjQzODMwMDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU4MjQ2NjEyMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "https://telegra.ph/file/042cd0b6121a7923fd5d2.jpg", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MrTohid",
  packname: process.env.PACK_NAME || "MrTohid",
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
  LANG: ( process.env.THEME ||  "TOHID"  ).toUpperCase(),



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
