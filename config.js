const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_53_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDc1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3LFxuICAgICAgICA1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiNEQxQWwvTmoyUExJRGNBd3BZU0swU0t5NXBZR1hGL0laRExIejZmenVBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODkzMDM1ODQ1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0Y3MTEyNkYyQzU2MEJCQjQ3RTY1OTU2NDFGODk5OERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5OTc4ODA3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4OTMwMzU4NDUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2N0EyQjgxQjE1Q0JDNUIxRjVDMzMzNkM0NkU5MzlCN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5Nzg4MDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRGFaVkU5MjJSQTJqUnc1SFpPTzlvd1wiLFxuICBcInBob25lSWRcIjogXCI1NjU1OTg2OC1mOTY1LTQ3OTQtOGI5Yy0xNmMxMWE1MzIwYmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMjA3LFxuICAgICAgMTkxLFxuICAgICAgMTc2LFxuICAgICAgMjAzLFxuICAgICAgMjE1LFxuICAgICAgMjExLFxuICAgICAgMTE5LFxuICAgICAgMyxcbiAgICAgIDY1LFxuICAgICAgMTM4LFxuICAgICAgMjA1LFxuICAgICAgMjQ4LFxuICAgICAgMjM2LFxuICAgICAgMjUwLFxuICAgICAgMzAsXG4gICAgICAyNCxcbiAgICAgIDIwMSxcbiAgICAgIDcwLFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAxOTMsXG4gICAgICAyMDEsXG4gICAgICAyLFxuICAgICAgODAsXG4gICAgICAyNTUsXG4gICAgICA4NixcbiAgICAgIDUsXG4gICAgICA5MixcbiAgICAgIDIwNSxcbiAgICAgIDIxNCxcbiAgICAgIDY1LFxuICAgICAgMTE4LFxuICAgICAgMjE4LFxuICAgICAgMjAzLFxuICAgICAgMjI4LFxuICAgICAgMTU2LFxuICAgICAgMTc2LFxuICAgICAgNDMsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEMUtLMzE1TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4OTMwMzU4NDUyOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDE4MzcxNzY1NjU4Nzg6MjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTmF0aGluZ1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01qajB2WUJFTEtXazdRR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibGYwSHhpclpmNHdYTDBNOWFMU0Z1Nzg2S0lqZ21idW1TTEJhTmgrWE93ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0K2g0cTAya09pQlJRODk4L3ZEeVRJSlUyendLUHJJbzd6dDN3a0RTWjlyN2dYWFJFKzJ0NWpwVlJOcFpKekpKK0ovaEMycXpJWG1NY3pCQTVXTmFBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBa2lzYndFNVVoUU5PaUVUWllDK3A3MlRYSFFaVmtZbm9YWGlzYjhuSXpNSFd5TWR5cUdYQUFTQlFvanh5TURhY3dQQ1hsNEpZMXcyRWlFRnFOWHNDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg5MzAzNTg0NTI6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5Nzg4MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMNFZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw0Vi5qc29uIjogIntcImtleURhdGFcIjpcIlNPVmdmaEtPVzRtdGtDMmxPQ1BZbE9ONzNIWS9MSnZ2Q25pS2c5cXJncXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTE3MjU1NjI0LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgwMjk0MjI4ODZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
