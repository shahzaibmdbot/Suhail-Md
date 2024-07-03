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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_35_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDgzLFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDQsXG4gICAgICAgIDg5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3LFxuICAgICAgICAzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyLFxuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDk0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE1LFxuICAgICAgICA4OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiejY5cDR6bW9hSG9mUE1yMTExaVV6a2sySkNGR1VlSjAwUU4wOGdneUNBdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMF83ZjhTYjVULS1YU0NmN3lNQ0tVQVwiLFxuICBcInBob25lSWRcIjogXCIyOGY1NDlmMC02ZTdkLTQ2ODEtYWI5YS1mY2ZhMGMyYmEzYmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDE1MSxcbiAgICAgIDExNixcbiAgICAgIDIwMCxcbiAgICAgIDE2MixcbiAgICAgIDU4LFxuICAgICAgMjUyLFxuICAgICAgMzcsXG4gICAgICAyOCxcbiAgICAgIDE2OCxcbiAgICAgIDE4MyxcbiAgICAgIDI1NCxcbiAgICAgIDE0OCxcbiAgICAgIDM2LFxuICAgICAgMTk4LFxuICAgICAgMjQ0LFxuICAgICAgMTUyLFxuICAgICAgMjI4LFxuICAgICAgMjQsXG4gICAgICA2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICAyNyxcbiAgICAgIDI0MyxcbiAgICAgIDE4OCxcbiAgICAgIDEzNCxcbiAgICAgIDU3LFxuICAgICAgMzUsXG4gICAgICA0OSxcbiAgICAgIDMzLFxuICAgICAgMjIsXG4gICAgICA3NyxcbiAgICAgIDIwMCxcbiAgICAgIDEwLFxuICAgICAgODMsXG4gICAgICAxNzgsXG4gICAgICA2NCxcbiAgICAgIDYxLFxuICAgICAgMTU5LFxuICAgICAgMjU1LFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNWVjM5VEVLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc4NDk5MTczNTA6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZWE8J2Vo1xcblxcbiDwnZWLXFxuXFxu8J2VoFxcblxcbvCdlZlcXG5cXG7wnZWaXFxuXFxu8J2VlVwiLFxuICAgIFwibGlkXCI6IFwiMTExODYyNjU4MTU0NjI3Ojk1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BLeGxiMEVFTlBTbExRR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidWhwUnNxSld3Q09RcnJyaVJhR3pNU0FQTnRXcnlxOUg4WTYyd05jYTdSTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZdTJVV1FTa1QyR1BHbVVndktPVlZlV2czTnhpbnAwN3hUMnZIZFQ5NWJxd0wyM2M0UHh0NGU4eGJnb3pSWHp6UVU1UzlBUmMzUTlQM0xaNE1ubW9Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSV2NGdEx1cUltcm5hbk9QWWY1WllyUTY3a3dVbEtObk51aHJGR2FnZVpFQ2NaRzJVMU9iZkZQRFVCRzhYU2RNSnFEamNSK1RUOUdOVzlObGlXUWlCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc4NDk5MTczNTA6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMDI5MDNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
