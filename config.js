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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_55_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcwLFxuICAgICAgICA2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTczLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM2LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxODksXG4gICAgICAgIDg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MixcbiAgICAgICAgNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDU2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4LFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoaWRBc1I5R2FEa0VjV2MrUVBCL3JvdkV6RXZjN0pUaEV0T3NiaTBFUmZnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOanYzZlF3UVNGQ2E5V1MxSkhTMUpRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0YjE4Zjk1LTQ1OGYtNGRhMC04ZDQ0LTM4ZGMzYzRjNTFkN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAxNTAsXG4gICAgICA3NCxcbiAgICAgIDEwNCxcbiAgICAgIDE3NCxcbiAgICAgIDIxNSxcbiAgICAgIDIwMCxcbiAgICAgIDU3LFxuICAgICAgMTcsXG4gICAgICAxODAsXG4gICAgICAyMDUsXG4gICAgICAxMzcsXG4gICAgICA0NyxcbiAgICAgIDIwMSxcbiAgICAgIDQ0LFxuICAgICAgMTYyLFxuICAgICAgMTMsXG4gICAgICAxMDgsXG4gICAgICAxOCxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMjYsXG4gICAgICAyNDEsXG4gICAgICA1NixcbiAgICAgIDE5MyxcbiAgICAgIDM4LFxuICAgICAgMjM4LFxuICAgICAgOTksXG4gICAgICA1MCxcbiAgICAgIDE4MCxcbiAgICAgIDE4LFxuICAgICAgMTEwLFxuICAgICAgMTc0LFxuICAgICAgMjQ4LFxuICAgICAgNyxcbiAgICAgIDQ4LFxuICAgICAgMTA2LFxuICAgICAgMTYxLFxuICAgICAgMTI2LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhUQ1hFWEJaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc4NDk5MTczNTA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlYTwnZWjXFxuXFxuIPCdlYtcXG5cXG7wnZWgXFxuXFxu8J2VmVxcblxcbvCdlZpcXG5cXG7wnZWVXCIsXG4gICAgXCJsaWRcIjogXCIxMTE4NjI2NTgxNTQ2Mjc6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQS3hsYjBFRU5tOXM3UUdHQThnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVocFJzcUpXd0NPUXJycmlSYUd6TVNBUE50V3J5cTlIOFk2MndOY2E3Uk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVnJOcGIyV1BuU3VnQjdhbmQ1dkZyck10SE9CaWdaTnd5WUpaMnBUVGsveFRWWkcyZlFvUjdEdC85dUJnbmwvZWNxWHlvWXJ5d1BCYm01bnZUNHY1Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibDN0MUxBOWxUckFCMWVqZVQ0TGdNa0lTWGZJYzFILzZyU3FIWERJWG5xajVyVG15OGN5bkxINlUzY0ZMMHhKSVIrd3BPR0RkOUpXYVl0R3FBc3BBQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3ODQ5OTE3MzUwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MDgxMjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBU0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFTTC5qc29uIjogIntcImtleURhdGFcIjpcIlIwSmoyQitRVTZOYUF4SWpFYUx0VFBLMm5QYnJmSmhnaTBQV01FU2lacjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIwMjAxODU0NixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MzMxNzAyODcxXCJ9Igp9"  // PUT your SESSION_ID 


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
