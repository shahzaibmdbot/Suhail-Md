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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_26_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4LFxuICAgICAgICA1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDkzLFxuICAgICAgICA0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDksXG4gICAgICAgIDE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDM4LFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NixcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAzOCxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJueFZ1am1qdUcyUDZPS0h6UVFhclNtR0o4cmlCSGd4UTg1MnNyRmV4WHYwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkdnJVSWZBb1JFR2kxdENiM3FFWGVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3MjQ2MjFhLTQzMGYtNDk5ZC1hN2QwLTI5NDFhMjAyNzk3OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAxNzgsXG4gICAgICA4NixcbiAgICAgIDE2NCxcbiAgICAgIDE0OSxcbiAgICAgIDE4NSxcbiAgICAgIDg0LFxuICAgICAgMTcsXG4gICAgICA3LFxuICAgICAgMTg2LFxuICAgICAgNjUsXG4gICAgICAyMTcsXG4gICAgICA1MCxcbiAgICAgIDExOCxcbiAgICAgIDEwNyxcbiAgICAgIDk0LFxuICAgICAgNDUsXG4gICAgICAyMzQsXG4gICAgICAxNjUsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgMjA4LFxuICAgICAgNjMsXG4gICAgICA0NyxcbiAgICAgIDE5OCxcbiAgICAgIDIxMyxcbiAgICAgIDEyLFxuICAgICAgMTAyLFxuICAgICAgMzAsXG4gICAgICAyNDUsXG4gICAgICAyNTUsXG4gICAgICA5NixcbiAgICAgIDI0LFxuICAgICAgMjksXG4gICAgICAxODgsXG4gICAgICAxNzYsXG4gICAgICAxNDEsXG4gICAgICAxODEsXG4gICAgICAyMTMsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDTDlZQ0pLNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDg0MTU0OTAwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSGFmaXogU2hhaHphaWJcIixcbiAgICBcImxpZFwiOiBcIjI1NTQwOTA3MTg4NjQxNDoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM2YyNkFHRUs2SjliUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNsV3dVVkwwNUJLSDJ6eXZFUjlBeU0rQUNsSk1uN3E1MWNNN09mN1pnVzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidEZuUkE1WEIwaFRtbnZkdjYvN0YzOXVqTzNYd05mTUgwTDVyQTNzTjk0N0hYTi9EVm0vR2U4V1oyeUdSaTNQQkREMTF3bUQ0M2RzeTB5dUd1VmoxRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieFF4Ykx6dDI2eURlQVcxUDdGZU93aGZQN0NUUHZTZzRSaUxGazJIaS9sUURYVmh4c2FOY25lQjBqcG9nQnJLM04xcTMzWnVnV3FZQVRYY1haOXdnaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDg0MTU0OTAwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU4Mjc3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9IcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0hwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMHVsSnZSZENKVTRPYkdKdmVuV3plWE9TRUhDbjdvaTZtQjBJdU0rSlVKZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjc5MjI0NzE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1ODI3NzQxNTlcIn0iCn0="  // PUT your SESSION_ID 


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
