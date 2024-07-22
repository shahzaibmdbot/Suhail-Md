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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_59_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNixcbiAgICAgICAgNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDM4LFxuICAgICAgICA2NixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4TDN3aWxCK2dwSVdPZkxMdFlqeUdBSG9rN0U0aEE0amxKdWRIS2c5VUR3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIxMjkxMzM3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUUxMUFGOEI3NzhFMUMyMzQwMjZDQUM3NzE4NDhGOTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNjYwMzU5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImg5OXVfVVpMUjhpOG00SEdEVkpQV3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGZhZDU5MzMtZWIxNy00Yjk4LWE1MGMtODYxMjdhNTQ4NGJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDE2NixcbiAgICAgIDEyNixcbiAgICAgIDE0LFxuICAgICAgMjE2LFxuICAgICAgMTMwLFxuICAgICAgOTcsXG4gICAgICAxMTIsXG4gICAgICA4LFxuICAgICAgMjE3LFxuICAgICAgMTcwLFxuICAgICAgMjQyLFxuICAgICAgOTIsXG4gICAgICAxOSxcbiAgICAgIDEyNixcbiAgICAgIDk1LFxuICAgICAgMTMwLFxuICAgICAgNjYsXG4gICAgICAzOCxcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDc4LFxuICAgICAgMjQsXG4gICAgICAxMDIsXG4gICAgICAxMCxcbiAgICAgIDE4OCxcbiAgICAgIDE1NSxcbiAgICAgIDIxMixcbiAgICAgIDE0MCxcbiAgICAgIDksXG4gICAgICAzNSxcbiAgICAgIDEzMixcbiAgICAgIDM3LFxuICAgICAgNzQsXG4gICAgICAxNTgsXG4gICAgICAxMDMsXG4gICAgICAxMzAsXG4gICAgICA5OCxcbiAgICAgIDMwLFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFNMWlBQRFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIxMjkxMzM3Mzo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDYzOTAxNTk4OTY2OTA6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnpRMlI0UXYrZjV0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXRzhiYVVqNkhSNDlxbFU1VDRRaitkTmpINTBVam5JZHFJTE92TnFrcUI4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVJQUl0ZGh4Y3hadG05MkFiWmNib05ZeHNhcGsxVVlEaTNvb3RFRXZZUEd5MEQ1Tzk1ZWJwSHhZK0l0Z04rRDFpb2xneG5SQU92Ry9wQUE3ZFlMSURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxneTBEZk5FcE5YcERyS2wxckpzZ1dXTGRna205RWplNkZEU0lxRVRPSmNwMEF2RjlpdkQrOGxnb2xnaEJ4Q0R5cTN6OW42VEc5OXBDak8xK21uL0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzIxMjkxMzM3Mzo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY2MDM1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5LOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTks4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWHNManp1NG9UaDI2YVI3VS8xSDJwbkc4T2doTWd4TFh5cEdyaittVENnND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NDM4MzAwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNTgyNDY2MTIwXCJ9Igp9"  // PUT your SESSION_ID 


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
