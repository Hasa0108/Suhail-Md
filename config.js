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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_04_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYzLFxuICAgICAgICA2MixcbiAgICAgICAgODMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc2LFxuICAgICAgICA1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDcwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzLFxuICAgICAgICA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMzEsXG4gICAgICAgIDgwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MixcbiAgICAgICAgMTcwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBCd2tnMUpHNDFHU1A1Q2doUGdMLzlGQnI3MWo4RmdRL0t6SzJNeW9mb1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZKVVJFcDh0U1FTYmFLdWdtT1dpWFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjBkYWY0NTQtYzA1Yy00YzQzLWEyMDctNDE4MmEyZmEzNGU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDIxMyxcbiAgICAgIDE3MyxcbiAgICAgIDE4MixcbiAgICAgIDEwMyxcbiAgICAgIDI1MSxcbiAgICAgIDk2LFxuICAgICAgMTY2LFxuICAgICAgMTY1LFxuICAgICAgMjE1LFxuICAgICAgMTI0LFxuICAgICAgMTM1LFxuICAgICAgMTQ0LFxuICAgICAgMTQyLFxuICAgICAgNDcsXG4gICAgICAxNDIsXG4gICAgICAxMzQsXG4gICAgICAyMDAsXG4gICAgICA3LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAyNTMsXG4gICAgICAxMzIsXG4gICAgICA3NixcbiAgICAgIDI1NCxcbiAgICAgIDQ2LFxuICAgICAgMTYzLFxuICAgICAgMTM4LFxuICAgICAgMTMyLFxuICAgICAgOTYsXG4gICAgICA2NSxcbiAgICAgIDI0MixcbiAgICAgIDE3LFxuICAgICAgODQsXG4gICAgICAyMTIsXG4gICAgICAxNTYsXG4gICAgICAyMDEsXG4gICAgICAxMjAsXG4gICAgICA1NixcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjROTFlROEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzcxMzA2MTg4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIYXNhcmFuZ2FcIixcbiAgICBcImxpZFwiOiBcIjIzNjAwMDI0ODg2MDc1ODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pMWTNiQUhFTmpEK0xJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ1kyNlg4anVYcVhoMmJ3aktmM283Q0tIeGp2UW43NzBIKzgzWThSNTVVdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUZmozSDUvbWpkYUdsRVhRQUpIdTJoZWZqUHNrSFM3bC9HZGp1VTl5WkxPMjF2SDJKcVlqcStuNyttQUZjT051SEhhNWloMG1mZmV1S3hLQlE3UnBDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZZFRLY1pUTnRtM2hCNTlhSnVQL1JEOWxFZEdhOTFxaWJoMHMxR0J6R1luWE9pUTEvMS95MlhvZ05rY21BdkFDNTUxOVppa1QzQzE5NTB6QlZteWFqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MTMwNjE4ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NDQ1MDgzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
